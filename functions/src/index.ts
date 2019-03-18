import axios from "axios";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions
  .region("asia-northeast1")
  .https.onRequest(async (req, res) => {
    try {
      const docs = await admin
        .firestore()
        .collection("tokens")
        .get();
      docs.forEach(async doc => {
        await axios.post("https://exp.host/--/api/v2/push/send", {
          to: doc.data().token,
          body: "Hello from https call!!",
          data: {
            message: "I'm a local notification!"
          }
        });
        console.log("Notification send!");
      });
      res.send("Notification send");
    } catch (error) {
      throw error;
    }
  });
