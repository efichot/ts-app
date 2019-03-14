import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Album = () => {
  return (
    <View style={styles.container}>
      <Text>Hello from Album page!</Text>
    </View>
  );
};

const Library = () => {
  return (
    <View style={styles.container}>
      <Text>Hello from Library page!</Text>
    </View>
  );
};

export default createMaterialBottomTabNavigator(
  {
    Album: { screen: Album },
    Library: { screen: Library }
  },
  {
    // initialRouteName: "Album",
    // activeColor: "#f0edf6",
    // inactiveColor: "#3e2465",
    // barStyle: { backgroundColor: "#694fad" }
  }
);
