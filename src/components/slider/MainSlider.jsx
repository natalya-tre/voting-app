import React, { useState } from "react";
import Slider from "react-slick";
import { Modal } from 'react-bootstrap';

import CardSimple from "../cardSimple/CardSimple";
import CardCumulative from "../cardCumulative/CardCumulative";
import CardRevision from "../cardRevision/CardRevision";
import FooterSlider from "./FooterSlider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mainSlider.css"

import * as mockData from "../app/mock";

const Slide = ({participant, question, total, onClick}) => (
    <div className="slide">
        <div className="middle_line_slider"></div>
        <div className="slide_header">
            <div className="row_slider">
                <div className="left_col_row_slider">
                    <div className="nd">НД</div>
                    <div className="border_bottom_nd"></div>
                </div>
                <div className="right_col_row_slider">
                    <div className="numbers">
                        <h3>Номер участника</h3>
                        <p>{participant.id}</p>
                        <h3>Номер счета</h3>
                        <p>{participant.account}</p>
                    </div>
                </div>
            </div>
            <div className="row_slider">
                <div className="left_col_row_slider">
                    <div className="numbers">
                        <h2>Акции</h2>
                        <p>{participant.shares}</p>
                    </div>
                </div>
                <div className="right_col_row_slider">
                    <div className="numbers">
                        <h2>Вопросы</h2>
                        <p>{question.order} <span className="of_the">из </span>{total}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="slide_info">
            <div className="slide_info_text">
                <h3 className="mb-8">{question.orderText}</h3>
                <h1 className="mb-8">{question.title}</h1>
                <h2 className="mb-8">{question.subtitle}</h2>
                <div className="block_links_slide_info">
                    <div className="link mb-8" onClick={onClick}>Подробнее</div>
                    <div className="row_block_links">
                        <div className="left_col_row_block_links right-border">
                            <div className="link mb-8"><div className="icon_question">?</div>Задать вопрос</div>
                        </div>
                        <div className="right_col_row_block_links">
                            <div className="link mb-8">Как проголосовать</div>
                        </div>
                    </div>
                    <div className="circle_slide_info"></div>
                </div>
                <div className="voting-btn" onClick={onClick}>
                    Проголосовать
                </div>
            </div>
        </div>
    </div>
);

export default function MainSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        className: "mainSlider",
        centerMode: true,
        centerPadding: "35px",
        slidesToShow: 1,
    };

    const [show, setShow] = useState(false);
    const [currentQ, setCurrentQ] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (q) => {
        setCurrentQ(q);
        setShow(true);
    }

    const renderCardType = (q) => {
        if ( !q ) return null;
        switch(q?.type){
            case -1: return null;
            case 0: return (<CardSimple question={q}/>);
            case 1: return (<CardRevision question={q}/>);
            case 2: return (<CardCumulative question={q}/>);
            default: return null;
        }
    }

    return (
        <>
        <Slider {...settings}>
            {mockData.questions.map(q =>
                <Slide
                    key={q.order}
                    participant={mockData.participant}
                    question={q}
                    total={mockData.questions.length}
                    onClick={()=>handleShow(q)} />)
            }
                < /Slider>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{currentQ?.orderText}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{renderCardType(currentQ)
                    }
                    <FooterSlider />
                </Modal.Body>
            </Modal>
        </>
    );
}