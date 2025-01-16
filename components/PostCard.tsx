import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { downloadAvatar, fetchLikes, Likes, Post, Profile } from "@/lib/api";
import { Ionicons } from "@expo/vector-icons";
import { useUserInfo } from "@/lib/userContext";
import Avatar from "./Avatar";
import { supabase } from "@/lib/supabase";

interface Props {
  post: Post;
  onDelete: () => void;
}

export default function PostCard({ post, onDelete }: Props) {
  const profile = post.profile as unknown as Profile;
  const user = useUserInfo();
  const [avatarUrl, setAvatarUrl] = useState("");
  const [likes, setLikes] = useState<Likes>([]);

  const userLikesPost = useMemo(
    () => likes?.find((like) => like.user_id === user?.profile?.id),
    [likes, user]
  );

  useEffect(() => {
    if (profile) {
      downloadAvatar(profile.avatar_url as string).then(setAvatarUrl);
    }
  }, [profile]);

  const toggleLike = async () => {
    if (!user.profile) return;
    if (userLikesPost) {
      const { error } = await supabase
        .from("posts_likes")
        .delete()
        .eq("id", userLikesPost.id);
    } else {
      const { error } = await supabase.from("posts_likes").insert({
        post_id: post.id,
        user_id: user?.profile.id,
      });
      if (error) Alert.alert("Server Error", error.message);
    }
    getLikes()
  };

  const getLikes = useCallback(
    () => fetchLikes(post.id).then(setLikes),
    [post]
  );

  useEffect(() => {
    getLikes();
  }, [getLikes]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar uri={avatarUrl} />
        <Text className="text-white">{profile.username}</Text>
      </View>
      <View style={styles.content}>
        {post.images && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: post.images }} style={styles.image} />
          </View>
        )}
        <Text className="text-white" style={styles.contentText}>
          {post.content}
        </Text>
        <Text className="text-white text-xs opacity-25">
          {new Date(post.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={toggleLike}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Ionicons
              name={userLikesPost ? "heart" : "heart-outline"}
              size={20}
              color={"white"}
            />
            <Text style={{ paddingLeft: 4, color: "white" }}>
              {likes.length}
            </Text>
          </TouchableOpacity>
          {user?.profile?.id === post.user_id && (
            <TouchableOpacity onPress={onDelete}>
              <Ionicons name="trash-bin" size={20} color={"red"} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    backgroundColor: "#37433C",
    width: 380,
    borderRadius: 20,
  },
  avatar: {
    height: 32,
    width: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  content: {
    padding: 16,
  },
  contentText: {
    fontSize: 16,
  },

  imageContainer: {
    width: "100%",
    height: 300,
    marginTop: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 14,
  },
});
