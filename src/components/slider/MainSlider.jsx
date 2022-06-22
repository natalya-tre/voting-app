import React, { useState } from "react";
import Slider from "react-slick";
import { Modal } from 'react-bootstrap';

import Range from "../range/Range";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mainSlider.css"

import * as mockData from "../app/mock";
import yes from "./images/yes.svg";
import no from "./images/no.svg";
import abstain from "./images/abstain.svg";

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

const CardSimple = ({question}) => {

    const [isCollapsed, setIsCollapsed] = React.useState(false)

    return (
        <>
            <div className="block-text-question">
                {!isCollapsed ?
                <div className="text-question">
                    <h2>Избрание членов совета директоров</h2>
                </div> : null}
                <div className="block-btns-text">
                    <div className="btn-text-question btn-translate-text-question">translate</div>
                    <div className="btn-text-question btn-collapse-text-question"
                         onClick={() => setIsCollapsed(prevState => !prevState)}></div>
                </div>
            </div>
            <div className="vote-group-btn">
                <div className="vote-btn yes-btn-vote-group">
                    <img src={yes} alt="yes-img" /> за
                </div>
                <div className="vote-btn abstain-btn-vote-group">
                    <img src={abstain} alt="yes-img" /> воздержался
                </div>
                <div className="vote-btn no-btn-vote-group">
                    <img src={no} alt="yes-img" />против
                </div>
            </div>
            <div className="footer-modal">
                <div className="warning-text-footer-modal">
                    Не все варианты выбраны, продолжить заполнение?
                </div>
                <div className="continue-btn-footer-modal">
                    Продолжить
                </div>
                <div className="voting-btn-footer-modal">
                    Проголосовать
                </div>
            </div>

        </>
    )}
const CardRevision = ({question}) => {
    return (
        <div className="modal-body-revision">
            <div className="block-text-question">
                <div className="text-question">
                    <h2>Избрание членов Ревизионной комиссии</h2>
                </div>
            </div>
            <div className="block-list-voting-revision">
                <div className="block-voting-revision">
                    <div className="candidate-name">Кандидат Номер Раз</div>
                    <div className="vote-group-btn">
                        <div className="vote-btn yes-btn-vote-group">
                            <img src={yes} alt="yes-img" /> за
                        </div>
                        <div className="vote-btn abstain-btn-vote-group">
                            <img src={abstain} alt="yes-img" /> воздержался
                        </div>
                        <div className="vote-btn no-btn-vote-group">
                            <img src={no} alt="yes-img" />против
                        </div>
                    </div>
                </div>
                <div className="block-voting-revision">
                    <div className="candidate-name">Кандидат Номер Два</div>
                    <div className="vote-group-btn">
                        <div className="vote-btn yes-btn-vote-group">
                            <img src={yes} alt="yes-img" /> за
                        </div>
                        <div className="vote-btn abstain-btn-vote-group">
                            <img src={abstain} alt="yes-img" /> воздержался
                        </div>
                        <div className="vote-btn no-btn-vote-group">
                            <img src={no} alt="yes-img" />против
                        </div>
                    </div>
                </div>
                <div className="block-voting-revision">
                    <div className="candidate-name">Кандидат Номер Три</div>
                    <div className="vote-group-btn">
                        <div className="vote-btn yes-btn-vote-group">
                            <img src={yes} alt="yes-img" /> за
                        </div>
                        <div className="vote-btn abstain-btn-vote-group">
                            <img src={abstain} alt="yes-img" /> воздержался
                        </div>
                        <div className="vote-btn no-btn-vote-group">
                            <img src={no} alt="yes-img" />против
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-modal">
                <div className="warning-text-footer-modal" style={{display: "none"}}>
                    Не все варианты выбраны, продолжить заполнение?
                </div>
                <div className="continue-btn-footer-modal" style={{display: "none"}}>
                    Продолжить
                </div>
                <div className="voting-btn-footer-modal">
                    Проголосовать
                </div>
            </div>

        </div>

    )
}
const CardCumulative = ({question}) => {
    return (
        <div className="modal-body-cumulative">
            <div className="block-text-question">
                <div className="text-question">
                    <h2>Избрание членов Совета директоров Куммулятивное голосование</h2>
                </div>
            </div>
            <div className="block-list-voting-cumulative">
                <div className="vote-group-btn-cumulative">
                    <div className="vote-btn yes-btn-vote-group">
                    </div>
                    <div className="vote-btn abstain-btn-vote-group">
                    </div>
                    <div className="vote-btn no-btn-vote-group">
                    </div>
                </div>
                <div className="number-of-shares">
                    <div>Акций</div>
                    <div>100</div>
                </div>
                <div className="block-voting-cumulative">
                   <Range /><Range /><Range /><Range />
                </div>
                <div className="footer-modal">
                    <div className="warning-text-footer-modal" style={{display: "none"}}>
                        Не все варианты выбраны, продолжить заполнение?
                    </div>
                    <div className="continue-btn-footer-modal" style={{display: "none"}}>
                        Продолжить
                    </div>
                    <div className="voting-btn-footer-modal">
                        Проголосовать
                    </div>
                </div>
            </div>
        </div>
    )
}

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
                </Modal.Body>
            </Modal>
        </>
    );
}