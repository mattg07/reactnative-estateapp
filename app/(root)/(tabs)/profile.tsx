import AddPostForm from "@/components/AddPostForm";
import ProfileForm from "@/components/ProfileForm";
import { Profile } from "@/lib/api";
import { supabase } from "@/lib/supabase";
import { useUserInfo } from "@/lib/userContext";
import { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const { profile, loading, saveProfile } = useUserInfo();



  return (
    <SafeAreaView className="bg-background-100 h-full">
        <Text className="text-white text-xl m-auto font-bold">
      Profile
        </Text>
      <ProfileForm
        profile={profile}
        loading={loading!}
        onSave={saveProfile!}
        onLogout={() => supabase.auth.signOut()}
      />
      <View>
      </View>
    </SafeAreaView>
  );
}
