import React, {useState} from "react";


export default function FooterSlider () {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return (
        <>
            <div className="footer-modal">
                <div className="warning-text-footer-modal">
                    Не все варианты выбраны, продолжить заполнение?
                </div>
                <div className="continue-btn-footer-modal">
                    Продолжить
                </div>
                <div className="voting-btn-footer-modal" onClick={handleClose}>
                    Проголосовать
                </div>
            </div>
        </>
    )
}