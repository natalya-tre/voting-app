import React from "react";
import VoteGroupBtn from "../../components/VoteGroupBtn/VoteGroupBtn";
import QuestionText from '../../components/QuestionText/QuestionText';


export const CardSimple = ({question, votingResult, onSelect}) => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    return (
        <>
            { !isCollapsed ? <QuestionText text={question.title} /> : null }
            <div className="block-question-text">
                <div className="block-btns-text">
                    <div className="btn-question-text btn-translate-question-text">translate</div>
                    <div className="btn-question-text btn-collapse-question-text"
                         onClick={ () => setIsCollapsed(prevState => !prevState) }/>
                </div>
            </div>
            <VoteGroupBtn voted={votingResult} onVote={(value) => onSelect (question.id, value)} />
        </>
    )
};

export default CardSimple;
