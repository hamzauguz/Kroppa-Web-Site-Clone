import React from 'react'

export default function Companies({ product }) {
  return (
    <div className="">
      <img className=" sm:m-auto xl:m-auto" src={product.image} />
    </div>
  )
}
