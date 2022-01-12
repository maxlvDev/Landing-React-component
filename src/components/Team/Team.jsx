import React from "react";
import './Team.css'

const Team = () => {
    return (
        <div className="Team no_show" id="team">
            <div className="container">
                <div className="section_title">
                    <h2>Наша команда</h2>
                    <p>Специалисты с огромным опытом работы подберут подходящий вам тур.</p>
                </div>
            <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                            <img src="/images/01.jpg" className="team_card"></img>
                        </div>
                        <h3>Андрей Андреев</h3>
                        <p>Менеджер по продажам</p>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                        <img src="/images/02.jpg" className="team_card"></img>
                        </div>
                        <h3>Сергей Сергеев</h3>
                        <p>Администратор</p>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                        <img src="/images/03.jpg" className="team_card"></img>
                        </div>
                        <h3>Анна Иванова</h3>
                        <p>Консультант</p>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                        <img src="/images/04.jpg" className="team_card"></img>
                        </div>
                        <h3>Елена Петрова</h3>
                        <p>Экскурсовод</p>
                    </div>
            </div>
            </div>
        </div>
    )
}


export default Team