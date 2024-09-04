import HomeNavbar from "@/components/HomeNavbar";
import {
  H2,
  Avatar,
  Paragraph,
  YStack,
  Card,
  XStack,
  Button,
  H1,
} from "tamagui";
import LeaderBoardCarousel from "@/components/LeaderBoardCarousel";
import { ScrollView } from "tamagui";

export default function HomeScreen() {
  return (
    <ScrollView
      backgroundColor="$blue8"
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
    >
      <YStack>
        <HomeNavbar />
        <YStack
          paddingLeft="$3"
          paddingTop="$5"
          paddingBottom="$4"
          backgroundColor="$blue8"
          paddingRight="$2"
        >
          <XStack>
            <H1
              color="$purple1"
              textTransform="uppercase"
              fontWeight="900"
              size="$16"
              letterSpacing="4px"
              style={{
                fontFamily: "PoppinsBlack",
              }}
            >
              011
            </H1>
            <Paragraph
              paddingTop="$1"
              color="$purple1"
              fontSize="$6"
              fontWeight="700"
              letterSpacing={0.5}
            >
              SCORE
            </Paragraph>
          </XStack>
          <XStack>
            <H2
              textTransform="uppercase"
              color="$purple1"
              size="$14"
              fontWeight="900"
              style={{
                fontFamily: "PoppinsBlack",
              }}
            >
              100
            </H2>
            <YStack>
              <Paragraph
                color="$purple1"
                paddingTop="$1"
                fontSize="$6"
                letterSpacing={0.5}
                fontWeight="700"
                textTransform="uppercase"
              >
                Coins
              </Paragraph>
              <Paragraph
                color="$purple1"
                paddingTop="$1"
                letterSpacing={0.5}
                fontSize="$6"
                fontWeight="700"
                textTransform="uppercase"
              >
                Spend
              </Paragraph>
            </YStack>
          </XStack>
        </YStack>
        <YStack backgroundColor="$blue7" paddingRight="$3">
          <H2
            textTransform="uppercase"
            color="$blue1"
            fontWeight="900"
            padding="$3"
            letterSpacing="$0.5"
          >
            Leader Board
          </H2>
          <LeaderBoardCarousel />
        </YStack>
      </YStack>
    </ScrollView>
  );
}
