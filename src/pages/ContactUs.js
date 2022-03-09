import React, { useEffect, useState } from 'react'
import ReactMapGL from 'react-map-gl'

function ContactUs() {
  return (
    <div className=" flex flex-col mx-10 ">
      <img src={require('../img/zorundaydim.jpg')} />
      <div className=" flex items-center justify-between mt-10 mb-24 sm:flex-col ">
        <div className=" flex flex-col sm:mr-56">
          <a className=" font-bold text-base">E-MAIL</a>
          <a>info@kroppa.com</a>
        </div>
        <div className=" flex flex-col sm:ml-12">
          <a className=" font-bold text-base ">ADRES</a>
          <a className="w-[400px] h-auto">
            İçerenköy Mah. Topçu İbrahim Sk. Quick Tower, No:8/10, 34752
            Ataşehir/İstanbul
          </a>
        </div>
        <div className=" flex flex-col text-right sm:text-left sm:mr-52 ">
          <a className=" font-bold text-base">TELEFON</a>
          <a className=" w-36">+90 216 580 96 96</a>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
