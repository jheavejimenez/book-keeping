import React from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

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
                className=" flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-1/4 my-6 mx-auto max-w-md ">
                    {/*content*/}
                    <div className="flex items-center justify-center border-0 rounded-lg shadow-lg absolute m-auto flex-col md:shrink w-auto bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center text-center justify-center border-b border-solid border-slate-200">
                            <h3 className="font-bold p-5">
                                Hello People!
                               
                            </h3>
                            <p>
                                Let's get started! Fill-up the needed information and your good to go.
                            </p>    
                        </div>
                        {/*body*/}
                        <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 h-auto rounded-t">
                            <form className={"relative space-y-3.5 w-auto shrink"} >
                                    <label className={"text-black mr-2"} > Progress Status </label>
                                    {/* <ChooseStatusDropdown className={"relative space-y-3.5 md:w-auto shrink"}/> */}
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
  




