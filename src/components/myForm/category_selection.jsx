import React from 'react'
import './form.scss'

let check = 'student'
export class Category extends React.Component {
  onBtnClick = e => {
    const category = e.currentTarget.id

    const elem = document.getElementById(category)
    elem.style.border = '1px solid orange'
    elem.style.color = 'orange'
    const elem2 = document.getElementById(check)
    elem2.style.border = '0px'
    elem2.style.color = 'gray'

    check = category
    this.props.setCategory(category)
  }

  render () {
    return (
      <div className="category">
        <lable onClick={this.onBtnClick} className="categoryItems" id="student">
          Студент
        </lable>

        <lable
          onClick={this.onBtnClick}
          className="categoryItems"
          id="organization"
        >
          Организация
        </lable>
      </div>
    )
  }
}
