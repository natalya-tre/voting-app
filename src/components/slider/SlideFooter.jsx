import React from "react";

export const SlideFooter = ({ onClick }) => (
        <div className="footer-modal">
            <div className="warning-text-footer-modal">
                Не все варианты выбраны, продолжить заполнение?
            </div>
            <div className="continue-btn-footer-modal">
                Продолжить
            </div>
            <div className="voting-btn-footer-modal" onClick={ onClick }>
                Проголосовать
            </div>
        </div>
    )
export default SlideFooter;
