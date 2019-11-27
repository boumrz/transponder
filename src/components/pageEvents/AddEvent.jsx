import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import './addEvent.css'
import AddEventsPage from '../addEventsPage/AddEventsPage'

class AddEvent extends React.Component {
  handleChangeAddEvents = () => {
    this.props.history.push('/events_add')
  }

  render () {
    return (
      <div className="button-container">
        <Switch>
          <Route path="/events_add" component={AddEventsPage} />
          <Route
            path="/events"
            render={() => (
              <React.Fragment>
                <div onClick={this.handleChangeAddEvents}>
                  <button className="button-add-event">
                    Добавить мероприятие
                  </button>
                </div>
              </React.Fragment>
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(AddEvent)
