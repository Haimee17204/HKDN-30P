import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import SplashScreen1 from "./src/screens/SplashScreen1";
import SplashScreen2 from "./src/screens/SplashScreen2";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SplashScreen2 />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
