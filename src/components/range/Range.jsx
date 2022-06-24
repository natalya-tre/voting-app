import React, { useState } from "react";
import "./range.css"

export const Range = ({director, freePoints, onVote}) => {
    const [inputValue, setValue] = useState(0);
    const onChange = (e) => {
        setValue(e.target.value);
        onVote(e.target.value);
    }

    return (
        <>
            <div className="candidate-name">{ director.name }</div>
            <div className="range-container">
                <div className="range-input">
                    <input
                        type="range"
                        min="0"
                        max={freePoints}
                        value={inputValue}
                        onChange={onChange}
                        className="slider"/>
                </div>
                <div className="number-input">
                    <input
                        type="number"
                        min="0"
                        max={freePoints}
                        value={inputValue}
                        onChange={onChange}
                    />
                </div>
            </div>
        </>

    );
};
export default Range;
