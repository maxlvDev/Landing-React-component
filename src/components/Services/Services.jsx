import React from "react";
import './Services.css'

const Services = () => {
    return <div className="Services no_show" id="services">
        <div className="container">
            <div className="section_title">
                <h2>Отзывы</h2>
                <p>За годы нашей работы о нас оставили более 10 000 довольных отзывов </p>
            </div>
            <div className="row">
            <div className="col-md-4">
                        <div className="photoA"></div>
                        <h3>Анатолий</h3>
                        <p>"Всегда путешествую с семьей и пользуюсь услугами этого агенства"</p>
                    </div>
                    <div className="col-md-4">
                    <div className="photoB"></div>
                        <h3>Дмитрий</h3>
                        <p>"Выражаю огромную благодарность за оказанные услуги."</p>
                    </div>
                    <div className="col-md-4">
                    <div className="photoC"></div>
                        <h3>Сергей</h3>
                        <p>"Все понравилось, сервис на высшем уровне."</p>
                    </div>
                    
                    <div className="col-md-4">
                    <div className="photoF"></div>
                        <h3>Ольга</h3>
                        <p>"Не первый раз пользуюсь услугами этой компании и остаюсь довольна."</p>
                    </div>
                    <div className="col-md-4">
                    <div className="photoG"></div>
                        <h3>Елена</h3>
                        <p>"Большое спасибо, отдых был организован на высочайшем уровне"</p>
                    </div>
                    <div className="col-md-4">
                    <div className="photoD"></div>
                        <h3>Ирина</h3>
                        <p>"Обязательно воспользуюсь услугами этого агенства еще раз и буду всем рекомендовать."</p>
                    </div>
            </div>
        </div>
    </div>
}

export default Services