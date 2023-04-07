/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import FilterDropdownOptions from '../Options/FilterDropdownOptions'
import { useState } from 'react'

function FilterDropdownAction({request, sent, edit, archived, unarchived, deleteFile, deleteUser, all}) {
    const [filter, setFilter] = useState("all");

    const handleAllClick = () => {
        setFilter("All");
        all();
    };

    const handlerequestClick = () => {
        setFilter("Request");
        request();
    };

    const handlesentClick = () => {
        setFilter("Sent");
        sent();
    };
    

    const handleeditClick = () => {
        setFilter("Edit");
        edit();
    };

    const handlearchivedClick = () => {
        setFilter("Archived");
        archived();
    };

    const handleunarchivedClick = () => {
        setFilter("Unarchived");
        unarchived();
    };

    const handledeleteFileClick = () => {
        setFilter("Delete File");
        deleteFile();
    };

    const handledeleteUserClick = () => {
        setFilter("Delete User");
        deleteUser();
    };


    return (
        <Menu as="div" className="relative inline-block text-left">
        <div>
            <Menu.Button className={" inline-flex w-56 justify-center w-full " + 
                " rounded-md border border-gray-300 " +
                " bg-white px-1 py-1 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 " + 
                " focus:outline-none " +
                " focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 "}>
                <FilterDropdownOptions Option={filter === "all" ? "All" : "" + filter} /> 
                <ChevronDownIcon className="-mr-1 ml-1 h-5 w-10 mt-2" aria-hidden="true" />
                
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
                className={" absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg " +
                    " ring-1 ring-black ring-opacity-5 focus:outline-none "}>
                <div className="py-1">
                    <button onClick={handleAllClick} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +
                        (filter === "all" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 ") +
                        " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                            All
                    </button>
                    <button onClick={handlerequestClick} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +
                        (filter === "Request" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 ") +
                        " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                            Request
                    </button>
                    <button onClick={handlesentClick} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +
                        (filter === "Sent" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 ") +
                        " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                        Sent
                    </button>
                    <button onClick={handleeditClick} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +
                        (filter === "Edit" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 ") +
                        " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                            Edit
                    </button>
                    <button onClick={handlearchivedClick} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +
                        (filter === "Archived" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 ") +
                        " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                            Archived
                    </button>
                    <button onClick={handleunarchivedClick} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +
                        (filter === "Unarchived" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 ") +
                        " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                        Unarchived
                    </button>
                    <button onClick={handledeleteFileClick} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +
                        (filter === "Delete File" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 ") +
                        " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                            Delete File
                    </button>
                    <button onClick={handledeleteUserClick} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +
                        (filter === "Delete User" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 ") +
                        " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                            Delete User
                    </button>
                   
                </div>

            </Menu.Items>
        </Transition>
    </Menu>
    )
}

export default FilterDropdownAction;
