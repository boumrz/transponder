import React from 'react'
import Header from '../header/Header'
import Block from '../block/Block'
import { Link } from 'react-router-dom'
import './events.scss'
import Footer from '../footer/Footer'
import first from '../main/assets/img/1-event.png'
import second from '../main/assets/img/2-event.png'
import third from '../main/assets/img/3-event.png'

export default class Events extends React.Component {
  render () {
    return (
      <div className="">
        <div className="main">
          <Header />

          <div class="site-container archive-categories-list">
            <Link to="" class="archive-category">
              {' '}
              <div class="archive-category-img volunteering"></div>
              <div className="archive-category-title"> Волонтёрство </div>
            </Link>
            <Link to="" className="archive-category">
              {' '}
              <div className="archive-category-img culture"></div>
              <div className="archive-category-title"> Культура </div>
            </Link>
            <Link to="" className="archive-category">
              {' '}
              <div className="archive-category-img education"></div>
              <div className="archive-category-title"> Образование </div>
            </Link>
            <Link to="" className="archive-category">
              {' '}
              <div className="archive-category-img entertainment"></div>
              <div className="archive-category-title"> Развлечения </div>
            </Link>
            <Link to="" className="archive-category">
              {' '}
              <div className="archive-category-img sport"></div>
              <div className="archive-category-title"> Спорт </div>
            </Link>
          </div>
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
        </div>

        <Footer />
      </div>
    )
  }
}
