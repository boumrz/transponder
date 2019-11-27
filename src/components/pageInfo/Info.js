import React from 'react'
import './Info.scss'
import { Link } from 'react-router-dom'

class Info extends React.Component {
  render () {
    const { event, deleteEvent } = this.props
    const link = '/delete/' + event.id
    if (event != 0) {
      return (
        <div className="info">
          <h2 className="H2"> {event.title} </h2>
          <div className="content-info">
            <div className=" imgInfo">
              <img className="imgInfo" src={event.link} />
            </div>
            <div className="content-text-info">
              <h3>Организатор</h3>
              <p> {event.organizer} </p>
              <h3>Дата</h3>
              <p> {event.date}</p>
              <h3>Время проведения</h3>
              <p> {event.time}</p>
              <h3>Адресс</h3>
              <p> {event.address}</p>
              <h3>Цена</h3>
              <p> {event.price}</p>
              <h3>Описание мероприятия</h3>
              <p> {event.description}</p>
              <Link to="change_event">
                <button className="btn_see1">Изменить</button>
              </Link>

              <Link
                to={link}
                onClick={() => {
                  return deleteEvent(event.id)
                }}
              >
                <button className="btn_see">Удалить</button>
              </Link>
            </div>
          </div>
        </div>
      )
    } else return <h2 className="H">Нет информации о мероприятии :( </h2>
  }
}

export default Info
