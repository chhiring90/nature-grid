import { color, radius, size, space, zIndex } from "@tamagui/themes";
import { config } from "@tamagui/config/v3";
import { createTamagui, createTokens } from "tamagui";
import { themes, tokens } from "@tamagui/themes";

export const tamaguiConfig = createTamagui(config);

export default tamaguiConfig;
export type Conf = typeof tamaguiConfig;
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
