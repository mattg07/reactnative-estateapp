import { SplashScreen, Stack } from "expo-router";
import "./globals.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import { AuthProvider } from "@/lib/userContext";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Semibold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;
  return (
    <AuthProvider>
      <SafeAreaView
        className="bg-white"
        style={{ flex: 1, backgroundColor: "#121212" }}
      >
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { padding: 0, margin: 0, backgroundColor: "#121212" }, // Reset padding/margin
          }}
        >
          <Stack.Screen
            name="(root)/(tabs)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </SafeAreaView>
    </AuthProvider>
  );
}
