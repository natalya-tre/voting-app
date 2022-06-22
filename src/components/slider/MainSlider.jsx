import React, { useState } from "react";
import Slider from "react-slick";
import { Modal } from 'react-bootstrap';

import Slide from "./Slide";
import CardContainer from "./CardContainer";
import CardSimple from "../cardSimple/CardSimple";
import CardCumulative from "../cardCumulative/CardCumulative";
import CardRevision from "../cardRevision/CardRevision";
import SlideFooter from "./SlideFooter";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mainSlider.css"

import { settings } from "./settings";

import * as mockData from "../app/mock";

export default function MainSlider() {

    const [show, setShow] = useState(false);
    const [currQuestion, setCurrQuestion] = useState(null);

    const handleClose = () => setShow(false);

    const handleShow = (q) => {
        setCurrQuestion(q);
        setShow(true);
    }

    const renderCardType = (q) => {
        if (!q) return null;
        switch (q?.type) {
            case -1:
                return null;
            case 0:
                return (<CardSimple question={ q }/>);
            case 1:
                return (<CardRevision question={ q }/>);
            case 2:
                return (<CardCumulative question={ q }/>);
            default:
                return null;
        }
    }

    return (
        <>
            <Slider { ...settings }>
                { mockData.questions.map(q =>
                    <Slide
                        key={ q.order }
                        participant={ mockData.participant }
                        question={ q }
                        total={ mockData.questions.length }
                        onClick={ () => handleShow(q) }/>)
                }
            < /Slider>
            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header>
                    <Modal.Title>{ currQuestion?.orderText }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*<CardContainer>*/}
                    { renderCardType(currQuestion)
                    // </CardContainer>
                }
                    <SlideFooter onClick={ handleClose }/>
                </Modal.Body>
            </Modal>
        </>
    );
}
