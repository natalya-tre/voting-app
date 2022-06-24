import React, {useEffect, useState} from "react";

import yes from "./images/yes.svg";
import abstain from "./images/abstain.svg";
import no from "./images/no.svg";
import "./voteGroupBtn.css";
import {VOTE_YES, VOTE_ABSTAIN, VOTE_NO} from "../../app/constants";

export default function VoteGroupBtn(props) {
    const {voted, onVote} = props;
    const [yesActive, setBtnYesActive] = useState('');
    const [noActive, setBtnNoActive] = useState("");
    const [abstainActive, setBtnAbstainActive] = useState("");

    useEffect(() => {
        switch (voted) {
            case VOTE_YES:
                setBtnYesActive("active");
                setBtnNoActive("disable-btn-vote-group");
                setBtnAbstainActive("disable-btn-vote-group");
                return;
            case VOTE_ABSTAIN:
                setBtnAbstainActive("active");
                setBtnYesActive("disable-btn-vote-group");
                setBtnNoActive("disable-btn-vote-group");
                return;
            case VOTE_NO:
                setBtnNoActive("active");
                setBtnYesActive("disable-btn-vote-group");
                setBtnAbstainActive("disable-btn-vote-group");
                return;
            default:
                return;
        }

    }, [voted])
    const setYesActive = () => {
        onVote(VOTE_YES);
    };
    const setAbstainActive = () => {
        onVote(VOTE_ABSTAIN);
    }
    const setNoActive = () => {
        onVote(VOTE_NO);
    }

    return (
        <>
            <div className="vote-group-btn">
                <div className={`vote-btn yes-btn-vote-group ${yesActive}`} onClick={setYesActive}>
                    <img src={yes} alt="yes-img"/>за
                </div>
                <div className={`vote-btn abstain-btn-vote-group ${abstainActive}`} onClick={setAbstainActive}>
                    <img src={abstain} alt="yes-img"/>воздержался
                </div>
                <div className={`vote-btn no-btn-vote-group ${noActive}`} onClick={setNoActive}>
                    <img src={no} alt="yes-img"/>против
                </div>
            </div>
        </>
    );
};
