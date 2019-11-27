import React from 'react'
import { Field } from 'redux-form'
import { Input } from '../myForm/FormsControls/FormsControls'
import { requiredField } from '../myForm/validators/validators'
import './addEventsPage.css'

class ChangeEvent extends React.Component {
  render () {
    return (
      <div className="form-add-events-container">
        <form onSubmit={this.props.submit} method="put">
          <div aria-hidden="true">
            <Field name="id" value={this.props.id} component="input" />
            <Field
              name="title"
              component={Input}
              type="text"
              placeholder="Название мероприятия"
              validate={[requiredField]}
            />
          </div>
          <div aria-hidden="true">
            <Field
              name="organizer"
              component={Input}
              type="text"
              placeholder="Организатор"
              validate={[requiredField]}
            />
          </div>

          <div aria-hidden="true">
            <Field
              name="link"
              component={Input}
              type="text"
              placeholder="Ссылка на афишу"
              validate={[requiredField]}
            />
          </div>

          <div aria-hidden="true">
            <label> Категория: </label>
            <Field
              name="category"
              component="select"
              validate={[requiredField]}
            >
              <option value="volunteer">Волонтёрство </option>
              <option value="culture">Культура</option>
              <option value="education">Образование</option>
              <option value="entertainment">Развлечения</option>
              <option value="sport">Спорт</option>
            </Field>
          </div>

          <div aria-hidden="true">
            <Field
              name="date"
              component={Input}
              type="date"
              placeholder="Дата мероприятия"
              validate={[requiredField]}
              value="10.12.2019"
            />
          </div>
          <div aria-hidden="true"></div>
          <div aria-hidden="true">
            <Field
              name="address"
              component={Input}
              type="text"
              placeholder="Адрес"
              validate={[requiredField]}
              value="Красная Пресня дом 4"
            />
          </div>
          <label>Время начала мероприятия</label>
          <div aria-hidden="true">
            <Field
              name="time"
              component={Input}
              type="time"
              placeholder="Время начала мероприятия:"
              validate={[requiredField]}
            />
          </div>

          <div aria-hidden="true">
            <Field
              name="description"
              component={Input}
              type="text"
              placeholder="краткое описание мероприятия"
              validate={[requiredField]}
            />
          </div>
          <Field
            name="price"
            component={Input}
            type="text"
            placeholder="Цена"
            validate={[requiredField]}
          />

          <div aria-hidden="true">
            <Field
              name="sale"
              component={Input}
              type="text"
              placeholder="Скидка для студентов"
              validate={[requiredField]}
            />
          </div>

          <input type="submit" value="Отправить" onClick={this.props.submit}/>
        </form>
      </div>
    )
  }
}

export default ChangeEvent
