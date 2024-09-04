import { config } from "@tamagui/config/v3";
import { createTamagui } from "tamagui";

// Ensure you import themes and tokens correctly
import { themes, tokens } from "@tamagui/config/v3";

const appConfig = createTamagui({
  themes,
  tokens,
  ...config, // Spread the config to include other necessary properties
});

export type AppConfig = typeof appConfig;

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
