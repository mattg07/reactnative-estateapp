import AddPostForm from "@/components/AddPostForm";
import { supabase } from "@/lib/supabase";
import { useUserInfo } from "@/lib/userContext";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView,  } from "react-native-safe-area-context";

export default function Profile(){
    // useEffect(() => {
    //     const fetchSinglePost = () => {
    //             const { data, error } = await supabase.from("Posts").select("*").eq('')            
    //     }
    // }, [])
    const {profile} = useUserInfo()
    return(
    <SafeAreaView className="bg-background-100 h-full">
            <View>
                <Text className="text-white text-xl font-bold">
                    {profile?.username}
                </Text>

            </View>
        </SafeAreaView>
    )
}