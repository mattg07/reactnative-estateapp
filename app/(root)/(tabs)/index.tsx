import AuthForm from "@/components/AuthForm";
import { supabase } from "@/lib/supabase";
import { useUserInfo } from "@/lib/userContext";
import { SignUpWithPasswordCredentials } from "@supabase/supabase-js";
import { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const { session } = useUserInfo(); // Get session from context

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
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) Alert.alert(error.message);
    console.log("Logged in", data);
    setLoading(false);
  };

  // Check if a session exists
  if (session) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#121212",
        }}
      >
        <Button
          onPress={() => supabase.auth.signOut()}
          title="Log Out"
        ></Button>*
      </SafeAreaView>
    );
  }

  // Render welcome screen if no session
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

        <AuthForm
          loading={loading}
          onSignUp={handleSignUp}
          onLogin={handleLogin}
        />
      </View>
    </SafeAreaView>
  );
}
