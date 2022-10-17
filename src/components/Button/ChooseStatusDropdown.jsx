/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import ChooseStatusOptions from '../Options/ChooseStatusOptions'

function ChooseStatusDropdown() {
    return (
        <Menu as="div" className=" inline-block text-left ">

            <div>
                <Menu.Button className={"relative inline-flex justify-center rounded-md border border-gray-300 " +
                    "bg-white px-2 py-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none " +
                    "focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 h-auto w-auto shrink"}
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
                    className={"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg " +
                        "ring-1 ring-black ring-opacity-5 focus:outline-none"}
                >
                    <div className="py-1">

                        {/* Option 1 */}
                        <ChooseStatusOptions Option={"Pending"} />

                        {/* Option 2 */}
                        <ChooseStatusOptions Option={"In Progress"} />

                        {/* Option 3 */}
                        <ChooseStatusOptions Option={"Approved"} />

                        {/* Option 4 */}
                        <ChooseStatusOptions Option={"New"} />

                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default ChooseStatusDropdown;
