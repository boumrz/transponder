import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import AddEvent from '../components/pageEvents/AddEvent'
import '../components/pageEvents/events.scss'
import { connect } from 'react-redux'
import {
  setCategoryEvents,
  getEvents,
  chooseEvent,
} from '../actions/eventsAction'
import Event from '../components/pageEvents/event'

class Events extends React.Component {
  render() {
    const { events, getEvents, chooseEventAction } = this.props
    if (events.isFetching === false && events.events == 0) {
      getEvents()
    }

    return (
      <div className="">
        <div className="main">
          <Header />

          <div class="site-container archive-categories-list">
            <div
              className="archive-category"
              id="volunteer"
              onClick={() => {
                const category = 'volunteer'
                return this.props.setCategoryEvents(category)
              }}
            >
              {' '}
              <div class="archive-category-img volunteering"></div>
              <div className="archive-category-title"> Волонтёрство </div>
            </div>
            <div
              className="archive-category"
              id="culture"
              onClick={() => {
                const category = 'culture'
                return this.props.setCategoryEvents(category)
              }}
            >
              {' '}
              <div className="archive-category-img culture"></div>
              <div className="archive-category-title"> Культура </div>
            </div>
            <div
              className="archive-category"
              id="education"
              onClick={() => {
                const category = 'education'
                return this.props.setCategoryEvents(category)
              }}
            >
              {' '}
              <div className="archive-category-img education"></div>
              <div className="archive-category-title"> Образование </div>
            </div>
            <div
              className="archive-category"
              id="entertainment"
              onClick={() => {
                const category = 'entertainment'
                return this.props.setCategoryEvents(category)
              }}
            >
              {' '}
              <div className="archive-category-img entertainment"></div>
              <div className="archive-category-title"> Развлечения </div>
            </div>
            <div
              className="archive-category"
              id="sport"
              onClick={() => {
                const category = 'sport'
                return this.props.setCategoryEvents(category)
              }}
            >
              {' '}
              <div className="archive-category-img sport"></div>
              <div className="archive-category-title"> Спорт </div>
            </div>
          </div>
          <div className="up-events">
            <Event events={events} chooseEvent={chooseEventAction} />
          </div>
          {
            localStorage.getItem('boumrz@gmail.com') != null ? <AddEvent/> : null
          }
        </div>
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
    setCategoryEvents: eventsCategory =>
      dispatch(setCategoryEvents(eventsCategory)),
    getEvents: () => dispatch(getEvents()),
    chooseEventAction: event => dispatch(chooseEvent(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events)
