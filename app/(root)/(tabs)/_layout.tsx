import { SplashScreen, Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#121212',  
        },
        tabBarActiveTintColor: 'white',  
        tabBarInactiveTintColor: 'gray', 
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
        }}
      />
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
