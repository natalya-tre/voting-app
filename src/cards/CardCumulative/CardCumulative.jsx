import React from "react";
import Range from "../../components/Range/Range";

import VoteCumulativeGroupBtn from "../../components/voteCumulativeGroupBtn/VoteCumulativeGroupBtn";
import QuestionText from '../../components/QuestionText/QuestionText';

import {directorsCumulative} from '../../mock/mock';

import "./cardCumulative.css"

export const CardCumulative = ({question, total, answered, onSelect}) => {

    const onChange = (value) => {

    }
    return (
        <div className="modal-body-cumulative">
            <QuestionText text={question.title}/>

            <div className="voting-cumulative">
                <VoteCumulativeGroupBtn />
                <div className="number-of-shares">
                    <div>Акций</div>
                    <div>{total}</div>
                </div>
                <div className="block-list-voting-cumulative">
                    <div className="block-voting-cumulative">
                        { directorsCumulative.map(director => <Range
                            key={director.id} director={director} onVote={onChange}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardCumulative;
