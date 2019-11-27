import React from 'react'
import './header.scss'
import Logo from '../../components/assets/images/Logo.png'
import { Link, Route, Switch, withRouter } from 'react-router-dom'
import Registration from '../../containers/RegistrationReduxForm'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isFormOn: false }
  }

  handleClickRegistration = () => {
    this.props.history.push('/registration')
  }

  handleClickLogin = () => {
    this.props.history.push('/login')
  }

  render () {
    return (
      <div className="header-container">
        <header>
          <Link to="/">
            <img src={Logo} className="Img" alt="logo" />
          </Link>
          <Link to="/news">
            {' '}
            <div className="header_li li"> НОВОСТИ </div>{' '}
          </Link>
          <Link to="/events">
            {' '}
            <div className="header_li li"> МЕРОПРИЯТИЯ </div>{' '}
          </Link>
          <Link to="/sale">
            {' '}
            <div className="header_li li"> СКИДКИ </div>{' '}
          </Link>
          <div className="button-container">
            <Switch>
              <Route path="/registration" component={Registration} />
              <Route
                path="/"
                render={() => (
                  <React.Fragment>
                    <div onClick={this.handleClickLogin}>
                      <button className="signIn">Войти</button>
                    </div>
                    <div onClick={this.handleClickRegistration}>
                      <button className="registration">Регистрация</button>
                    </div>
                  </React.Fragment>
                )}
              />
            </Switch>
          </div>
        </header>
      </div>
    )
  }
}

export default withRouter(Header)
