import React from "react";
import './Gallery.css'

const Gallery = () => {
    return (
        <div className="Gallery no_show" id="gallery">
            <div className="container">
                <div className="section_title">
                    <h2>Галерея</h2>
                    <p>Наши экскурсионные туры включают более 50 направлений. Мы уверены, что вы найдете то, что нужно вам и вашим близким.</p>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-4"> 
                    <div className="item">
                        <img src="/images/L1.jpg" className="image"></img>  
                        <h4>Австрия</h4></div>
                        </div>

                    <div className="col-sm-6 col-md-4 col-lg-4"> 
                    <div className="item">
                        <img src="/images/L2.jpg" className="image"></img>
                        <h4>Болгария</h4></div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4"> 
                    <div className="item">
                        <img src="/images/L3.jpg" className="image"></img>
                   <h4>Польша</h4></div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4"> 
                    <div className="item">
                    <img src="/images/M1.jpg" className="image"></img>
                    <h4>Германия</h4></div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4"> 
                    <div className="item">
                    <img src="/images/M2.jpg" className="image"></img>
                    <h4>Франция</h4></div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4"> 
                    <div className="item">
                    <img src="/images/M3.jpg" className="image"></img>
                    <h4>Италия</h4></div>
                    </div>


                    <div className="col-sm-6 col-md-4 col-lg-4"> 
                    <div className="item">
                    <img src="/images/R1.jpg" className="image"></img>
                    <h4>Испания</h4></div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4"> 
                    <div className="item">
                    <img src="/images/R2.jpg" className="image"></img>
                    <h4>Англия</h4></div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4"> 
                    <div className="item">
                    <img src="/images/R3.jpg" className="image"></img>
                    <h4>Чехия</h4></div>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default Gallery