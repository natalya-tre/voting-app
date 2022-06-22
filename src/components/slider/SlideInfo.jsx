import React from "react";

export const SlideInfo = ({ question, onClick }) => (
    <div className="slide_info">
        <div className="slide_info_text">
            <h3 className="mb-8">{ question.orderText }</h3>
            <h1 className="mb-8">{ question.title }</h1>
            <h2 className="mb-8">{ question.subtitle }</h2>
            <div className="block_links_slide_info">
                <div className="link mb-8" onClick={ onClick }>Подробнее</div>
                <div className="row_block_links">
                    <div className="left_col_row_block_links right-border">
                        <div className="link mb-8">
                            <div className="icon_question">?</div>
                            Задать вопрос
                        </div>
                    </div>
                    <div className="right_col_row_block_links">
                        <div className="link mb-8">Как проголосовать</div>
                    </div>
                </div>
                <div className="circle_slide_info"/>
            </div>
            <div className="voting-btn" onClick={ onClick }>
                Проголосовать
            </div>
        </div>
    </div>
);

export default SlideInfo;