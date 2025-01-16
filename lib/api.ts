import { avatar } from "./appwrite";
import { Database } from "@/types/db_types";
import { supabase } from "./supabase";

export const fetchPosts = async () => {
  const { data, error } = await supabase
    .from("Posts")
    .select("*, profile: profiles(username, avatar_url)")
    .order("created_at", { ascending: false });
  if (error) {
    console.error(error);
    return [];
  } else {
    return data;
  }
};

export const downloadAvatar = async (path: string): Promise<string> => {
  try {
    const { data, error } = await supabase.storage
      .from("avatars")
      .download(path);
    if (error) throw error;
    const fr = new FileReader();
    fr.readAsDataURL(data);
    return new Promise(
      (resolve) =>
        (fr.onload = () => {
          resolve(fr.result as string);
        })
    );
  } catch (error) {
    console.log(error);
    return "";
  }
};

export const fetchLikes = async (postId: string) => {
  const { data, error } = await supabase
    .from("posts_likes")
    .select("user_id, id")
    .eq("post_id", postId);
  if (error) {
    console.log("error", error);
    return [];
  } else {
    return data;
  }
};

export type Posts = Awaited<ReturnType<typeof fetchPosts>>;
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type Post = Posts[number];
export type Likes = Awaited<ReturnType<typeof fetchLikes>>;
export type Like = Likes[number];

