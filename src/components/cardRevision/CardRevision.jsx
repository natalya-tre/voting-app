import React from "react";
import VoteGroupBtn from "../voteGroupBtn/VoteGroupBtn";


export default function CardRevision ({question}) {
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
                    <VoteGroupBtn />
                </div>
                <div className="block-voting-revision">
                    <div className="candidate-name">Кандидат Номер Два</div>
                    <VoteGroupBtn />
                </div>
                <div className="block-voting-revision">
                    <div className="candidate-name">Кандидат Номер Три</div>
                    <VoteGroupBtn />
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
};
