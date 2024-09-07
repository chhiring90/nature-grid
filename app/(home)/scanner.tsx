import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { store, increaseCount } from "@/store";
import { YStack } from "tamagui";
import { useToastController, useToastState, Toast } from "@tamagui/toast";

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");
  const { counter } = store.getState();

  const currentToast = useToastState();
  const toast = useToastController();

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    setText(data);
    store.dispatch(increaseCount());
    toast.show("Score added to the system.", {
      message: "Hey checkout the new score",
    });
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!currentToast || currentToast.isHandledNatively ? null : (
        <Toast
          key={currentToast.id}
          duration={currentToast.duration}
          enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
          exitStyle={{ opacity: 0, scale: 1, y: -20 }}
          y={40}
          width={350}
          opacity={1}
          scale={1}
          marginLeft={17}
          backgroundColor="$blue8"
          animation="200ms"
          viewportName={currentToast.viewportName}
        >
          <YStack>
            <Toast.Title textAlign="center" color="$blue1">
              {currentToast.title}
            </Toast.Title>
            {!!currentToast.message && (
              <Toast.Description textAlign="center" color="$blue1">
                {currentToast.message}
              </Toast.Description>
            )}
          </YStack>
        </Toast>
      )}
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && (
        <Button title={"Scan again?"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
});
