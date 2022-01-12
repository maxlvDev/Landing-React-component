import React from "react";
import './About.css'

const About = function () {
    return (
        <div className="About no_show" id="about">
            <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-6">
                <img src="/images/info.jpg" className="image"></img>
                </div>
                    <div className="infotext col-xs-12 col-md-6">
                    <h2>О НАС</h2>
                    <p>Cпециалисты компании тщательно изучают рынок и прогнозируют дальнейшие направления развития спроса. Работа планируется на основе полученных данных с тем, чтобы направлять объемы продаж в необходимое русло. Долгосрочные планы и планы на ближайшие 3, 5 и 10 лет постоянно обновляются и дополняются с учетом анализа тенденций на рынке мирового туризма и международной политики.</p>
                    <h3>Почему стоит выбрать нас?</h3>
                    <div className="list-style">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                        <ul>
                            <li>Работаем 24/7</li>
                            <li>Самые низкие цены</li>
                            <li>Удобный трансфер</li>
                            <li>Работаем с 1995 года</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                        <ul>
                        <li>Более 50 направлений</li>
                            <li>Персональные скидки</li>
                            <li>На рынке с 1995 года</li>
                            <li>Онлайн-заявки</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
       </div>
    )
}

export default About