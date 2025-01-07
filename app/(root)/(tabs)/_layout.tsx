import { useUserInfo } from "@/lib/userContext";
import { SplashScreen, Stack, Tabs } from "expo-router";

export default function TabsLayout() {
  // const { session } = useUserInfo();
const session = true;
  // If not authenticated, show the stack with "index" as the main route
  if (!session) {
    return (
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    );
  }

  // If authenticated, render the Tabs layout without "index"
  return (
    <Tabs
      initialRouteName="explore" // Set "explore" as the default route
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#121212",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          headerTitle: "Explore",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
        }}
      />
    </Tabs>
  );
}
