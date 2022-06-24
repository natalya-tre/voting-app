import React from "react";

export const CardFooter = ({ isValid, onVote, onDiscard }) => (
        <div className="footer-modal">
            <div>{isValid}</div>
            { !isValid && <div className="warning-text-footer-modal">
                Не все варианты выбраны, продолжить заполнение?
            </div> }
            { !isValid &&  <div className="continue-btn-footer-modal" onClick={ onDiscard }>
                Продолжить
            </div> }
            <div className="voting-btn-footer-modal" onClick={ onVote }>
                Проголосовать
            </div>
        </div>
    )
export default CardFooter;
