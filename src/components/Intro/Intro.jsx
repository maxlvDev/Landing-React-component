import React from "react";
import './Intro.css'

const Intro = function () {
    return (
        <div className="Intro" id="intro">
            <div className="overlay">
            <div className="container">
            <div className="greet">
            <h1>горящие туры в европу</h1>
            <p>Рассказываем о том, как мы организовываем наши экскурсионные туры по Европе</p>
            <a class="btn" href="#features">Узнать больше</a>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Intro