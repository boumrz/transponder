import React from 'react'
import Block from '../blockEvent/BlockEvent'
import { Link } from 'react-router-dom'

function Event (props) {
  const arr = props.events.events.sort((a, b) => (a.date > b.date ? 1 : -1))
  return arr.map(event => {
    if (
      props.events.eventsCategory === event.category ||
      props.events.eventsCategory === 'all'
    ) {
      return (
        <Link
          to="/event_info"
          onClick={() => {
            return props.chooseEvent(event)
          }}
        >
          {' '}
          <Block src={event.link} p={event.title} date={event.date} />{' '}
        </Link>
      )
    }
  })
}

export default Event
