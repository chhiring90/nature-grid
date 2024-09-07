import { Avatar, XStack } from "tamagui";
import { Bell, Settings } from "@tamagui/lucide-icons";
import { Button } from "tamagui";
import { Link } from "expo-router";

export default function HomeNavbar() {
  return (
    <XStack
      alignItems="center"
      backgroundColor="$blue8"
      gap="$6"
      paddingTop="$11"
      paddingLeft="$3.5"
      paddingRight="$3.5"
    >
      <Avatar circular size="$7">
        <Avatar.Image
          accessibilityLabel="Nature Grid Avatar"
          src={require("../assets/images/avatar.png")}
        />
        <Avatar.Fallback delayMs={600} backgroundColor="$orange10" />
      </Avatar>
      <XStack marginLeft="auto">
        <Link href="/(home)/settings">
          <Bell size="$2" marginRight="$3.5" color="$orange1" />
        </Link>
        <Link href="/(home)/settings">
          <Settings size="$2" color="$orange1" />
        </Link>
      </XStack>
    </XStack>
  );
}
