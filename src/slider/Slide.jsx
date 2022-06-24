import React from "react";

import SlideHeader from "./SlideHeader";
import SlideInfo from "./SlideInfo";

export const Slide = ({ participant, question, answer, total, onClick }) => (
    <div className="slide">
        <SlideHeader participant={ participant } question={ question } total={ total }/>
        <div className="middle_line_slider"/>
        <SlideInfo question={ question } answer={answer !== undefined ? answer.circularValue : 0 } onClick={ onClick }/>
    </div>
);

export default Slide;
