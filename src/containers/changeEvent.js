import React from 'react'
import { reduxForm } from 'redux-form'
import changeEventsPage from '../components/addEventsPage/ChangeEvent'
import { connect } from 'react-redux'

const ChangeEventsPage = reduxForm({ form: 'eventChange' })(changeEventsPage)

class eventChange extends React.Component {
  render () {
    const submit = formData =>
      new Promise((resolve, reject) => {
        fetch('/events/change_event', {
          method: 'put',
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
          <b> Обновить мероприятие </b>

          <ChangeEventsPage onSubmit={submit} id={this.props.events.event.id} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    events: store.events
  }
}

export default connect(mapStateToProps)(eventChange)
