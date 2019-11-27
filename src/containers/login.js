import React from 'react'
import { reduxForm } from 'redux-form'
import loginForm from '../components/myForm/loginForm'

const LoginFormRedux = reduxForm({ form: 'login' })(loginForm)

export default class Login extends React.Component {
  render () {
    const onSubmit = (formData) => {
      let serialFormData = JSON.stringify(formData);
      localStorage.setItem(`${formData.email}`, serialFormData);
    };

    return (
      <div className="main-container">
        <div id="envelope" className="envelope">
          <b> Войти </b>
          <LoginFormRedux onSubmit={onSubmit} />
        </div>
      </div>
    )
  }
}
