import AddPostForm from "@/components/AddPostForm";
import { useUserInfo } from "@/lib/userContext";
import { View, Text } from "react-native";
import { SafeAreaView,  } from "react-native-safe-area-context";

export default function Profile(){
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