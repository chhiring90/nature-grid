import { Tabs } from "expo-router";
import { Home, Puzzle, QrCode, Settings } from "@tamagui/lucide-icons";

export default function AuthLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0a7ea4",
        tabBarStyle: {
          height: 110,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Home size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="scanner"
        options={{
          title: "Scanner",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <QrCode size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="redeem"
        options={{
          title: "Redeem",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Puzzle size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Settings size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
