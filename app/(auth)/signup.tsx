import { useState } from "react";
import { Link } from "expo-router";
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

function useSignUp() {
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

export default function SignUpScreen() {
  const { signIn, status } = useSignUp();
  return (
    <YStack>
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
                <Input.Label htmlFor="first-name">First Name</Input.Label>
                <Input.Box>
                  <Input.Area id="first-name" placeholder="First Name" />
                </Input.Box>
              </Input>
            </View>
            <View flexDirection="column" gap="$1">
              <Input size="$4">
                <Input.Label htmlFor="last-name">Last Name</Input.Label>
                <Input.Box>
                  <Input.Area id="last-name" placeholder="Last Name" />
                </Input.Box>
              </Input>
            </View>
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
            <View flexDirection="column" gap="$1">
              <Input size="$4">
                <View
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Input.Label htmlFor="confirm-password">
                    Confirm Password
                  </Input.Label>
                </View>
                <Input.Box>
                  <Input.Area
                    textContentType="password"
                    secureTextEntry
                    id="confirm-password"
                    placeholder="Confirm password"
                  />
                </Input.Box>
              </Input>
            </View>
          </View>
          <Theme inverse>
            <Button
              disabled={status === "loading"}
              onPress={signIn}
              width="100%"
              iconAfter={
                <AnimatePresence>
                  {status === "loading" && (
                    <Spinner
                      color="$color"
                      key="loading-spinner"
                      opacity={1}
                      scale={1}
                      animation="quick"
                      position="absolute"
                      left="65%"
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
            >
              <Button.Text>Sign Up</Button.Text>
            </Button>
          </Theme>
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
          <SignInLink />
        </View>
      </FormCard>
    </YStack>
  );
}

const SignInLink = () => {
  return (
    <Paragraph textDecorationStyle="unset" ta="center">
      Already have an account?{" "}
      <SizableText
        hoverStyle={{
          color: "$colorHover",
        }}
        textDecorationLine="underline"
      >
        <Link href="/">Sign In</Link>
      </SizableText>
    </Paragraph>
  );
};
