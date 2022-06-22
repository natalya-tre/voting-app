import React, { Component } from "react";
import MainSlider from "../slider/MainSlider";

import "./pageSlider.css"

export default class PageSlider extends Component {
    render() {
        return (
            <div className="pageSlider">
                <MainSlider />
            </div>
        );
    }
}