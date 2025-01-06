import AddPostForm from "@/components/AddPostForm";
import { View, Text } from "react-native";
import { SafeAreaView,  } from "react-native-safe-area-context";

export default function Profile(){
    return(
    <SafeAreaView className="bg-background-100 h-full">
            <View>
                <Text className="text-white text-xl font-bold">
                    Profile
                </Text>

            </View>
        </SafeAreaView>
    )
}