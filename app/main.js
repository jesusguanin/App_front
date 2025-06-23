import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { CameraView, Camera } from "expo-camera";


export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const scanningRef = useRef(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarcodeScanned = ({ type, data }) => {
    if (scanningRef.current) return;
    scanningRef.current = true;
    setScanned(true);
    setShowCamera(false);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setTimeout(() => {
      scanningRef.current = false;
    }, 1000);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!showCamera ? (
        <Button
          title="Escanear"
          onPress={() => {
            setShowCamera(true);
            setScanned(false);
          }}
        />
      ) : (
        <View style={styles.cameraWrapper}>
          <CameraView
            onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
            barcodeScannerSettings={{ barcodeTypes: ["qr", "pdf417", "code128", "ean13", "ean8", "upc_a", "upc_e"] }}
            style={styles.camera}
          />
          {/* Cuadro de escaneo */}
          <View style={styles.overlay} pointerEvents="none">
            <View style={styles.scanBox} />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraWrapper: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  scanBox: {
    width: 250,
    height: 250,
    borderWidth: 3,
    borderColor: "#00FF00",
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
});