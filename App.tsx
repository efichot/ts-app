import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";

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

const appNavigator = createMaterialTopTabNavigator(
  {
    Album,
    Library
  },
  {
    tabBarOptions: {
      style: {
        height: "10%",
        paddingTop: "6%"
      }
    }
  }
);

const AppIndex = createAppContainer(appNavigator);

export default () => {
  return (
    <View style={{ flex: 1 }}>
      <AppIndex />
    </View>
  );
};
