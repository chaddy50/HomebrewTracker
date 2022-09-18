import { Header } from "@rneui/themed";
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View } from 'react-native';
import BrewingProcess from "./src/BeerList/Beer/Detail Pages/BrewingProcess";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />
      <Header centerComponent={{ text: "Beer" }} />
      <View style={styles.viewContainer}>
        <BrewingProcess />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  viewContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10
  },
});
