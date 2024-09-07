import { View, YStack, Card, Avatar, H2, Paragraph } from "tamagui";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";

let data = [
  {
    name: "Ankita Thapa",
    score: 250,
    rank: 1,
    avatar: require("@/assets/images/avatar.png"),
    background: "$orange6",
  },
  {
    name: "Bhagwat Ghimire ",
    score: 120,
    rank: 2,
    avatar: require("@/assets/images/avatar-01.png"),
    background: "$purple6",
  },
  {
    name: "Aayush Shrestha",
    score: 111,
    rank: 3,
    avatar: require("@/assets/images/avatar-04.png"),
    background: "$green6",
  },
  {
    name: "Rupak Timalsina",
    score: 100,
    rank: 4,
    avatar: require("@/assets/images/avatar-02.png"),
    background: "$blue6",
  },
];

export default function LeaderBoardCarousel() {
  const width = Dimensions.get("window").width;
  const PAGE_WIDTH = width;
  const COUNT = 2;

  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH / COUNT,
    height: 400,
    style: {
      backgroundColor: "$blue7",
      width: PAGE_WIDTH,
    },
  } as const;

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        {...baseOptions}
        height={550}
        data={data}
        renderItem={({ item }) => (
          <View
            backgroundColor="$blue7"
            style={{ flex: 1, height: 500, overflow: "hidden" }}
            padding="$2"
          >
            <Card size="$6" backgroundColor="$orange1">
              <Card.Header paddingLeft="$2" paddingTop="$2">
                <Avatar circular size="$4.5" padding="$0">
                  <Avatar.Image
                    accessibilityLabel="Nature Grid Avatar"
                    src={item.avatar}
                  />
                  <Avatar.Fallback delayMs={600} backgroundColor="$orange10" />
                </Avatar>
              </Card.Header>
              <Card.Footer
                borderRadius="$5"
                padded
                backgroundColor={item.background}
              >
                <YStack paddingTop="$8">
                  <Paragraph
                    color="$blue1"
                    size="$9"
                    style={{
                      fontFamily: "PoppinsBlack",
                      letterSpacing: 2,
                    }}
                    theme="alt2"
                  >
                    {item.score}
                  </Paragraph>
                  <H2 color="$blue1">{item?.name}</H2>
                </YStack>
              </Card.Footer>
            </Card>
          </View>
        )}
      />
    </View>
  );
}
