import React from 'react'
import './registration.scss'
import { reduxForm } from 'redux-form'
import RegistrationFormStudents from '../components/myForm/formStudents'
import RegistrationFormOrganization from '../components/myForm/formOrganization'
import { Category } from '../components/myForm/category_selection'
import { setCategory } from '../actions/categoryActions'
import { connect } from 'react-redux'

const RegistrationReduxFormStudents = reduxForm({ form: 'registration' })(
  RegistrationFormStudents
)

const RegistrationReduxFormOrganization = reduxForm({ form: 'registration' })(
  RegistrationFormOrganization
)

class Registration extends React.Component {
  render () {
    const { category, setCategoryAction } = this.props
    const onSubmit = formData => {
      const serialFormData = JSON.stringify(formData)
      localStorage.setItem('Пользователь', serialFormData)
    }

    return (
      <div className="main-container">
        <Category setCategory={setCategoryAction} />
        <div id="envelope" className="envelope">
          {category.category === 'student' && (
            <RegistrationReduxFormStudents onSubmit={onSubmit} />
          )}
          {category.category === 'organization' && (
            <RegistrationReduxFormOrganization onSubmit={onSubmit} />
          )}
        </div>
        <div id="fade" className="black_overlay" />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    category: store.category
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCategoryAction: category => dispatch(setCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
