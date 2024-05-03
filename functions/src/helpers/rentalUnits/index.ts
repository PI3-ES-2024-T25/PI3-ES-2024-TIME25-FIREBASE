
import { firestore, functionsV1 } from "../../firebase";
import { Unit } from "../../types";
import { lockersModel } from "../../data/seed";

const lockersCollection = firestore.collection("lockers");

const unitsCollection = firestore.collection("rental_units");

export const createUnit = (unit: Unit) => {
  return functionsV1
    .region("southamerica-east1")
    .https.
    onRequest(async (req, res) => {
      try {
        const lockersIds: string[] = [];
        for (const locker of lockersModel) {
          const lockerRef = await lockersCollection.add(locker);
          lockersIds.push(lockerRef.id);
        }
        await unitsCollection.add({
          ...unit,
          lockers: lockersIds,
          lockersAvailable: lockersIds,
        });
        res.status(200).send(`Document created successfully ${lockersIds}`);
      } catch (error) {
        res.status(500).send(`Error creating document: ${error}`);
      }
    });
};
