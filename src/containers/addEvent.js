import React from 'react'
import { reduxForm } from 'redux-form'
import addEventsPage from '../components/addEventsPage/AddEventsPage'

const AddEventsPage = reduxForm({ form: 'event' })(addEventsPage)

export default class Event extends React.Component {
  render () {
    const submit = formData =>
      new Promise((resolve, reject) => {
        fetch('/events/events_add', {
          method: 'post',
          body: JSON.stringify(formData)
        })
          .then(res => res.json())
          .then(res => {
            if (res.hasOwnProperty('errors')) {
              reject(res.errors)
            } else {
              resolve(res.data)
            }
          })
      })

    return (
      <div className="main-container">
        <div id="envelope" className="envelope">
          <b> Добавить мероприятие </b>

          <AddEventsPage onSubmit={submit} />
        </div>
      </div>
    )
  }
}
