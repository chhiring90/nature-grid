import HomeNavbar from "@/components/HomeNavbar";
import {
  H4,
  H2,
  Paragraph,
  YStack,
  Card,
  XStack,
  Image,
  Button,
  H1,
  Text,
} from "tamagui";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function HomeScreen() {
  const width = Dimensions.get("window").width;

  return (
    <YStack padding="$10 0 0 0">
      <HomeNavbar />
      <YStack background="coral">
        <H1
          textTransform="uppercase"
          fontWeight="900"
          fontSize="$16"
          lineHeight="$16"
          fontFamily="$OpenSansExtraBold"
        >
          011 <Text fontSize="$4">SCORE</Text>
        </H1>
        <H2 textTransform="uppercase" fontWeight="900">
          100
        </H2>
      </YStack>
      <H2 textTransform="uppercase" fontWeight="900" padding="$3">
        Leader Board
      </H2>
      <View style={{ flex: 1 }}>
        <Carousel
          width={width}
          height={width / 2}
          data={[...new Array(5).keys()]}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ index }) => (
            <XStack flex={1} justifyContent="space-around">
              <Card size="$6" bordered>
                <Card.Header padded>
                  <H2>Sony A{index + 1}IV</H2>
                  <Paragraph theme="alt2">Now available</Paragraph>
                </Card.Header>
                <Card.Footer padded>
                  <XStack flex={1} />
                  <Button borderRadius="$10">Purchase</Button>
                </Card.Footer>
              </Card>
              <Card size="$6" bordered>
                <Card.Header padded>
                  <H2>Sony A{index + 1}IV</H2>
                  <Paragraph theme="alt2">Now available</Paragraph>
                </Card.Header>
                <Card.Footer padded>
                  <XStack flex={1} />
                  <Button borderRadius="$10">Purchase</Button>
                </Card.Footer>
              </Card>
            </XStack>
          )}
        />
      </View>
    </YStack>
  );
}
