import React from "react";
import './Header.css'


const Header = () => {
    return (
        <div className = "Header"> 
            <div className="container">
             <a className="brand" href="#intro">Tourist landing page</a>   
            <ul className="navbar">
                <li><a id="fe" className="ww" href ="#features">ПРЕИМУЩЕСТВА</a></li>
                <li><a id="ab" className="ww" href ="#about">О НАС</a></li>
                <li><a id="se" className="ww" href ="#services">ОТЗЫВЫ</a></li>
                <li><a id="ga" className="ww" href ="#gallery">ГАЛЕРЕЯ</a></li>
                <li><a id="te" className="ww" href ="#team">КОМАНДА</a></li>
                <li><a id="co" className="ww" href ="#contact">КОНТАКТЫ</a></li>
            </ul>
            <button type="button" className="navbut">
                <span className="icon_but"></span>
                <span className="icon_but"></span>
                <span className="icon_but" ></span>
            </button>
            </div>
            <div className="menu_bar hidden">
            <ul className="sublist">
            <li><a id="fe" className="ww" href ="#features">ПРЕИМУЩЕСТВА</a></li>
                <li><a id="ab" className="ww" href ="#about">О НАС</a></li>
                <li><a id="se" className="ww" href ="#services">ОТЗЫВЫ</a></li>
                <li><a id="ga" className="ww" href ="#gallery">ГАЛЕРЕЯ</a></li>
                <li><a id="te" className="ww" href ="#team">КОМАНДА</a></li>
                <li><a id="co" className="ww" href ="#contact">КОНТАКТЫ</a></li>
            </ul>
            </div>
            </div>
    )
}

export default Header