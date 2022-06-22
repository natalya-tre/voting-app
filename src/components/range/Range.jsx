import React, { useState } from "react";
import "./range.css"

export default function Range() {
    const [inputValue, setValue] = useState(0);
    const onChange = (e) => setValue(e.target.value);
    return (
        <>
            <div className="candidate-name">Кандидат Номер Раз</div>
            <div className="range-container">
                <div className="range-input">
                    <input
                        type="range"
                        minValue="0"
                        maxValue="999999"
                        value={inputValue}
                        onChange={onChange}
                        className="slider"/>
                </div>
                <div className="number-input">
                    <input
                        type="number"
                        min="0"
                        max="999999"
                        value={inputValue}
                        onChange={onChange}
                    />
                </div>
            </div>
        </>

    );
};