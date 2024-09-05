import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { TamaguiProvider, Theme } from "@tamagui/core";
import tamaguiConfig from "@/tamagui.config";
import { Provider } from "react-redux";
import { store } from "@/store";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    InterMedium: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    Inter: require("@tamagui/font-inter/otf/Inter-Regular.otf"),
    InterSemiBold: require("@tamagui/font-inter/otf/Inter-SemiBold.otf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    OpenSansExtraBold: require("../assets/fonts/OpenSans_Condensed-ExtraBold.ttf"),
    PoppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  //how to use it but not here, use it inside other component. Can't use it here

  // const count = useSelector((state: any) => state.counter.value);
  // const dispatch = useDispatch();
  // <Button title="Increase" onPress={() => dispatch(increaseCount())} />

  return (
    <Provider store={store}>
      <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
        <Theme>
          <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(home)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </Theme>
      </TamaguiProvider>
    </Provider>
  );
}
