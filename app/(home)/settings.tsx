import { ScrollView, Text, YStack } from "tamagui";
import {
  BellDot,
  Camera,
  ChevronRight,
  Mic,
  Mic2,
  Moon,
  ScanFace,
  Settings,
  Star,
} from "@tamagui/lucide-icons";
import { YGroup, ListItem, Separator, Label, Switch } from "tamagui";

export default function SettingsScreen() {
  return (
    <ScrollView
      backgroundColor="$green6"
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
    >
      <YGroup
        alignSelf="center"
        width="100%"
        size="$5"
        padding="$4"
        separator={<Separator />}
      >
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            title="Star"
            subTitle="Subtitle"
            icon={Star}
            iconAfter={ChevronRight}
          />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            title="Moon"
            subTitle="Subtitle"
            icon={Moon}
            iconAfter={ChevronRight}
          />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            title="Notification"
            subTitle="Banners, Sounds, Badges"
            icon={BellDot}
            iconAfter={ChevronRight}
          />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            icon={Mic}
            title="Microphone"
            subTitle="Subtitle"
            iconAfter={
              <Switch id="microphone" size="$4" native defaultChecked={false}>
                <Switch.Thumb animation="quicker" backgroundColor="$green1" />
              </Switch>
            }
          ></ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            icon={Camera}
            title="Camera"
            subTitle="Subtitle"
            iconAfter={
              <Switch id="camera" size="$4" native defaultChecked={true}>
                <Switch.Thumb animation="quicker" backgroundColor="$green1" />
              </Switch>
            }
          ></ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            icon={ScanFace}
            title="Face ID"
            subTitle="Subtitle"
            iconAfter={
              <Switch id="faceid" size="$4" native>
                <Switch.Thumb animation="quicker" backgroundColor="$green1" />
              </Switch>
            }
          ></ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            icon={Settings}
            title="Background App Refresh"
            subTitle="Subtitle"
            iconAfter={
              <Switch id="background-app-refresh" size="$4" native>
                <Switch.Thumb animation="quicker" backgroundColor="$green1" />
              </Switch>
            }
          ></ListItem>
        </YGroup.Item>
      </YGroup>
    </ScrollView>
  );
}
