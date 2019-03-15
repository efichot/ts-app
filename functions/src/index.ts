import axios from "axios";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.https.onRequest(async (req, res) => {
  try {
    const docs = await admin
      .firestore()
      .collection("tokens")
      .get();
    docs.forEach(async doc => {
      await axios.post("https://exp.host/--/api/v2/push/send", {
        to: doc.data().token,
        body: "Hello from https call!!"
      });
      console.log("Notification send!");
    });
  } catch (error) {
    throw error;
  }
});
