import { Menu } from '@headlessui/react';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ChooseStatusOptions ({Option}) {
    return (
        <Menu.Item>
        {({ active }) => (
          <button
              type="submit"
              className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block w-full px-4 py-2 text-left text-sm'
              )}
            >
            {Option}
          </button>
        )}
      </Menu.Item>
    )
}
export default ChooseStatusOptions;
