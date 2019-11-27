import React from 'react'
import { Field } from 'redux-form'
import { Input } from './FormsControls/FormsControls'
import { requiredField, validatePasswordCreator } from './validators/validators'

const validatePassCreator = validatePasswordCreator(8)

export default class RegistrationFormStudents extends React.Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-container">
          <div className="form-group ">
            <i className="fa fa-user-circle-o" aria-hidden="true" />
            <p>Имя</p>
            <Field
              name="name"
              placeholder="Имя"
              component={Input}
              validate={[requiredField]}
            />
          </div>
          <div className="form-group ">
            <i className="fa fa-user-circle-o" aria-hidden="true" />
            <p>Фамилия </p>
            <Field
              name="surname"
              placeholder="Фамилия"
              component={Input}
              validate={[requiredField]}
            />
          </div>
          <div className="form-group ">
            <i className="fa fa-user-circle-o" aria-hidden="true" />
            <p>Отчетсво</p>
            <Field
              name="midname"
              placeholder="Отчетсво (если есть)"
              component={Input}
            />
          </div>
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
          <div className="form-group">
            <i className="fa fa-user-date" aria-hidden="true" />
            <p>Дата рождения</p>
            <Field type="date" name="date" component={Input} />
          </div>
          <div className="form-group ">
            <i className="fa fa-envelope-o" aria-hidden="true" />
            <p>ВУЗ </p>
            <Field
              type="text"
              name="university"
              placeholder="ВУЗ"
              component={Input}
            />
          </div>
          <div className="form-group">
            <i className="fa fa-university-date" aria-hidden="true" />
            <p>Год поступления </p>
            <Field
              type="number"
              name="year"
              placeholder="Год поступления"
              min="2000"
              max="2030"
              component={Input}
            />
          </div>
          <div className="form-group ">
            <i className="fa fa-mobile" aria-hidden="true" />
            <p>Телефон </p>
            <Field
              type="tel"
              name="phone"
              placeholder="Телефон"
              component={Input}
            />
          </div>
          <div className="form-group ">
            <i className="fa fa-envelope-o" aria-hidden="true" />
            <p>Социальные сети </p>
            <Field type="text" name="VK" placeholder="ВК" component={Input} />
          </div>
          <div className="form-group ">
            <i className="fa fa-envelope-o" aria-hidden="true" />
            <Field
              type="text"
              name="Instagram"
              placeholder="Instagram"
              component={Input}
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
          <div className="form-group ">
            <i className="fa fa-key" aria-hidden="true" />
            <Field
              type="password"
              name="repeat-password"
              placeholder="Повторите пароль"
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
              validate={[requiredField]}
            />
            <label className="consent" id="consent">
              <a href="#">Я согласен с политикой конфиденциальности </a>
            </label>
          </div>

          <input id="btn" type="submit" value="Зарегистрироваться" />
        </div>
      </form>
    )
  }
}
