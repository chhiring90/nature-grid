import { Avatar, XStack } from "tamagui";

export default function HomeNavbar() {
  return (
    <XStack
      alignItems="center"
      gap="$6"
      marginTop="$6"
      paddingTop="$7"
      paddingLeft="$3"
      paddingRight="$3"
    >
      <Avatar circular size="$7">
        <Avatar.Image
          accessibilityLabel="Nature Grid Avatar"
          src="/assets/images/avatar.png"
        />
        <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
      </Avatar>
    </XStack>
  );
}
