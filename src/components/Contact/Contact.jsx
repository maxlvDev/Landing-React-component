import React from "react";
import Counter from "../Counter/Counter";
import './Contact.css'

const Contact = () => {
    return (
        <div className="Contact no_show" id="contact">
            <div className="container">
                  <div className="contact_box">
                      <div className="form_box">
                          <div className="section_title">
                              <h2>Связаться с нами</h2>
                              <p>Пожалуйста, заполните форму ниже, чтобы отправить нам электронное письмо, и мы свяжемся с вами как можно скорее.</p>
                          </div>
                          <form name="send">
                              <div className="name_box">
                               <input className="name" placeholder="Имя"></input>
                               <input className="mail" placeholder="Почта"></input>
                              </div>
                              <div className="input_box">
                                  <textarea placeholder="Пожелания к путешествию" className="control" name="message"></textarea>
                                  <Counter/>
                                  <button type="button" className="but">отправить письмо</button>
                              </div>
                          </form>
                      </div>
                      <div className="contact_col">
                          <div className="contact_item">
                              <h3>Контактная информация</h3>
                              <p>г. Москва, ул.Садовая, д.23</p>
                          </div>
                          <div className="contact_item">
                          <p>+1 123 456 1234</p>
                          </div>
                          <div className="contact_item">
                          <p>info@company.com</p>
                          </div>
                      </div>
                  </div>
                  </div>
                  <div className="icon_row">
                  <div className="row">
                          <ul>
                              <li className="icon_li"> <i className="fa fa-facebook icon" id = 'f' aria-hidden="true"></i></li>
                              <li className="icon_li"><i className="fa fa-telegram icon" id = 'f' aria-hidden="true"></i></li>
                              <li className="icon_li"><i className="fa fa-wikipedia-w icon" id = 'f' aria-hidden="true"></i></li>
                          </ul>
                      </div>
                      </div>
                      
                  <div className="footer">
                  <div className="container">
                      <div className="footer_text">
                            <p>© 2021 Design by Tourist landing page</p>
                      </div>
                  </div>
                  </div>
                  <div className="wind closed" id="wind">
                  <p>Заявка принята!</p>    
                  </div>
                  </div>
    )}


export default Contact