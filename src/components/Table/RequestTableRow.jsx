import React from "react";
import { useEffect, useState } from "react";
import { sendEmailVerification, signInWithEmailAndPassword, getAuth, onAuthStateChanged  } from 'firebase/auth'
import { collection, doc, setDoc, getDocs, query, where } from "firebase/firestore"; 
import { db } from "../../utils/Firebase";

function RequestTableRow({ReqID, RequestedFrom, File, Purpose, DueDate, DateRequested}) {
    const [reqfrom , setReqfrom] = useState('')
    const [file , setFile] = useState('')
    const [dueDate , setDueDate] = useState('')
    const [reqby , setReqby] = useState('')
    const [purpose , setPurpose] = useState('')
    const [dateReq , setDateReq] = useState('')

    useEffect(() => {
        const q = query(collection(db, "request"), where("ReqID", "==", ReqID));
        getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setReqfrom(doc.data().name)
                console.log(doc.data().name)
            });
        });
        setFile(File)
        setPurpose(Purpose)
        setDueDate(DueDate)
        setDateReq(DateRequested)
        setReqby(RequestedFrom)
        console .log(ReqID)
    }, [RequestedFrom, File, Purpose, DueDate, DateRequested])
        
    

    return (
        <tr className={"hover:bg-gray-300 text-black"}>
            <td className={"px-4 py-3 text-sm"}>{ReqID}</td>
            <td className={"px-4 py-3 text-sm"}>{RequestedFrom}</td>
            <td className={"px-4 py-3 text-sm"}>{File}</td>
            <td className={"px-4 py-3 text-xs"}>{Purpose}</td>
            <td className={"px-4 py-3 text-xs"}>{DueDate}</td>
            <td className={"px-4 py-3 text-xs"}>{DateRequested}</td>    
        </tr>
    )
}

export default RequestTableRow;
