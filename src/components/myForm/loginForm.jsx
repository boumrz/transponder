import React from 'react'
import { Field } from 'redux-form'
import { Input } from './FormsControls/FormsControls'
import { requiredField, validatePasswordCreator } from './validators/validators'

const validatePassCreator = validatePasswordCreator(8)

export default class LoginForm extends React.Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-container">
          <div className="form-group ">
            <i className="fa fa-envelope-o" aria-hidden="true" />
            <p>Электронная почта </p>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              component={Input}
              validate={[requiredField]}
            />
          </div>

          <div className="form-group ">
            <i className="fa fa-key" aria-hidden="true" />
            <p>Пароль </p>
            <Field
              type="password"
              name="password"
              placeholder="Пароль"
              component={Input}
              validate={[requiredField, validatePassCreator]}
            />
          </div>

          <div className="r">
            {' '}
            <Field
              type="checkbox"
              name="consent"
              className="consent"
              component={Input}
            />
            <label className="consent" id="consent">
              Запомнить меня{' '}
            </label>
          </div>

          <input id="btn" type="submit" value="Войти" />
        </div>
      </form>
    )
  }
}
