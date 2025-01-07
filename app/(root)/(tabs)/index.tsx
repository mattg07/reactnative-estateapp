import AuthForm from "@/components/AuthForm";
import { supabase } from "@/lib/supabase";
import { SignUpWithPasswordCredentials } from "@supabase/supabase-js";
import { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function Index() {
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (credentials: SignUpWithPasswordCredentials) => {
    if (!("email" in credentials)) return;
    setLoading(true);
    const { email, password } = credentials;
    const { error, data } = await supabase.auth.signUp({ email, password });
    if (error) Alert.alert(error.message);
    console.log(data);
    setLoading(false);
  };

  const handleLogin = async (credentials: SignUpWithPasswordCredentials) => {
    if (!("email" in credentials)) return;
    setLoading(true);
    const { email, password } = credentials;
    const { error, data } = await supabase.auth.signInWithPassword({ email, password });
    if (error) Alert.alert(error.message);
    console.log( "ya entro", data);
    setLoading(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        className="bg-background-100 pt-10"
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Image
          className="mt-10 mb-10 rounded-md"
          source={require("../../../assets/images/cactus.png")}
          style={{ width: 180, height: 180 }}
        />

        <Text className="font-bold font-rubik text-3xl text-white">
          Welcome to CHIRP!
        </Text>
        <Text className="font-semibold font-rubik text-2xl text-violet">
          Where beautiful things happen!
        </Text>
        {/* <TouchableOpacity className=" bg-white  shadow-md mt-10 py-4  shadow-zinc-300 rounded-full w-4/5">
                  <View className="flex flex-row items-center gap-2 justify-center">
                    <Image
                      source={icons.google}
                      className="w-5 h-5"
                      resizeMode="contain"
                      />
                      <Text>Continue with Google</Text>
                  </View>
                </TouchableOpacity> */}

        <AuthForm
          loading={loading}
          onSignUp={handleSignUp}
          onLogin={handleLogin}
        />
      </View>
    </SafeAreaView>
  );
}
