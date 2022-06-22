import React from "react";
import VoteGroupBtn from "../voteGroupBtn/VoteGroupBtn";


export default function CardSimple ({question}) {

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
            <VoteGroupBtn />
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
    )};