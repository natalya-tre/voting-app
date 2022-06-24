import React from "react";

export const SlideHeader = ({ participant, question, total }) => (
    <div className="slide_header">
        <div className="row_slider">
            <div className="left_col_row_slider">
                <div className="nd">НД</div>
                <div className="border_bottom_nd"/>
            </div>
            <div className="right_col_row_slider">
                <div className="numbers">
                    <h3>Номер участника</h3>
                    <p>{ participant.id }</p>
                    <h3>Номер счета</h3>
                    <p>{ participant.account }</p>
                </div>
            </div>
        </div>
        <div className="row_slider">
            <div className="left_col_row_slider">
                <div className="numbers">
                    <h2>Акции</h2>
                    <p>{ participant.shares }</p>
                </div>
            </div>
            <div className="right_col_row_slider">
                <div className="numbers">
                    <h2>Вопросы</h2>
                    <p>{ question.id } <span className="of_the">из </span>{ total }</p>
                </div>
            </div>
        </div>
    </div>
);

export default SlideHeader;