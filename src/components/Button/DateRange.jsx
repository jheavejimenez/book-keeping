import React from "react";
import { useState } from "react";

function DateRange() {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    
    
    // console.log(start, end);
    // dateRange();

    return (
        <div class="flex flex-col items-center sm:flex-col lg:flex-row">
            <div class="relative">
                <input 
                name="start"
                 type="date"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5"
                 placeholder="Select date start"
                 onChange={(e) => setStart(e.target.value)}
                  
                  />
            </div>
            <div class="mx-4 text-gray-500">to</div>
            <div class="relative">
            <input 
                name="start"
                 type="date"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5"
                 placeholder="Select date start"
                 onChange={(e) => setEnd(e.target.value)}
                  
                  />
            </div>
        </div>
    )
    
}

export default DateRange;