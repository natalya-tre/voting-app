
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {Modal} from 'react-bootstrap';

import Slide from "./Slide";
import CardContainer from "../cards/CardContainer/CardContainer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mainSlider.css"

import {sliderSettings} from "./sliderSettings";

import * as mockData from "../mock/mock";

export const MainSlider = () => {
    const [currQuestion, setCurrQuestion] = useState(null);
    const [votingResults, setVotingResults] = useState({});

    useEffect( () => {
        console.log( 'votingResults = ', votingResults);
    },[votingResults])

    const onHide = () => {
        setCurrQuestion(null);
	}

    const onShow = (q) => {
        setCurrQuestion(q);
    }
    const onVote = (questionId, answer, circularAnswer ) => {
        // console.log ( 'MainSlider: onVote' );
        setVotingResults( { ...votingResults, [questionId]:{ value: answer, circularValue: circularAnswer} });
        setCurrQuestion(null);
    }

    return (
        <>
            <Slider {...sliderSettings}>
                {mockData.questions.map(q =>
                    <Slide
                        key={q.id}
                        participant={mockData.participant}
                        question={q}
                        answer={votingResults[q.id]}
                        total={mockData.questions.length}
                        onClick={() => onShow(q)}/>)
                }
            < /Slider>
            {currQuestion && <Modal show={!!currQuestion} onHide={onHide}>
                <Modal.Header>
                    <Modal.Title>{currQuestion.orderText}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CardContainer
                    	question={currQuestion}
                    	votingResult={votingResults[currQuestion.id]?.value}
                    	onVote={ (answer, circularAnswer) => onVote(currQuestion.id, answer, circularAnswer) }/>
                </Modal.Body>
            </Modal>
            }
        </>
    );
};

export default MainSlider;
