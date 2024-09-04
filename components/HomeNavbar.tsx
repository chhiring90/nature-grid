import { Avatar, XStack } from "tamagui";
import { Bell } from "@tamagui/lucide-icons";

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
      <Bell size="$2" marginLeft="auto" marginRight="$1" color="$orange1" />
    </XStack>
  );
}
