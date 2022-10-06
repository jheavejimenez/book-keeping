import React from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import ChooseStatusDropdown from "./ChooseStatusDropdown";

function ChangeStatus() {
    const [showModal, setShowModal] = React.useState(false);
      
    return (
      <>
      <button   
          type="button"
          onClick={() => setShowModal(true)}
        >
      <PencilSquareIcon className={"w-6 h-6 text-blue-500 group-hover:text-blue-700"}/>
      </button>
       {showModal ? (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-1/4 my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semi-bold text-black">
                                Edit Status
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semi-bold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                               <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex justify-center">
                            <form>
                                    <label className={"text-lg mr-4"} > Progress Status </label>
                                    <ChooseStatusDropdown/>
                            </form>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </>
    )    
}
export default ChangeStatus;
  




