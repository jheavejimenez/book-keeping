import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Alert({alert, setAlert}) {
    const notify = () => toast.error(alert);

    

    return (
        <div className="mt-4 mx-4">
        <div className={" bg-red-500 text-blac k font-bold rounded-t px-4 py-2 "}>
            {setAlert}
        </div>
        <div className={"border border-t-2 border-red-500 rounded-b bg-red-100 px-4 py-3 text-red-700"}>
            <p className={"text-center text-1xl font-bold"}>{alert}</p>
        </div>
    </div>
    );
}

export default Alert;