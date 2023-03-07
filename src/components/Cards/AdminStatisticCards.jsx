import React from "react";
import { ArchiveBoxArrowDownIcon, BuildingOffice2Icon, DocumentTextIcon, UserGroupIcon } from "@heroicons/react/24/outline";
// import { useAuth } from "../../hooks/useAuth";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../utils/Firebase";
import { useState, useEffect} from "react";
import { Result } from "postcss";
import { storage } from "../../utils/Firebase";
import firebase from "firebase/app";
import { listAll,ref } from "firebase/storage";



function AdminStatisticCards() {
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);
    const [company, setCompany] = useState([]);
    const [file , setFile] = useState([]);

    const getAllArchive = async () => {
        const snapshot = await getDocs(collection(db, "archive"));
        setData(snapshot.docs.map((doc) => doc.data()));
    }
    
    const getAllUsers = async () => {
        const snapshot = await getDocs(collection(db, "users"));
        setUsers(snapshot.docs.map((doc) => doc.data()));
    }

    const getCompany = async () => {
        const snapshot = await getDocs(collection(db, "users"));
        setCompany(snapshot.docs.map((doc) => doc.data().company));
    }
    

    const count = company.reduce((acc, val) => {
      if (!acc.duplicates.has(val)) {
        acc.duplicates.add(val);
        acc.count++;
      }
      return acc;
    }, {count: 0, duplicates: new Set()}).count;

    const firstFile = ref(storage, 'files');

    listAll(firstFile)
        .then((res) => {
            // console.log(res.items.length);
            setFile(res.items.length);
        })
        .catch((error) => {
            console.log(error);
        });


    


    useEffect(() => {
        getAllArchive();
        getAllUsers();
        getCompany();
        const interval = setInterval(() => {
            getAllArchive();
            getAllUsers();
            getCompany();
        }, 5000)
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, []);

    return (
        <div className={" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4 "}>
            <div
                className={" bg-blue-400 text-black shadow-lg rounded-md " +
                    " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                    " text-white font-medium group h-28 "}
            >
                <div
                   className={" flex justify-center items-center w-16 h-16 bg-white " +
                        " rounded-full transition-all duration-300 transform group-hover:rotate-12 "}
                >
                    <DocumentTextIcon
                        className={" w-12 h-12 transform transition-transform duration-500 ease-in-out "} />

                </div>
                <div className={"text-right"}>
                    <p className={"text-3xl"}>{file}</p>
                    <p>Total Files Collected</p>
                </div>
            </div>
            <div
                className={" bg-blue-400 text-black shadow-lg rounded-md " +
                    " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                    " text-white font-medium group "}
            >
                <div
                    className={" flex justify-center items-center w-16 h-16 bg-white " + 
                    " rounded-full transition-all duration-300 transform group-hover:rotate-12 "}
                >
                    <BuildingOffice2Icon className={" w-12 h-12 transform transition-transform" + 
                    " duration-500 ease-in-out "} />

                </div>
                <div className={"text-right"}>
                    <p className={"text-3xl"}>{count}</p>
                    <p>Business Firms Held</p>
                </div>
            </div>
            <div
                className={" bg-blue-400 text-black shadow-lg rounded-md " +
                    " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                    " text-white font-medium group h-28 "}
            >
                <div
                    className={" flex justify-center items-center w-16 h-16 bg-white " + 
                    " rounded-full transition-all duration-300 transform group-hover:rotate-12 "}>

                    <ArchiveBoxArrowDownIcon className={" w-12 h-12 transform transition-transform " + 
                    " duration-500 ease-in-out "} />

                </div>
                <div className={"text-right"}>
                    <p className={"text-3xl"}>{data.length}</p>
                    <p>Archived Files</p>
                </div>
            </div>
            <div
                className={" bg-blue-400 text-black shadow-lg rounded-md " +
                    " flex items-center justify-between p-3 border-b-4 border-neutral-900 " +
                    " text-white font-medium group"}
            >
                <div
                    className={" flex justify-center items-center w-16 h-16 bg-white rounded-full " +
                    " transition-all duration-300 transform group-hover:rotate-12 "}>
                    <UserGroupIcon className={"w-12 h-12 transform transition-transform " + 
                    " duration-500 ease-in-out "} />
                </div>
                <div className={"text-right"}>
                    <p className={"text-3xl"}>{users.length}</p>
                    <p>Total Users</p>
                </div>
            </div>
        </div>
    )
}


export default AdminStatisticCards;
