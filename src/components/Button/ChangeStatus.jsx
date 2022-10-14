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
                className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-1/4 my-6 md:w-2/3 mx-auto max-w-md ">
                    {/*content*/}
                    <div className="flex justify-center border-0 rounded-lg shadow-lg absolute m-auto flex-col md:shrink w-auto bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center sm:items-start p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="font-bold">
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
                        <div className="flex space-y-6 px-6 lg:px-6 pb-4 sm:pb-6 xl:pb-6 items-center justify-center p-5">
                            <form className={"relative space-y-3.5 w-auto shrink"} >
                                    <label className={"font-bold mr-2"} > Progress Status </label>
                                    <ChooseStatusDropdown className={"relative space-y-3.5 md:w-auto shrink"}/>
                            </form>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-center p-2">
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
  




