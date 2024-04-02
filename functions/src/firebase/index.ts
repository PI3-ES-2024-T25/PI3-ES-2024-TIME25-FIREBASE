import * as functionsv1 from "firebase-functions/v1";
import * as functionsv2 from "firebase-functions/v2";
import * as admin from "firebase-admin";

export const app = admin.initializeApp();
export const firestore = app.firestore();
export const functionsV1 = functionsv1;
export const functionsV2 = functionsv2;

