import icons from "@/constants/icons";
import { Link } from "expo-router";
import { SafeAreaView, Text, View, Image, TouchableOpacity} from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={{flex:1}}>
    <View className="bg-background-100 pt-10"
    style={{
      flex: 1,
      alignItems: "center",
    }}
    >
 <Image className="mt-10 mb-40 rounded-md"
        source={require("../../../assets/images/cactus.png")}
        style={{ width: 180, height: 180 }}
      />

      <Text className="font-bold font-rubik text-3xl text-white">Welcome to CHIRP!</Text>
      <Text className="font-semibold font-rubik text-2xl text-violet">Where beautiful things happen!</Text>
            <TouchableOpacity className=" bg-white  shadow-md mt-10 py-4  shadow-zinc-300 rounded-full w-4/5">
                  <View className="flex flex-row items-center gap-2 justify-center">
                    <Image
                      source={icons.google}
                      className="w-5 h-5"
                      resizeMode="contain"
                      />
                      <Text>Continue with Google</Text>
                  </View>
                </TouchableOpacity>
    </View>
      </SafeAreaView>
  );
}
