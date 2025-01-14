import { Alert, FlatList, SafeAreaView, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import AddPostForm from "@/components/AddPostForm";
import { fetchPosts, Posts } from "@/lib/api";
import PostCard from "@/components/PostCard";

export default function Explore() {
  const [posts, setPosts] = useState<Posts>([]);

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);

  const handleSubmit = async (content: string, image: string) => {
    try {
      let publicUrl = "";
      if (image) {
        const fileExt = image.split(".").pop();
        const fileName = image.replace(/^.*[\\\/]/, "");
        const filePath = `${Date.now()}.${fileExt}`;

        const formData = new FormData();
        const photo = {
          uri: image,
          name: fileName,
          type: `image/${fileExt}`,
        } as unknown as Blob;
        formData.append("file", photo);

        const { error } = await supabase.storage
          .from("posts")
          .upload(filePath, formData);
        if (error) throw error;

        const { data } = supabase.storage.from("posts").getPublicUrl(filePath);
        publicUrl = data.publicUrl;
      }
      const { data, error } = await supabase
        .from("Posts")
        .insert({
          content,
          images: publicUrl
        })
        .select("*, profile: profiles(username, avatar_url)")
        .order("created_at", { ascending: false });
      if (error) {
        console.error(error);
      } else {
        setPosts([data[0], ...posts]);
      }
    } catch (error: any) {
      Alert.alert("Server error", error.message);
    }
  };

  const handleDeletePost = async (id: string) => {
    const { error, data } = await supabase.from("Posts").delete().eq("id", id);
    if (error) {
      Alert.alert("Server error", error.message);
    } else {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  console.log(posts);
  return (
    <SafeAreaView className="bg-background-100 h-full">
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AddPostForm onSubmit={handleSubmit} />
        <Text className="font-bold text-white font-rubik text-3xl">
          Explore new Chirps
        </Text>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingTop: 8 }}
          renderItem={({ item }) => (
            <PostCard post={item} onDelete={() => handleDeletePost(item.id)} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
