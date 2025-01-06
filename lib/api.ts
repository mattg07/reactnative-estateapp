import {supabase} from "./supabase"

export const fetchPosts = async () => {
    const { data, error } = await supabase.from("Posts").select("*");

    if (error) {
      console.error(error);
      return [];
    } else {
      return data
    }
  };

  export type Posts = Awaited<ReturnType<typeof fetchPosts>>
  export type Post = Posts[number]