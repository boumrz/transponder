import React from 'react'
import { Field } from 'redux-form'
import { Input } from './FormsControls/FormsControls'
import { requiredField, validatePasswordCreator } from './validators/validators'

const validatePassCreator = validatePasswordCreator(8)

export default class RegistrationFormOrganization extends React.Component {
  render () {
    return (
      <form
        enctype="multipart/form-data"
        method="post"
        onSubmit={this.props.handleSubmit}
      >
        <div className="form-container">
          <div className="form-group ">
            <i className="fa fa-user-circle-o" aria-hidden="true" />
            <p>Название организации</p>
            <Field
              name="nameOrganization"
              placeholder="Название организации"
              component={Input}
              validate={[requiredField]}
            />
          </div>
          <div className="form-group ">
            <i className="fa fa-user-circle-o" aria-hidden="true" />
            <p> Слоган</p>
            <Field name="surname" placeholder="слоган" component={Input} />
          </div>
          <div className="form-group ">
            <i className="fa fa-user-circle-o" aria-hidden="true" />
            <p>Описание организации</p>
            <Field
              name="midname"
              className="description"
              placeholder="описание организации"
              component={Input}
            />
          </div>

          <div className="form-group">
            <i className="fa fa-user-date" aria-hidden="true" />
            <p>Логотип</p>
            <Field type="file" accept="image/*" name="logo" component={Input} />
          </div>
          <div className="form-group ">
            <i className="fa fa-envelope-o" aria-hidden="true" />
            <p>Сайт </p>
            <Field
              type="text"
              name="university"
              placeholder="ВУЗ"
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

          <input id="btn" type="submit" value="Зарегистрировать" />
        </div>
      </form>
    )
  }
}
