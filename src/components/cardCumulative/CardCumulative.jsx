import React from "react";
import Range from "../range/Range";

import VoteCumulativeGroupBtn from "./voteCumulativeGroupBtn";
import QuestionText from '../cards/QuestionText';

import "./cardCumulative.css"

export default function CardCumulative ({question}) {
    return (
        <div className="modal-body-cumulative">
            <QuestionText text={question.title}/>

            <div className="block-list-voting-cumulative">
                <VoteCumulativeGroupBtn />
                <div className="number-of-shares">
                    <div>Акций</div>
                    <div>100</div>
                </div>
                <div className="block-voting-cumulative">
                    <Range /><Range /><Range /><Range />
                </div>
            </div>
        </div>
    )
};
