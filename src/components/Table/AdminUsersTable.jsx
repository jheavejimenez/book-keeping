import React, { useEffect, useState } from "react";
import UsersTableRow from "./UsersTableRow";
import TableHeading from "./TableHeading";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
import DeleteButton from "../../components/Button/DeleteButton";
import { collection, getDocs, orderBy,deleteDoc,doc,query,limit,startAfter,endBefore,limitToLast,setDoc,serverTimestamp, } from "firebase/firestore";
import { db } from "../../utils/Firebase";
import { useAuth } from "../../hooks/useAuth";
import dayjs from "dayjs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { nanoid } from "nanoid";
import NoDataFound from "../../pages/Error/NoDataFound";
import FilterTableLimit from "../Button/FilterTableLimit";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";



function AdminUsersTable() {
    const auth = useAuth();
    const docid = nanoid(5);
    const  notif = (text) => toast.success(text, {
        position: "top-center",
        autoClose: 3000, // auto close after 5 seconds
        onClose: () => {
            setTimeout(() => {
            window.location.reload(); // reload window after toast is closed
            }, 3000);
        }
    });
    const  notif1 = (text) => toast.warning(text, {
        position: "top-center",
        autoClose: 3000, // auto close after 5 seconds
        onClose: () => {
            setTimeout(() => {
            window.location.reload(); // reload window after toast is closed
            }, 3000);
        },

    });
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);
    const titleTable = [
        "Select",
        "Name",
        "Email",
        "Role",
        "Company",
        "Last Active",
        "Contract Expiry",
        
    ]

    // const getAllRequestDocumments = async () => {
    //     const snapshot = await getDocs(collection(db, "users"));
    //     setData(snapshot.docs.map((doc) => doc.data()));
        

       
    // }
    const now = new Date();
    let twoYearsFromNow = new Date(now.getTime() + 2 * 365 * 24 * 60 * 60 * 1000);
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);
    const auditTrailCollectionRef = collection(db, "audittrail",);
   
    const fetchData = async () => {
        const q = query(collection(db, "users"),orderBy("Llogin", "desc"), limit(5));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())

            
        });
        setList(items.filter((item) => item.email !== auth.user.email));
        if (items.filter((item) => item.email !== auth.user.email).length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = false;
        }
        
    };

    const showNextPage = ({item}) => {
        if (list.length === 0) {
            notif1("No more Users to show");
           
        }
        else {
            const fetchNextData = async () => {
                const q = query(collection(db, "users"),orderBy("Llogin", "desc"), limit(5), startAfter(item.Llogin));
                const querySnapshot = await getDocs(q)
                const items = []
                querySnapshot.forEach((doc) => {
                    items.push(doc.data())

                   
                });
                setList(items.filter((item) => item.email !== auth.user.email));
                setPage(page + 1);
                console.log(items[0]);
               
            };
            fetchNextData();
        }
    }

    const showPrevPage = ({item}) => {
        if (list.length === 0) {
            notif1("No more Users to show");
           
        }
        else {
        const fetchPrevData = async () => {
            const q = query(collection(db, "users"),orderBy("Llogin", "desc"), endBefore(item.Llogin), limitToLast(5));
            const querySnapshot = await getDocs(q)
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
                
            });
            setList(items.filter((item) => item.email !== auth.user.email));
                setPage(page - 1);
                console.log(items[0]);
        };
        fetchPrevData();
    }
}

    const deleteSelectRow = async() => {
        selectedRow.forEach((item) => {
            setDoc(doc(auditTrailCollectionRef,docid ), {
                time : serverTimestamp(),
                user : 'Admin',
                activity : "Deleted a user:  " + item.email,
                });
            deleteDoc(doc(db, "users", item.email));
            notif("User deleted successfully");
            
        });
        setSelectedRow([]);
    }
    const extendContract = async() => {
        selectedRow.forEach((item) => {
            setDoc(doc(auditTrailCollectionRef,docid ), {
                time : serverTimestamp(),
                user : 'Admin',
                activity : "Extended a user's contract:  " + item.email,
                });
            if (item.role === "bookkeeper") {
                notif1("User is a book keeper");
            }
            else {
                setDoc(doc(db, "users", item.email), {
                    contractexpired: new Date(twoYearsFromNow.getTime()  + 2 * 365 * 24 * 60 * 60 * 1000), 
                }, { merge: true });
                notif("Contract extended successfully");
             }
        });
        setSelectedRow([]);
    }
    
    const changeRole = async() => {
        selectedRow.forEach((item) => {
            if (item.role === "bookkeeper") {
                notif1("User is already a book keeper");
            }
            else {
                setDoc(doc(auditTrailCollectionRef,docid ), {
                    time : serverTimestamp(),
                    user : 'Admin',
                    activity : "Change Role to book keeper:  " + item.email,
                    });
                setDoc(doc(db, "users", item.email), {
                    role: "bookkeeper",
                    contractexpired: ""
                }, { merge: true });
                notif("Changed role successfully");
            }
        });
        setSelectedRow([]);
    }

    const fetchFiveData = async () => {
        const q = query(collection(db, "users"),orderBy("Llogin", "desc"), limit(5 ? 6 : 5));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())
        });
        setList(items.filter((item) => item.email !== auth.user.email));
        if (items.filter((item) => item.email !== auth.user.email).length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = true;
        }
        
    };
    const fetchTenData = async () => {
        const q = query(collection(db, "users"),orderBy("Llogin", "desc"), limit(10 ? 11 : 10));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())
        });
        setList(items.filter((item) => item.email !== auth.user.email));
        if (items.filter((item) => item.email !== auth.user.email).length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = true;
        }
        
    };
    const fetchFifteenData = async () => {
        const q = query(collection(db, "users"),orderBy("Llogin", "desc"), limit(15 ? 16 : 15));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())
        });
        setList(items.filter((item) => item.email !== auth.user.email));
        if (items.filter((item) => item.email !== auth.user.email).length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = true;
        }
        
    };
    const fetchTwentyData = async () => {
        const q = query(collection(db, "users"),orderBy("Llogin", "desc"), limit(20 ? 21 : 20));
        const querySnapshot = await getDocs(q)
        const items = []
        querySnapshot.forEach((doc) => {
            items.push(doc.data())
        });
        setList(items.filter((item) => item.email !== auth.user.email));
        if (items.filter((item) => item.email !== auth.user.email).length === 0) {
            document.getElementById("audit-table").hidden = true;
        }
        else {
            document.getElementById("audit-table").hidden = true;
        }
        
    };
    
    useEffect(() => {
        // getAllRequestDocumments();
        fetchData();
        // getUsersData();
        const interval = setInterval(async () => {
            // await getAllRequestDocumments();
            // await getUsersData();
        }, 5000)
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, []);
    // console.log(selectedRow);
    console.log(twoYearsFromNow);
    
    return (
        <>
            <ToastContainer />
            <div className={" flex flex-row px-7 pt-4 mt-4 text-sm font-medium tracking-wide gap-4"}> 
                <div className={"mt-4 w-48"}>
                    Show <FilterTableLimit 
                        limit5={fetchFiveData}
                        limit10={fetchTenData}
                        limit15={fetchFifteenData}
                        limit20={fetchTwentyData}
                    /> results
                </div>

                <button onClick={extendContract} className={" px-4 py-1 mt-4 text-white bg-blue-500" + 
                    " rounded-lg hover:bg-blue-600 inline-flex items-center"} >
                    Extend Contract 
                    <a data-tooltip-id="user-tooltip"><QuestionMarkCircleIcon className="w-5 h-5 ml-1" /></a>
                    <Tooltip id="user-tooltip">
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span>Return account access to clients</span>
                            <span>and adds another 2 years based on</span>
                            <span>the contract made with MindWorx</span>
                            <span>Bookkeeping Services.</span>
                        </div>
                    </Tooltip>
                </button>
                <a data-tooltip-id="user-tooltip" data-tooltip-html="Change role to<br />bookkeeper only">
                    <button onClick={changeRole} className={" px-4 py-1 mt-4 text-white bg-blue-400 rounded-lg hover:bg-blue-600"}>
                        Change Role
                    </button>
                </a>

                <div className="flex justify-end w-3/5">
                    <DeleteButton 
                        attr={deleteSelectRow}
                        warning={"After you delete an account, it's permanently deleted. Accounts can't be undeleted."} 
                        title={"Delete user"}
                    />
                </div>
            </div>
            <div className={"mt-10 mx-4"}>
                <div className={"w-full overflow-hidden rounded-lg shadow-xs"}>
                    <div className={"w-full overflow-hidden"}>
                        <table className={"w-full"}>
                            <thead>
                            <tr className={" text-sm font-bold font-inter tracking-wide text-left " + 
                            " text-gray-500 border-b border-gray-700 "}>
                                {titleTable.map((item, index) => (
                                    <TableHeading
                                        key={index}
                                        text={item}
                                    />

                                ))}
                            </tr>
                            </thead>
                            <tbody className={"font-inter divide-y"}>
                            {list.length === 0 ? ( 
                                <tr className={"text-sm font-medium text-center text-gray-900"}>
                                    <td colSpan={10} className={"pt-10"}>
                                        <NoDataFound 
                                            text={"No Data"}
                                        />
                                    </td>
                                </tr>
                            ) : null
                            }
                            {list.map?.((item) => (
                                <UsersTableRow
                                    Checkbox={
                                        <div> 
                                            <input type="checkbox" className={"form-checkbox h-5 w-5 text-gray-600"} checked={selectedRow.includes(item)}
                                             onChange={(event) => {
                                                if (event.target.checked) {
                                                    setSelectedRow([...selectedRow, item]);
                                                } else {
                                                    setSelectedRow(selectedRow.filter((row) => row !== item));
                                                }
                                             }}/>
                                        </div>

                                    }
                                    Column1={item.fname + " " + item.lname}
                                    Column2={item.email}
                                    Column3={item.role}
                                    Column4={item.company}
                                    Column5={dayjs.unix(item.Llogin?.seconds).format("hh:mm:ss A, DD/MM/YYYY")}
                                    Column6={dayjs.unix(item.contractexpired?.seconds).format("hh:mm:ss A, DD/MM/YYYY")}
                                    
                                />)

                            )}
                            </tbody>
                        </table>
                    </div>
                    <div id = "audit-table" >
                        <Pagination 
                            path={showPrevPage}
                            item={showNextPage}
                            list={list}
                            page={page}
                            
                        />
                    </div>  
                </div>
            </div>
        </>
    )
}

export default AdminUsersTable;
