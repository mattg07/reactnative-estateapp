import { Database } from '@/types/db_types';
import {supabase} from "./supabase"

export const fetchPosts = async () => {
    const { data, error } = await supabase.from("Posts").select("*, profile: profiles(username)");

    if (error) {
      console.error(error);
      return [];
    } else {
      return data
    }
  };

  export type Posts = Awaited<ReturnType<typeof fetchPosts>>
  export type Profile = Database['public']['Tables']['profiles']['Row']
  export type Post = Posts[number]