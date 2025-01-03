import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";
const SignIn = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome To EState
          </Text>
          <Text className="text-3xl font-rubik-bold">
            Lets Get You Closer to{" "}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <TouchableOpacity className=" bg-white  shadow-md mt-10 py-4  shadow-zinc-300 rounded-full w-full">
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
                />
                <Text>Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
