import React from "react";
import VoteGroupBtn from "../voteGroupBtn/VoteGroupBtn";
import QuestionText from '../cards/QuestionText';


export default function CardSimple({ question }) {

    const [isCollapsed, setIsCollapsed] = React.useState(false)
    return (
        <>
            { !isCollapsed ? <QuestionText text={question.title} /> : null }
            <div className="block-question-text">
                <div className="block-btns-text">
                    <div className="btn-question-text btn-translate-question-text">translate</div>
                    <div className="btn-question-text btn-collapse-question-text"
                         onClick={ () => setIsCollapsed(prevState => !prevState) }></div>
                </div>
            </div>
            <VoteGroupBtn/>

        </>
    )
};
