/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import FilterDropdownOptions from '../Options/FilterDropdownOptions'
import { useState } from 'react'

function FilterDropdown({excel, pdf, all}) {
    const [filter, setFilter] = useState("all");

    const handleAllClick = () => {
        setFilter("All");
        all();
    };

    const handleExcelClick = () => {
        setFilter("Excel");
        excel();
    };

    const handlePdfClick = () => {
        setFilter("PDF");
        pdf();
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className={" inline-flex w-20 justify-center rounded-md border border-gray-300 " + 
                    " bg-white px-1 py-1 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-100 " + 
                    " focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 "}>
                    <FilterDropdownOptions Option={filter === "all" ? "All" : "" + filter} /> 
                    <ChevronDownIcon className="-m-1 h-10 w-12 pr-1 pt-1" aria-hidden="true" />
                    
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
                    className={" absolute right-0 z-10 mt-2 w-20 origin-top-right rounded-md bg-white shadow-lg " +
                        " ring-1 ring-black ring-opacity-5 focus:outline-none "}>
                    <div className="py-1">
                        <button onClick={handleAllClick} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +
                            (filter === "all" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 ") +
                            " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                                All
                        </button>
                        <button onClick={handleExcelClick} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +
                            (filter === "excel" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 ") +
                            " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                                .xlsx
                        </button>
                        <button onClick={handlePdfClick} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +
                            (filter === "pdf" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 ") +
                            " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                            .pdf
                        </button>
                    </div>

                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default FilterDropdown;
