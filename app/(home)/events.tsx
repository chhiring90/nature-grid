import React from "react";
import {
  YStack,
  H4,
  H2,
  Paragraph,
  Header,
  Separator,
  XStack,
  YGroup,
  Card,
  Button,
  ListItem,
  XGroup,
  H5,
  ScrollView,
  Input,
  H6,
} from "tamagui";
import {
  Star,
  ChevronRight,
  Moon,
  Coffee,
  Shirt,
  Cake,
  CakeSlice,
  Beer,
  ChevronDown,
} from "@tamagui/lucide-icons";
import { ReedemAlert } from "@/components/ReedemAlert";
import { Image } from "tamagui";

const discountItems = [
  {
    title: "Kingside Attack Tournament",
    points: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    icon: "https://picsum.photos/1500/500",
    time: "September 15, 2024, 10:00 AM",
  },
  {
    title: "Grandmaster Blitz Challenge",
    points: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    icon: "https://picsum.photos/1200/500",
    time: "October 3, 2024, 2:00 PM",
  },
  {
    title: "Opening Theory Showcase",
    points: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    icon: "https://picsum.photos/1100/500",
    time: "November 10, 2024, 11:00 AM",
  },
  {
    title: "Endgame Strategy Symposium",
    points: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    icon: "https://picsum.photos/1150/500",
    time: "December 5, 2024, 1:00 PM",
  },
  {
    title: "Rapid Chess Masters Duel",
    points: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    icon: "https://picsum.photos/1149/500",
    time: "January 20, 2025, 9:00 AM",
  },
  {
    title: "International Chess Festival",
    points: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    icon: "https://picsum.photos/1148/500",
    time: "February 12, 2025, 3:00 PM",
  },
  {
    title: "Fischer Random Championship",
    points: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    icon: "https://picsum.photos/1148/501",
    time: "March 8, 2025, 4:00 PM",
  },
];
export default function RedeemScreen() {
  const [isAlertVisible, setAlertVisible] = React.useState(false);

  return (
    <>
      <ScrollView
        backgroundColor="$green6"
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
      >
        <YStack padding="$4">
          {discountItems.map((item, index) => (
            <Card
              style={{
                shadowColor: "hsl(141, 43.7%, 86.0%)",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.1,
                shadowRadius: 3.84,
                elevation: 5, // For Android
              }}
              key={index}
              size="$4"
              marginBottom="$4"
              backgroundColor="$green1"
            >
              <Image
                source={{
                  uri: item.icon,
                  height: 200,
                }}
              />
              <Card.Header padded>
                <XStack>
                  <YStack
                    paddingLeft="$4"
                    paddingRight="$1.5"
                    style={{
                      flexGrow: 1,
                    }}
                  >
                    <H6 color="$green8">{item.time}</H6>
                    <H5
                      style={{
                        fontFamily: "InterBold",
                        fontSize: 15,
                      }}
                      color="$green7"
                    >
                      {item.title}
                    </H5>
                    <Paragraph
                      color="$green7"
                      fontWeight="bold"
                      letterSpacing="1px"
                    >
                      {item.points}
                    </Paragraph>
                  </YStack>
                </XStack>
              </Card.Header>
            </Card>
          ))}
        </YStack>
      </ScrollView>
    </>
  );
}
