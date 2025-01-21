import { useUserInfo } from "@/lib/userContext";
import { Stack, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  const { session } = useUserInfo();
  if (!session) {
    return (
      <Stack>
        <Stack.Screen
          name="general"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    );
  }

  return (
    <Tabs
      initialRouteName="explore"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "white", 
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          headerTitle: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass-outline" color={color} size={size} />
          ),
        }}
      />
            <Tabs.Screen
        name="general"
        options={{
          headerTitle: "General",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
