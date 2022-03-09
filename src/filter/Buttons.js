import React from 'react'
import Data from './Data'
import { Link, useLocation } from 'react-router-dom'

const Buttons = ({ filterItem, setItem, menuItems }) => {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')
  return (
    <>
      <div className="d-flex justify-content-center mb-10 ml-5 ">
        <button
          className="btn-dark text-header  p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(Data)}
        >
          TÜM PROJELER
        </button>
        {menuItems.map((Val, id) => {
          return (
            <button
              className="btn-dark text-header p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default Buttons
