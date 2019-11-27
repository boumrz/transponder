import React from 'react'
import './BlockEvent.scss'

class BlockEvent extends React.Component {
  render () {
    const eventDay = this.props.date.replace(/(\d+).(\d+).(\d+)/, '$3')
    const eventMonth = Number(this.props.date.replace(/(\d+).(\d+).(\d+)/, '$2'))
    const months = [
      'Jan',
      'Feb',
      'Мar',
      'Аpr',
      'Мay',
      'Jun',
      'Jul',
      'Аug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
    return (
      <div className="block1">
        <div className="event-date">
          <p>{eventDay}</p>
          <p>{months[eventMonth - 1]}</p>
        </div>
        <img src={this.props.src} />
        <p>{this.props.p}</p>
      </div>
    )
  }
}

export default BlockEvent
