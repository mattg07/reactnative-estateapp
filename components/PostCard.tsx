import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Post } from "@/lib/api";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://picsum.photos/536/354" }}
        />
        <Text className="text-white">John Lennon</Text>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    backgroundColor: "#37435C",
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
});
