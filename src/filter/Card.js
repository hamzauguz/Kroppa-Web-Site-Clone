import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
  return (
    <div className="flex flex-wrap items-center ">
      {item.map((Val) => {
        return (
          <div
            className={
              Val.size === 2
                ? ' m-auto px-3 w-1/2  '
                : 'w-1/4 px-4 m-auto sm:w-1/2 '
            }
            key={Val.id}
          >
            <div className="  hover:text-footertextcolor group   ">
              <Link
                to={{
                  pathname: `/projeler/${Val.url}`,
                  state: `${Val.title1}`,
                }}
              >
                <div>
                  <img
                    className=" h-[300px] w-[700px] object-cover hover:opacity-60 hover:bg-opacity-50 transform transition duration-500 hover:scale-90  "
                    src={Val.image}
                  />
                </div>
                <div className=" flex flex-col text-lg font-semibold opacity-70 mb-6 mt-2">
                  <h3 className="">{Val.title1}</h3>
                  <h2 className=" -mt-2">{Val.title2}</h2>
                </div>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card
