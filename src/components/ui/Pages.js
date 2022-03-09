import React, { useState } from 'react'

export default function Pages({ product, classh }) {
  return (
    <div>
      <div
        className={
          ' bg-fixed z-10  top-0 left-0 w-screen transition-all duration-200 bg-cover h-screen'
        }
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <div className="">
        <div className=" mx-7 flex items-center justify-between flex-row  mt-16">
          <div className=" flex flex-col text-3xl font-medium opacity-70">
            <h3>{product.title1}</h3>
            <h1>{product.title2}</h1>
          </div>
          <div className="flex flex-col text-right text-xl font-normal opacity-80">
            <span>{product.date}</span>
            <a className=" hover:text-footertextcolor" href={product.title3}>
              {product.title3}
            </a>
          </div>
        </div>
        <div className="mx-7 border-t opacity-50 border-black w-full mt-6 mb-[30px]  "></div>
        <div className="mx-7 text-xl mb-16 text-opacity-90 font-normal">
          <a>
            {product.desc1} <br />
            <br /> {product.desc2}
          </a>
        </div>
        <div className=" w-full h-auto items-center flex bg-backgroundyoutube ">
          <iframe
            src={product.youtube}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className={
              product.info === 'var' ? ' w-[800px] h-[480px] m-auto my-16' : ''
            }
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
