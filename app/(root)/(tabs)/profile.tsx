import AddPostForm from "@/components/AddPostForm";
import ProfileForm from "@/components/ProfileForm";
import { Profile } from "@/lib/api";
import { supabase } from "@/lib/supabase";
import { useUserInfo } from "@/lib/userContext";
import { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const [loading, setLoading] = useState(false);
  const { profile } = useUserInfo();

    const handleSave = async (updatedProfile: Profile) => {
        setLoading(true)
        const {data , error} = await supabase.from('profiles').update(updatedProfile).eq('id', profile!.id)
            if(error){
                Alert.alert("Server error", error.message)
            }
        setLoading(false)

    }


  return (
    <SafeAreaView className="bg-background-100 h-full">
        <Text className="text-white text-xl font-bold">
          {profile?.username}
        </Text>
      <ProfileForm
        profile={profile}
        loading={false}
        onSave={handleSave}
        onLogout={() => supabase.auth.signOut()}
      />
      <View>
      </View>
    </SafeAreaView>
  );
}
