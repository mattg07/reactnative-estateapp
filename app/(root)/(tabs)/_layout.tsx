import { SplashScreen, Tabs, Stack } from "expo-router";
import { useState } from "react";

export default function TabsLayout() {
  // Simulate authentication status (set to false for testing)
  const isAuthenticated = true;

  // Conditional rendering of tabs based on authentication status
  if (!isAuthenticated) {
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

  // Render Tabs if authenticated
  return (
    <Tabs
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
