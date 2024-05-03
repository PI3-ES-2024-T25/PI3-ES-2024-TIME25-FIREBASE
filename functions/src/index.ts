import { createUnit } from "./helpers/rentalUnits";
import {
  mzcTest,
  testC,
  unit1Puccampinas,
  unit2Puccampinas,
  unitMackenzie,
  unitOkaVistaQuiosqueRj,
} from "./data/seed";
import { createUser } from "./helpers/user/index";
import { app, functionsV1 } from "./firebase";
import { DocumentSnapshot } from "firebase-admin/firestore";
import { EventContext, logger } from "firebase-functions/v1";


// Dados mockados

// Unidades de locação
export const createUnitPucCampinasH15 = createUnit(unit1Puccampinas);
export const createUnitPucCampinasOdontologia = createUnit(unit2Puccampinas);
export const createUnitOkaVista = createUnit(unitOkaVistaQuiosqueRj);
export const createUnitMackenzie = createUnit(unitMackenzie);
export const testCHome = createUnit(testC);
export const mzcHomeTest = createUnit(mzcTest);
// Usuário
export const createUserFunction = createUser();
// trigger

exports.onRentCreate = functionsV1.firestore
  .document("rents/{rentId}")
  .onCreate(async (snap: DocumentSnapshot, context: EventContext) => {
    const rentData = snap.data();
    const userId = rentData?.uid;
    logger.log(
      `Document created in 'rent' with ID: 
      ${context.params.rentId}, User ID: ${userId}`
    );

    const userRef = app.firestore().doc(`users/${userId}`);
    const lastRent = {
      rentId: context.params.rentId,
      rentData,
      verified: false,
    };

    return userRef.set({ lastRent }, { merge: true })
      .then(() => logger.log(
        `User document with ID: ${userId} updated successfully`
      ))
      .catch((error) => logger.log(
        `Failed to update user document with ID: ${userId}. Error: ${error}`
      ));
  });
