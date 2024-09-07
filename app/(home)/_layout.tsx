import { Tabs } from "expo-router";
import {
  Calendar,
  Home,
  Puzzle,
  QrCode,
  Settings,
  Ticket,
} from "@tamagui/lucide-icons";

export default function AuthLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "hsl(151, 40.2%, 54.1%)",
          tabBarStyle: {
            backgroundColor: "hsl(138, 62.5%, 96.9%)",
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
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "hsl(151, 40.2%, 54.1%)",
            },
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
            tabBarIcon: ({ color }) => <Ticket size={28} color={color} />,
          }}
        />

        <Tabs.Screen
          name="events"
          options={{
            title: "Events",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "hsl(151, 40.2%, 54.1%)",
            },
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => <Calendar size={28} color={color} />,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "hsl(151, 40.2%, 54.1%)",
            },
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => <Settings size={28} color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}
