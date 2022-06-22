import React from "react";

import SlideHeader from "./SlideHeader";
import SlideInfo from "./SlideInfo";

export const Slide = ({ participant, question, total, onClick }) => (
    <div className="slide">
        <SlideHeader participant={ participant } question={ question } total={ total }/>
        <div className="middle_line_slider"/>
        <SlideInfo question={ question } onClick={ onClick }/>
    </div>
);

export default Slide;