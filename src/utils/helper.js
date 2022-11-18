import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase";

// it should be export const getAllRequestDocumments
const getAllRequestDocumments = async (path) => {
    const snapshot = await getDocs(collection(db, `${path}`));
    return snapshot.docs.map((doc) => doc.data());
}
