import React, {useState} from "react";

export default function VoteCumulativeGroupBtn() {
    const [yesActive, setBtnYesActive] = useState("yes-btn-vote-group");
    const [noActive, setBtnNoActive] = useState("no-btn-vote-group");
    const [abstainActive, setBtnAbstainActive] = useState("abstain-btn-vote-group");

    const setYesActive = () => {
        setBtnYesActive("yes-btn-vote-group active");
        setBtnNoActive ("disable");
        setBtnAbstainActive ("disable");
    };
    const setAbstainActive = () => {
        setBtnAbstainActive ("abstain-btn-vote-group active");
        setBtnYesActive ("disable");
        setBtnNoActive ("disable");
    }
    const setNoActive = () => {
        setBtnNoActive ("no-btn-vote-group active");
        setBtnYesActive ("disable");
        setBtnAbstainActive ("disable");
    }

    return (
        <>
            <div className="vote-group-btn-cumulative">
                <div className={`vote-btn ${yesActive} lalala`} onClick={setYesActive}>
                </div>
                <div className={`vote-btn ${abstainActive}`} onClick={setAbstainActive}>
                </div>
                <div className={`vote-btn ${noActive}`} onClick={setNoActive}>
                </div>
            </div>
        </>
    );
};