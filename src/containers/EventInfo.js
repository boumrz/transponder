import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { connect } from 'react-redux'
import { deleteEvent } from '../actions/eventsAction'
import EventInfo from '../components/pageInfo/Info'

class EventsInfo extends React.Component {
  render () {
    const { events, deleteEventAction } = this.props

    return (
      <div className="">
        <Header />

        <EventInfo event={events.event} deleteEvent={deleteEventAction} />

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    events: store.events
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteEventAction: id => dispatch(deleteEvent(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsInfo)
