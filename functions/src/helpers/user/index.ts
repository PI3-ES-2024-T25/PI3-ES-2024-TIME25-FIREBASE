import { firestore, functionsV1 } from "../../firebase";
import { Entity } from "../../types/index";

const peopleCollection = firestore.collection("people");

export const createUser = () => {
  return functionsV1
    .region("southamerica-east1")
    .https
    .onRequest(async (req, res) => {
      try {
        const data: Entity = req.body;
        const docRef = await peopleCollection.add(data);
        res.status(200).json({ id: docRef.id });
      } catch (error) {
        res.status(500).send(`Error creating document: ${error}`);
      }
    });
};
