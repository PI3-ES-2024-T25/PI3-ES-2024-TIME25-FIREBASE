import { DocumentSnapshot } from "firebase-admin/firestore";
import { app, functionsV1 } from "../firebase";
import { EventContext } from "firebase-functions/v1";

exports.onRentCreate = functionsV1.firestore
  .document("rent/{rentId}")
  .onCreate(async (snap: DocumentSnapshot, context: EventContext) => {
    const rentData = snap.data();
    const userId = rentData?.uid;

    const userRef = app.firestore().doc(`users/${userId}`);
    const lastRent = {
      rentId: context.params.rentId,
      verified: false, // ou qualquer valor inicial que você queira
    };

    return userRef.update({ lastRent });
  });
