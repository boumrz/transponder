import React from 'react'
import Header from '../header/Header'
import Block from '../block/Block'
import { Link } from 'react-router-dom'
import './main.css'
import first from './assets/img/1-event.png'
import second from './assets/img/2-event.png'
import third from './assets/img/3-event.png'
import firstDiscount from './assets/img/1-discount.png'
import secondDiscount from './assets/img/2-discount.png'
import thirdDiscount from './assets/img/3-discount.png'
import fourDiscount from './assets/img/4-discount.png'
import fiveDiscount from './assets/img/5-discount.png'
import sixDiscount from './assets/img/6-discount.png'
import firstNews from './assets/img/img-news-1.png'
import secondNews from './assets/img/img-news-2.png'
import thirdNews from './assets/img/img-news-3.png'
import Footer from '../footer/Footer'

export default class Main extends React.Component {
  render () {
    return (
      <div className="main-container">
        <div className="up">
          <Header />

          <h1 className="main-h1">БЛИЖАЙШИЕ МЕРОПРИЯТИЯ</h1>
          <div className="up-events">
            <Link to="/event_info">
              {' '}
              <Block src={first} p="Детский лагерь Smart Camp" />{' '}
            </Link>
            <Link to="/event_info">
              {' '}
              <Block
                src={second}
                p="Молодёжный оздоровительный лагерь 'Ямал'"
              />
            </Link>
            <Link to="/event_info">
              {' '}
              <Block
                src={third}
                p="Международный молодежный центр I&Camp 2019 Республика Крым"
              />
            </Link>
          </div>

          <h1 className="main-h1">СКИДКИ</h1>
          <div className="discount">
            <div className="img-discount">
              <img src={firstDiscount} alt="Театр" />
            </div>
            <div className="img-discount">
              <img src={secondDiscount} alt="Театр" />
            </div>
            <div className="img-discount">
              <img src={thirdDiscount} alt="Театр" />
            </div>
            <div className="img-discount">
              <img src={fourDiscount} alt="Театр" />
            </div>
            <div className="img-discount">
              <img src={fiveDiscount} alt="Театр" />
            </div>
            <div className="img-discount">
              <img src={sixDiscount} alt="Театр" />
            </div>
          </div>

          <h1 className="main-h1">НОВОСТИ</h1>
          <div className="news-container">
            <div className="news">
              <div className="img-news-first">
                <img src={firstNews} width="100%" alt="first news" />
              </div>
            </div>
            <div className="news">
              <div className="img-news-second">
                <img src={secondNews} width="100%" alt="first news" />
              </div>
              <div className="discription-news">dqwdqwd</div>
            </div>
            <div className="news">
              <div className="img-news-third">
                <img src={thirdNews} width="100%" alt="first news" />
              </div>
              <div className="discription-news">dsad</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
