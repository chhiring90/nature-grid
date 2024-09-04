import { AlertDialog, Button, XStack, YStack } from "tamagui";

interface ReedemAlertProps {
  title: string;
  points: number;
}

export function ReedemAlert({ title, points }: ReedemAlertProps) {
  return (
    <AlertDialog native>
      <AlertDialog.Trigger asChild>
        <Button
          color="$green1"
          letterSpacing="0.5px"
          backgroundColor="$green7"
          unstyled
          style={{
            paddingLeft: 14,
            paddingRight: 14,
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 12,
          }}
        >
          Reedem
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <AlertDialog.Content
          bordered
          elevate
          key="content"
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <YStack space>
            <AlertDialog.Title>Accept</AlertDialog.Title>
            <AlertDialog.Description>
              You are about to redeem 30 points for a 5% discount on Espresso
            </AlertDialog.Description>
            <XStack gap="$3" justifyContent="flex-end">
              <AlertDialog.Cancel asChild>
                <Button>Cancel</Button>
              </AlertDialog.Cancel>

              <AlertDialog.Action asChild>
                <Button theme="active">Accept</Button>
              </AlertDialog.Action>
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
}
