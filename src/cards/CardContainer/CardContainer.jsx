import React, { useState } from "react";
import { CARD_TYPES } from "../../app/constants";

import CardSimple from "../CardSimple/CardSimple";
import CardCumulative from "../CardCumulative/CardCumulative";
import CardRevision from "../CardRevision/CardRevision";
import CardUndefined from "../CardUndefined/CardUndefined";
import CardFooter from "../CardFooter/CardFooter";

const undefinedCircularProcessor = (value) => {
    return value === null ? 1 : 0
};

const simpleCircularProcessor = (value) => {
    return value === undefined ? 0 : 1;
};

const simpleCardValidator = (value) => {
    return value != null;
}

const revisionCircularProcessor = (value, maxVotes) => {
    if ( !Number.isInteger(maxVotes)) return 0;
    if ( maxVotes === 0 ) return 0;
    if ( value == null ) return 0;
    if ( !Array.isArray(value)) return 0;
    return value.length / maxVotes;
};

const revisionCardValidator = (value) => {
    return value != null;
}

const cumulativeCircularProcessor = (value) => {
    return value === undefined ? 0 : 1;
};

const cumulativeCardValidator = (value) => {
    return value != null;
}


const cards = {
    [CARD_TYPES.CARD_UNDEFINED]: CardUndefined,
    [CARD_TYPES.CARD_SIMPLE]: CardSimple,
    [CARD_TYPES.CARD_REVISION]: CardRevision,
    [CARD_TYPES.CARD_CUMULATIVE]: CardCumulative
};

const circularProcessors = {
    [CARD_TYPES.CARD_UNDEFINED]: undefinedCircularProcessor,
    [CARD_TYPES.CARD_SIMPLE]: simpleCircularProcessor,
    [CARD_TYPES.CARD_REVISION]: revisionCircularProcessor,
    [CARD_TYPES.CARD_CUMULATIVE]: cumulativeCircularProcessor
}

const dataValidators = {
    [CARD_TYPES.CARD_UNDEFINED]: () => true,
    [CARD_TYPES.CARD_SIMPLE]: simpleCardValidator,
    [CARD_TYPES.CARD_REVISION]: revisionCardValidator,
    [CARD_TYPES.CARD_CUMULATIVE]: cumulativeCardValidator
}

export const CardContainer = (props) => {
    const [currResult, setCurrResult] = useState(props.votingResult || null);
    const [isValid, setIsValid] = useState(true);

    const onSelect = (id, result) => {
        setCurrResult ( result );
        setIsValid( dataValidators[props.question.type](result) );
    };

    const onVote = () => {
        if ( dataValidators[props.question.type](currResult) ) {
            props.onVote(currResult, circularProcessors[props.question.type](currResult, props.question.maxVotes));
        } else {
            setIsValid(false);
        }
    }

    const onDiscard = () => {
        console.log('CardContainer: onDiscard');
        setIsValid(true);
    }

    // TODO: test for unexisted card type
    const TheCard = cards[props.question.type ?? CARD_TYPES.CARD_UNDEFINED];

    return <>
        <TheCard { ...props } onSelect={ onSelect } votingResult={currResult}  />
        <CardFooter isValid={isValid} onVote={ onVote } onDiscard={ onDiscard }/>
    </>;
};
export default CardContainer;
