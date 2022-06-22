import React, { useState } from "react";

import yes from "../slider/images/yes.svg";
import abstain from "../slider/images/abstain.svg";
import no from "../slider/images/no.svg";
import "./voteGroupBtn.css";

export default function VoteGroupBtn() {
    const [yesActive, setBtnYesActive] = useState("vote-btn yes-btn-vote-group");
    const [noActive, setBtnNoActive] = useState("vote-btn no-btn-vote-group");
    const [abstainActive, setBtnAbstainActive] = useState("vote-btn abstain-btn-vote-group");

    const setYesActive = () => {
        setBtnYesActive("vote-btn yes-btn-vote-group active");
        setBtnNoActive ("vote-btn disable-btn-vote-group");
        setBtnAbstainActive ("vote-btn disable-btn-vote-group");
    };
    const setAbstainActive = () => {
        setBtnAbstainActive ("vote-btn abstain-btn-vote-group active");
        setBtnYesActive ("vote-btn disable-btn-vote-group");
        setBtnNoActive ("vote-btn disable-btn-vote-group");
    }
    const setNoActive = () => {
        setBtnNoActive ("vote-btn no-btn-vote-group active");
        setBtnYesActive ("vote-btn disable-btn-vote-group");
        setBtnAbstainActive ("vote-btn disable-btn-vote-group");
    }

    return (
        <>
            <div className="vote-group-btn">
                <div className={yesActive} onClick={setYesActive}>
                    <img src={yes} alt="yes-img" /> за
                </div>
                <div className={abstainActive} onClick={setAbstainActive}>
                    <img src={abstain} alt="yes-img" /> воздержался
                </div>
                <div className={noActive} onClick={setNoActive}>
                    <img src={no} alt="yes-img" />против
                </div>
            </div>
        </>
    );
};