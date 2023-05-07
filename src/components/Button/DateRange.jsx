import React from "react";

function DateRange() {
    return (
        <div class="flex flex-col items-center sm:flex-col lg:flex-row">
            <div class="relative">
                <input name="start" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5" placeholder="Select date start" />
            </div>
            <div class="mx-4 text-gray-500">to</div>
            <div class="relative">
                <input name="end" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5" placeholder="Select date end" />
            </div>
        </div>
    )
    
}

export default DateRange;