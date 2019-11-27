import React from 'react'
import { Field } from 'redux-form'
import { Input } from '../myForm/FormsControls/FormsControls'
import { requiredField } from '../myForm/validators/validators'
import './addEventsPage.css'


class AddEventsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        organizer: '',
        link: '',
        sale: '',
        date: '',
        time: '',
        description: '',
        phone: '',
        address: '',
        price: '',
        isFormValid: false
    }
  }

  handleTitle = (e) => {
      this.setState({title: e.target.value});
  }
  handleOrganizer = (e) => {
    this.setState({organizer: e.target.value});
  }
  handleLink = (e) => {
    this.setState({link: e.target.value});
  }
  handleSale = (e) => {
      this.setState({sale: e.target.value})
  }
  handleDate = (e) => {
      this.setState({date: e.target.value});
  }
  handleTime = (e) => {
    this.setState({time: e.target.value})
  }
  handleDescription = (e) => {
      this.setState({description: e.target.value});
  }
  handleAddress = (e) => {
      this.setState({address: e.target.value});
  }
  handlePrice = (e) => {
      this.setState({price: e.target.value})
  }
  handleIsFormValid = (e) => {
      this.setState({
          isFormValid: this.state.title && this.state.organizer && this.state.link && this.state.sale && this.state.date && this.state.time &&
                      this.state.description && this.state.address && this.state.price
      })
  }

  render () {
    return (
      <div className="form-add-events-container">
        <form onChange={this.handleIsFormValid} method="post">
          <div aria-hidden="true">
            <Field
              name="title"
              component={Input}
              type="text"
              placeholder="Название мероприятия"
              validate={[requiredField]}
              onChange={this.handleTitle}
            />
          </div>
          <div aria-hidden="true">
            <Field
              name="organizer"
              component={Input}
              type="text"
              placeholder="Организатор"
              validate={[requiredField]}
              onChange={this.handleOrganizer}
            />
          </div>

          <div aria-hidden="true">
            <Field
              name="link"
              component={Input}
              type="text"
              placeholder="Ссылка на афишу"
              validate={[requiredField]}
              onChange={this.handleLink}
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
              onChange={this.handleDate}
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
              onChange={this.handleAddress}
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
              onChange={this.handleTime}
            />
          </div>

          <div aria-hidden="true">
            <Field
              name="description"
              component={Input}
              type="text"
              placeholder="краткое описание мероприятия"
              validate={[requiredField]}
              onChange={this.handleDescription}
            />
          </div>
          <Field
            name="price"
            component={Input}
            type="text"
            placeholder="Цена"
            validate={[requiredField]}
            onChange={this.handlePrice}
          />

          <div aria-hidden="true">
            <Field
              name="sale"
              component={Input}
              type="text"
              placeholder="Скидка для студентов"
              validate={[requiredField]}
              onChange={this.handleSale}
            />
          </div>

          <input disabled={!this.state.isFormValid} id="btn" type="submit" value="Создать мероприятие" />
        </form>
      </div>
    )
  }
}

export default AddEventsPage
