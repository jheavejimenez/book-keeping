import {collection, query, orderBy, limit, startAfter, getDocs} from "firebase/firestore";
import { db } from "./Firebase";


// it should be export const getAllRequestDocumments
const getAllRequestDocumments = async (path, item) => {
    
    
    const q = query(collection(db, `${path}`), orderBy(`${`${item}`}`, "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => doc.data());
}


export { getAllRequestDocumments };