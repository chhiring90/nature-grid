import { Tabs } from "expo-router";
import { Home, Puzzle, QrCode, Settings } from "@tamagui/lucide-icons";

export default function AuthLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0a7ea4",
        tabBarStyle: {
          height: 110,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          marginTop: -30,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
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
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "hsl(151, 40.2%, 54.1%)",
          },
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
