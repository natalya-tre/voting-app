import React, {useState} from "react";

import {
    CircularInput,
    CircularTrack,
    CircularProgress
} from "react-circular-input";
import "./circularVotingResult.css"

export const CircularVotingResult = (props) => {
    return ( <>
        <Grid>
            <CircularInput value={props.answer} radius={39.5}>
                <CircularTrack strokeWidth={9} stroke="#DCDEE7" />
                <CircularProgress className="circularVotingProgress" />
            </CircularInput>
        </Grid>
        </>
    );
}

function Grid({ children }) {
    return (
        <div
            style={{
                display: "grid",
                gridGap: "60% 40%",
                padding: 0,
                fontFamily: "sans-serif",
                margin:"30px auto",
                justifyContent: "center"
            }}
        >
            {children}
        </div>
    );
}


export default CircularVotingResult;
