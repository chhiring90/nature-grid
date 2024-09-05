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
  Image,
  Button,
  ListItem,
  XGroup,
  H5,
  ScrollView,
  Input,
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

const discountItems = [
  {
    title: "5% OFF Espresso",
    points: 30,
    icon: <Coffee size="$3" color="$green7" />,
  },
  {
    title: "10% OFF T-shirt",
    points: 100,
    icon: <Shirt size="$3" color="$green7" />,
  },
  {
    title: "9% OFF Cheese Cake",
    points: 35,
    icon: <CakeSlice size="$3" color="$green7" />,
  },
  {
    title: "20% OFF Cappuccino",
    points: 50,
    icon: <Coffee size="$3" color="$green7" />,
  },
  {
    title: "5% OFF Sweatshirt",
    points: 150,
    icon: <Shirt size="$3" color="$green7" />,
  },
  {
    title: "50% OFF Cold Beer",
    points: 45,
    icon: <Beer size="$3" color="$green7" />,
  },
  {
    title: "12% OFF Latte",
    points: 40,
    icon: <Coffee size="$3" color="$green7" />,
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
              <Card.Header padded>
                <XStack
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                  <YStack
                    paddingLeft="$4"
                    paddingRight="$1.5"
                    style={{
                      flexGrow: 1,
                    }}
                  >
                    <H5
                      style={{
                        fontFamily: "InterBold",
                        fontSize: 14,
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
                      {item.points} Points
                    </Paragraph>
                  </YStack>
                  <ReedemAlert points={item.points} title={item.title} />
                </XStack>
              </Card.Header>
            </Card>
          ))}
        </YStack>
      </ScrollView>
    </>
  );
}
