import React, {useState} from "react";

export default function VoteCumulativeGroupBtn() {
    const [yesActive, setBtnYesActive] = useState("vote-btn yes-btn-vote-group");
    const [noActive, setBtnNoActive] = useState("vote-btn no-btn-vote-group");
    const [abstainActive, setBtnAbstainActive] = useState("vote-btn abstain-btn-vote-group");

    const setYesActive = () => {
        setBtnYesActive("vote-btn yes-btn-vote-group active");
        setBtnNoActive ("vote-btn disable");
        setBtnAbstainActive ("vote-btn disable");
    };
    const setAbstainActive = () => {
        setBtnAbstainActive ("vote-btn abstain-btn-vote-group active");
        setBtnYesActive ("vote-btn disable");
        setBtnNoActive ("vote-btn disable");
    }
    const setNoActive = () => {
        setBtnNoActive ("vote-btn no-btn-vote-group active");
        setBtnYesActive ("vote-btn disable");
        setBtnAbstainActive ("vote-btn disable");
    }

    return (
        <>
            <div className="vote-group-btn-cumulative">
                <div className={yesActive} onClick={setYesActive}>
                </div>
                <div className={abstainActive} onClick={setAbstainActive}>
                </div>
                <div className={noActive} onClick={setNoActive}>
                </div>
            </div>
        </>
    );
};