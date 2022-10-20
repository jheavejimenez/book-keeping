/* eslint-disable jsx-a11y/anchor-is-valid */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

function Pagination() {
  return (
    <div className="pt-6 flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className={" relative inline-flex items-center rounded-md border border-gray-300 "+
          " bg-white px-4 py-2 text-sm font-medium text-blue-500 hover:bg-gray-50 "}
        >
          Previous
        </a>
        <a
          href="#"
          className={" relative ml-3 inline-flex items-center rounded-md border border-gray-300 " + 
          " bg-white px-4 py-2 text-sm font-medium text-blue-500 hover:bg-gray-50 "}
        >
          Next
        </a>
      </div>
      <div className="hidden flex items-end justify-end sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className=" hidden text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className={" relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 " + 
              " py-2 text-sm font-medium text-gray-400 hover:bg-blue-500 hover:text-white focus:z-20 "}
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              <span className="not-sr-only">Previous</span>
            </a>
            <a
              href="#"
              aria-current="page" 
              className={" relative z-10 inline-flex items-center border border-gray-300 bg-white px-4 py-2 " + 
              " text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white focus:z-20 "}
            >
              1
            </a>
            <a
              href="#"
              className={" relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 " + 
              " text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white focus:z-20 "}
            >
              2
            </a>
            <a
              href="#"
              className={" relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm " + 
              " font-medium text-blue-500 hover:bg-blue-500 hover:text-white focus:z-20 md:inline-flex "}
            >
              3
            </a>
            <a
              href="#"
              className={" relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 " +
              " py-2 text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white focus:z-20 "}
            >
              <span className="not-sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
export default Pagination;
