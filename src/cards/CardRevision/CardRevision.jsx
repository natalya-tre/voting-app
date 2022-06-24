import React from "react";
import VoteGroupBtn from "../../components/VoteGroupBtn/VoteGroupBtn";
import QuestionText from '../../components/QuestionText/QuestionText';

import {candidatesRevision} from '../../mock/mock';

export const CardRevision = ({question, votingResult, onSelect}) => {
    const calcValue = ( candidateId, value ) => {
        const newResult = votingResult ? [...votingResult] : [];
        newResult[candidateId] = value;
        return newResult;
    }

    return (
        <div className="modal-body-revision">
            <QuestionText text={question.title}/>
            <div className="block-list-voting">
                {candidatesRevision.map(candidate => (
                    <div key={candidate.id} className="block-voting-revision">
                        <div className="candidate-name">{candidate.name}</div>
                        <VoteGroupBtn
                            voted={votingResult ? votingResult[candidate.id] : null}
                            onVote={(value) => onSelect (question.id, calcValue(candidate.id, value))} />
                    </div>
                ))}
            </div>
        </div>
    )
};

export default CardRevision;
