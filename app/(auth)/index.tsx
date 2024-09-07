import { blurhash } from "@/constants/BlurHash";
import { Link } from "expo-router";
import { Keyboard } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { ScrollView } from "tamagui";

import { useState, useEffect } from "react";
import {
  AnimatePresence,
  Button,
  H1,
  Paragraph,
  Separator,
  SizableText,
  Spinner,
  Theme,
  View,
  YStack,
} from "tamagui";
import { Input } from "@/components/InputParts";
import { FormCard } from "@/components/LayoutParts";
import LinearGradient from "react-native-linear-gradient";
import { Scroll } from "@tamagui/lucide-icons";

function useSignIn() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  return {
    status: status,
    signIn: () => {
      setStatus("loading");
      setTimeout(() => {
        setStatus("success");
      }, 2000);
    },
  };
}

export default function LoginScreen() {
  const { signIn, status } = useSignIn();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const imageHeight = useSharedValue(450);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
        console.log("keyboard visible");
        imageHeight.value = withSpring(150);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
        imageHeight.value = withSpring(400);
        console.log("keyboard hidden");
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <ScrollView decelerationRate="fast" showsVerticalScrollIndicator={false}>
      <YStack>
        {/* <Animated.Image
          source={{
            uri: "https://picsum.photos/seed/696/3000/2000",
            width: "100%",
            contentFit: "cover",
            placeholder: blurhash,
          }}
          style={{
            height: imageHeight,
          }}
        /> */}

        <Animated.View
          style={{
            height: imageHeight,
            backgroundColor: "hsl(151, 40.2%, 54.1%)",
          }}
        ></Animated.View>

        <FormCard>
          <View
            flexDirection="column"
            alignItems="stretch"
            minWidth="100%"
            maxWidth="100%"
            gap="$4"
            padding="$4"
            paddingVertical="$6"
            $gtSm={{
              paddingVertical: "$4",
              width: 400,
            }}
          >
            <H1
              alignSelf="center"
              size="$8"
              $xs={{
                size: "$7",
              }}
            >
              Sign in to your account
            </H1>
            <View flexDirection="column" gap="$3">
              <View flexDirection="column" gap="$1">
                <Input size="$4">
                  <Input.Label htmlFor="email">Email</Input.Label>
                  <Input.Box>
                    <Input.Area id="email" placeholder="email@example.com" />
                  </Input.Box>
                </Input>
              </View>
              <View flexDirection="column" gap="$1">
                <Input size="$4">
                  <View
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Input.Label htmlFor="password">Password</Input.Label>
                    <ForgotPasswordLink />
                  </View>
                  <Input.Box>
                    <Input.Area
                      textContentType="password"
                      secureTextEntry
                      id="password"
                      placeholder="Enter password"
                    />
                  </Input.Box>
                </Input>
              </View>
            </View>
            <Button
              disabled={status === "loading"}
              onPress={signIn}
              unstyled
              iconAfter={
                <AnimatePresence>
                  {status === "loading" && (
                    <Spinner
                      color="#fff"
                      key="loading-spinner"
                      opacity={1}
                      scale={1}
                      animation="quick"
                      position="absolute"
                      left="65%"
                      top="50%"
                      enterStyle={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                      exitStyle={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                    />
                  )}
                </AnimatePresence>
              }
              style={{
                backgroundColor: "hsl(151, 40.2%, 54.1%)",
                fontWeight: "bold",
                padding: "$3",
                width: "100%",
                display: "flex",
                position: "relative",
                borderRadius: 10,
                textAlign: "center",
                color: "#fff",
              }}
            >
              Sign In
            </Button>
            <View
              flexDirection="column"
              gap="$3"
              width="100%"
              alignItems="center"
            >
              <Theme>
                <View
                  flexDirection="column"
                  gap="$3"
                  width="100%"
                  alignSelf="center"
                  alignItems="center"
                >
                  <View
                    flexDirection="row"
                    width="100%"
                    alignItems="center"
                    gap="$4"
                  >
                    <Separator />
                    <Paragraph>Or</Paragraph>
                    <Separator />
                  </View>
                </View>
              </Theme>
            </View>
            <SignUpLink />
          </View>
        </FormCard>
      </YStack>
    </ScrollView>
  );
}

const SignUpLink = () => {
  return (
    <Paragraph textDecorationStyle="unset" textAlign="center">
      Don&apos;t have an account?{" "}
      <SizableText
        hoverStyle={{
          color: "$colorHover",
        }}
        textDecorationLine="underline"
      >
        <Link href="/(home)">Sign up</Link>
      </SizableText>
    </Paragraph>
  );
};

const ForgotPasswordLink = () => {
  return (
    <Link href="javascript: void(0)">
      <Paragraph
        color="$gray11"
        hoverStyle={{
          color: "$gray12",
        }}
        size="$1"
        marginTop="$1"
      >
        Forgot your password?
      </Paragraph>
    </Link>
  );
};
