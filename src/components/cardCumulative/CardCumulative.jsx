import React from "react";
import Range from "../range/Range";

import "./cardCumulative.css"
import VoteCumulativeGroupBtn from "./voteCumulativeGroupBtn";

export default function CardCumulative ({question}) {
    return (
        <div className="modal-body-cumulative">
            <div className="block-text-question">
                <div className="text-question">
                    <h2>Избрание членов Совета директоров Куммулятивное голосование</h2>
                </div>
            </div>
            <div className="block-list-voting-cumulative">
                <VoteCumulativeGroupBtn />
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
};