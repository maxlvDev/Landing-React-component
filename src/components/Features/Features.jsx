import React from "react";
import './Features.css';

const Features = function () {
    return(
        <div className="Features no_show" id="features">
            <div className="container">
                <h2>Преимущества</h2>
                <div className="row">
                    <div className="col-xs-6 col-md-3">
                        <i class="fa fa-clock-o" id = 'f' aria-hidden="true"></i>
                        <h3>Любая длительность</h3>
                        <p>Отпускные пакеты для направления "Европа" позволят Вам спланировать путешествие без труда и лишних затрат.</p>
                    </div>
                    <div className="col-xs-6 col-md-3">
                    <i class="fa fa-calculator" id = 'f' aria-hidden="true"></i>
                        <h3>Скидки до 20% на размещение</h3>
                        <p>В цену включены трансферы, размещение в гостиницах и виза.</p>
                    </div>
                    <div className="col-xs-6 col-md-3">
                    <i class="fa fa-calendar" id = 'f' aria-hidden="true"></i>
                        <h3>Удобные для вас даты</h3>
                        <p>Горящие туры — это лакомый кусочек для любого туриста, который любит экономить свои деньги.</p>
                    </div>
                    <div className="col-xs-6 col-md-3">
                    <i class="fa fa-globe" id = 'f' aria-hidden="true"></i>
                        <h3>Более 50 направлений</h3>
                        <p>Европейские города – это постоянные открытия, и какой бы у вас ни был вкус, мы уверены, что вы найдете то, что нужно вам и вашим близким.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Features