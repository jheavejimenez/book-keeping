/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import FilterDropdownOptions from '../Options/FilterDropdownOptions'
import { useState } from 'react'

function FilterTableLimit({limit5, limit10, limit15, limit20}) {
    const [filter, setFilter] = useState("5");

    const handleLimit5Click = () => {
        setFilter("5");
        limit5();
    };

    const handleLimit10Click = () => {
        setFilter("10");
        limit10();
    };

    const handleLimit15Click = () => {
        setFilter("15");
        limit15();
    };

    const handleLimit20Click = () => {
        setFilter("20");
        limit20();
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className={" inline-flex justify-center w-20 " + 
                    " rounded-md border border-gray-300 bg-white px-1 py-1" +
                    " text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 " + 
                    " focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 "}>
                    <FilterDropdownOptions Option={filter === "limit5" ? "Limit5" : "" + filter} /> 
                    <ChevronDownIcon className="- h-5 w-10 mt-2" aria-hidden="true" />
                    
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
                        <button onClick={handleLimit5Click} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +
                            (filter === "limit5" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 ") +
                            " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                                5
                        </button>
                        <button onClick={handleLimit10Click} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +
                            (filter === "limit10" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 ") +
                            " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                                10
                        </button>
                        <button onClick={handleLimit15Click} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +
                            (filter === "limit15" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 ") +
                            " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                                15
                        </button>
                        <button onClick={handleLimit20Click} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +
                            (filter === "limit20" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 ") +
                            " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                                20
                        </button>
                    </div>

                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default FilterTableLimit;
