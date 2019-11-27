import React from 'react'
import Header from '../header/Header'
import Block from '../block/Block'
import { Link } from 'react-router-dom'
import './sale.scss'
import Footer from '../footer/Footer'
import first from '../pageMain/assets/img/1-event.png'
import second from '../pageMain/assets/img/2-event.png'
import third from '../pageMain/assets/img/3-event.png'

export default class Sale extends React.Component {
  render () {
    return (
      <div className="">
        <div className="main">
          <Header />

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
