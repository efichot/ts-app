import React from "react";
import { View } from "react-native";
import AppIndex from "./components/TabBar";
import Firebase from "./helpers/firebase";

Firebase.init();

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppIndex />
    </View>
  );
};

export default App;
