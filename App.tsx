import { Notifications, Permissions } from "expo";
import React from "react";
import { View } from "react-native";
import AppIndex from "./components/TabBar";
import Firebase from "./helpers/firebase";

Firebase.init();

const registerForPushNotifications = async () => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== "granted") {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== "granted") {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();

  Notifications.addListener(() => console.log("New notif"));

  // POST the token to your backend server from where you can retrieve it to send push notifications.
  try {
    await Firebase.firestore
      .collection("tokens")
      .doc(token.slice(18, 40))
      .set({
        token
      });
    console.log("Token saved!");
  } catch (e) {
    throw e;
  }
};

registerForPushNotifications();

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppIndex />
    </View>
  );
};

export default App;
