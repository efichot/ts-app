import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Library = () => {
  return (
    <View style={styles.container}>
      <Text>Hello from Library page!</Text>
    </View>
  );
};

export default Library;
