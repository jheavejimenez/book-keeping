import React from "react";
import { useState } from "react";
import ArchiveFile from "../Button/ArchiveFile";
import EditFile from "../Button/EditFile";
import { doc, deleteDoc, setDoc,query, collection, where, getDocs, serverTimestamp, } from "firebase/firestore";
import { db } from "../../utils/Firebase";
import { useAuth } from "../../hooks/useAuth";
import { UserGroupIcon } from "@heroicons/react/24/outline";


function ClientOutgoingrow({Column1, Column2, Column3, Column4}) {
    const {user} = useAuth()
    const [error, setError] = useState('');
    const [data, setData] = useState([]);

    const getCompany = async () => {
        const q = query(collection(db, "users"), where("email", "==", user.email));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            setError("No matching documents.");
        }
        console.log(querySnapshot.docs[0].data().company)
        return querySnapshot.docs[0].data().company
        
    }

    const auditTrailCollectionRef = collection(db, "audittrail");

    const handleDelete = async (email) => {
        const company = await getCompany(email)
        await setDoc(doc(db, "archive", Column1), {
            docid: Column1,
            recipient: Column2,
            file: Column3,
            datesent: Column4,
            company: company,
            datearchive: serverTimestamp(),
            });

            setDoc(doc(auditTrailCollectionRef, Column1), {
                time : serverTimestamp(),
                user : user.email,
                activity : "Archived file:  " + Column3,
            });

        alert("File Archived")
        await deleteDoc(doc(db, "outgoing", Column1));

        
    }
   
    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}>{Column1}</td>
            <td className={"px-4 py-3 text-sm"}>{Column2}</td>
            <td className={"px-4 py-3 text-sm"}>{Column3}</td>
            <td className={"px-4 py-3 text-sm"}>{Column4}</td>
            <td className={"flex justify-center items-center w-14 h-14 ml-3"}>
                <button>
                    <EditFile />
                </button>
                <button onClick={handleDelete} className="pl-2">
                    <ArchiveFile />
                </button>
            </td>   
        </tr>
    )
}

export default ClientOutgoingrow;
