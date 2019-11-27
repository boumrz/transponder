import React from 'react'
import Logo from './assets/img/Layer-5.png'
import './footer.css'
import insta from './assets/img/insta.png'
import vk from './assets/img/vk.png'
import youtube from './assets/img/youtube.png'
import cap from './assets/img/cap.png'
import phone from './assets/img/phone.png'
import address from './assets/img/address.png'

export default class Footer extends React.Component {
  render () {
    return (
      <div className="footer-container">
        <footer>
          <span className="logo">
            <img src={Logo} alt="Logo" />
            <h1>Студенты Москвы</h1>
          </span>
          <span className="social-networks">
            <img src={vk} alt="VK" />
            <img src={insta} alt="INSTA" />
            <img src={youtube} alt="YOUTUBE" />
            <div className="under-social-networks">
              <img className="cap" src={cap} alt="CAP" />
            </div>
          </span>
          <span className="contacts">
            <img src={phone} alt="PHONE" />
            <img src={address} alt="ADDRESS" />
          </span>
        </footer>
      </div>
    )
  }
}
