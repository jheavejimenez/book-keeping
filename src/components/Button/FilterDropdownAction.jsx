/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import FilterDropdownOptions from '../Options/FilterDropdownOptions'

function FilterDropdownAction({request, sent, archived, all}) {
    return (
        <Menu as="div" className="relative inline-block text-left">

            <div>
                <Menu.Button className={" inline-flex w-full justify-center w-16 " + 
                    " rounded-md border border-gray-300 " +
                    " bg-white px-2 py-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 " + 
                    " focus:outline-none " +
                    " focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 "}>
                    All
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
                    className={" absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg " +
                        " ring-1 ring-black ring-opacity-5 focus:outline-none "}>
                    <div className="py-1">
                        
                        <button onClick={() => all()} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +

                            " text-gray-700 hover:bg-gray-100 hover:text-gray-900 " +
                            " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                                All</button>
                        
                        <button onClick={() => request()} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +

                            " text-gray-700 hover:bg-gray-100 hover:text-gray-900 " +
                            " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                                Request</button>
                        <button onClick={() => sent()} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +

                        " text-gray-700 hover:bg-gray-100 hover:text-gray-900 " +
                        " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                            Sent</button>
                        <button onClick={() => archived()} className={" flex items-center justify-between w-full px-4 py-2 text-sm " +

                    " text-gray-700 hover:bg-gray-100 hover:text-gray-900 " +
                    " focus:outline-none focus:bg-gray-100 focus:text-gray-900 "}>
                        Archived</button>
                            

                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default FilterDropdownAction;
