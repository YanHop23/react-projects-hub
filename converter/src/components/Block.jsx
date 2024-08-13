//To
import React, { useState } from "react";

const defaultCurrencies = ['UAH', 'USD', 'EUR', 'GBP'];

const Block = ({ 
    changeCurency,
    curency,
    value,
    onChangeValue
    }) => {
        const [value, setValue] = useState(0)
        
    return(
        <div className="border-2 m-2">
            <ul className="mb-4 flex justify-center text-2xl m-1">
                
                {defaultCurrencies.map((cur) => (
                    <li
                        onClick={() => changeCurency(cur, )}    
                        className={`cursor-pointer border-2 mx-1  px-4 py-2 ${curency  === cur ? 'bg-green-700 text-white' : ''}`}
                        key={cur}
                    >
                        {cur}
                    </li>
                ))}
            </ul>
            <input
            value={value}
            onChange={(e) => onChangeValue(e.target.value)}
            className="text-5xl border-none px-3 w-full" type="text"/>
        </div>
    );
};

export default Block;