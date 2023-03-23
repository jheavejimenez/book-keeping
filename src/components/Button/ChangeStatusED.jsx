import React, { useState } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import ChooseStatusOptions from '../Options/ChooseStatusOptions'


function ChangeStatusED({path, attr}) {
    const [showModal, setShowModal] = useState(false);

    

    return (
        <>
            <button
                type="button"
                onClick={() => setShowModal(true)}
            >
                <PencilSquareIcon className={" w-6 h-6 text-blue-500 group-hover:text-blue-700 "} />
            </button>
            {showModal && (
                <>
                    <div
                        className={" flex justify-center items-center flex overflow-x-hidden overflow-y-auto " + 
                        " fixed inset-0 z-50 outline-none focus:outline-none "}>
                        {/* <div className=" w-1/4 my-6 md:w-2/3 mx-auto max-w-md "> */}
                        
                            {/*content*/}
                            <div className={" flex justify-center border-0 rounded-lg " +
                                " shadow-lg absolute m-auto flex-col md:shrink w-auto " +
                                " bg-white outline-none focus:outline-none "}
                            >
                                {/*header*/}
                                <div
                                    className={" flex items-center sm:items-start p-5 " + 
                                    " border-b border-solid border-slate-200 rounded-t "}
                                >
                                    <h3 className="text-2xl font-bold text-black">
                                        Edit Status
                                    </h3>

                                    <button
                                        className={" p-1 ml-auto text-gray-400 hover:text-black opacity-50 " + 
                                        " float-right text-3xl leading-none font-semi-bold outline-none " + 
                                        " focus:outline-none "}
                                        onClick={() => setShowModal(false)}
                                    >
                                        <XMarkIcon className="w-7 h-7" />
                                    </button>
                                </div>
                                {/*body*/}
                                <div
                                    className={" flex space-y-6 px-6 lg:px-6 pb-4 sm:pb-6 xl:pb-6 " + 
                                    "items-center justify-center p-5 "}
                                    >
                                    <form className={" relative space-y-3.5 w-auto shrink "}>
                                        <label className={" font-bold mr-2 "}> 
                                            Account Status 
                                        </label>

                                        <Menu as="div" className=" inline-block text-left ">

                                            <div>
                                                <Menu.Button className={" relative inline-flex justify-center rounded-md border border-gray-300 " +
                                                    " bg-white px-2 py-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50" + 
                                                    " focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 h-auto " + 
                                                    " w-auto shrink "}
                                                >
                                                    Choose Status
                                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                                </Menu.Button>
                                            </div>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items
                                                    className={" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg " +
                                                        " ring-1 ring-black ring-opacity-5 focus:outline-none "}
                                                >
                                                    <div className="py-1">

                                                        {/* Option 1 */}
                                                        
                                                        <ChooseStatusOptions Option={"Enabled"} onClick={() => path(attr)} />

                                                        {/* Option 2 */}
                                                        <ChooseStatusOptions Option={"Disabled"} onClick={() => path(attr)}  />

                                                        <select className="hidden" name="status" id="status" onChange={path}>
                                                            <option value="Enabled">Enabled</option>
                                                            <option value="Disabled">Disabled</option>
                                                        </select>


                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                        
                                    </form>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-2">
                                    <button
                                        className={" text-blue-500 background-transparent font-bold " + 
                                        " uppercase px-6 py-2 text-sm " + 
                                        " outline-none focus:outline-none mr-1 mb-1 ease-linear " + 
                                        " transition-all duration-150 "}
                                        type=" button "
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>

                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    )
}

export default ChangeStatusED;
