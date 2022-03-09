import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header({ Clck }) {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')
  const [navbarOpen, setNavbarOpen] = useState(Clck)

  return (
    <div>
      <div
        className={
          navbarOpen
            ? ' bg-purple-500 invisible'
            : '  sm:px-4  flex  justify-between  pt-12  px-10 pb-20'
        }
      >
        <div className=" flex">
          <a href="/welcomepage">
            <img src={require('../img/kroppa-logo.png')} />
          </a>
          <div className=" items-center  flex lg:invisible gap-x-8 bg:ml-[350px] ">
            <a
              href="/welcomepage"
              className={
                splitLocation[1] === 'welcomepage'
                  ? 'text-red-500'
                  : 'hover:text-hoverT font-sans text-basetext-header'
              }
            >
              HOŞ GELDİN
            </a>
            <a
              href="/thiscompanies"
              className={
                splitLocation[1] === 'thiscompanies'
                  ? ' text-red-500'
                  : 'hover:text-hoverT font-sans text-basetext-header'
              }
            >
              BU MARKALARA
            </a>
            <a
              href="/myworks"
              className={
                splitLocation[1] === 'myworks'
                  ? ' text-red-500'
                  : 'hover:text-hoverT font-sans text-basetext-header'
              }
            >
              ŞU İŞLERİ YAPTIK
            </a>
            <a
              href="/joinus"
              className={
                splitLocation[1] === 'joinus'
                  ? ' text-red-500'
                  : 'hover:text-hoverT font-sans text-basetext-header'
              }
            >
              BİZE KATIL
            </a>
            <a
              href="/contactus"
              className={
                splitLocation[1] === 'contactus'
                  ? ' text-red-500'
                  : 'hover:text-hoverT font-sans text-basetext-header '
              }
            >
              VEYA BİZE ULAŞ
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={() => setNavbarOpen(!navbarOpen)}
        className=" bg:flex bg:invisible lg:float-right -mt-20 mr-2 text-3xl w-auto h-auto"
      >
        X
      </button>
      <div
        className={
          ' flex-col items-center' +
          (navbarOpen
            ? ' flex items-center bg:hidden bg-purple-500 h-[400px] '
            : ' hidden')
        }
      >
        <a
          href="/welcomepage"
          className={
            splitLocation[1] === 'welcomepage'
              ? 'text-red-500'
              : 'hover:text-hoverT font-sans text-basetext-header'
          }
        >
          HOŞ GELDİN
        </a>
        <a
          href="/thiscompanies"
          className={
            splitLocation[1] === 'thiscompanies'
              ? ' text-red-500'
              : 'hover:text-hoverT font-sans text-basetext-header'
          }
        >
          BU MARKALARA
        </a>
        <a
          href="/myworks"
          className={
            splitLocation[1] === 'myworks'
              ? ' text-red-500'
              : 'hover:text-hoverT font-sans text-basetext-header'
          }
        >
          ŞU İŞLERİ YAPTIK
        </a>
        <a
          href="/joinus"
          className={
            splitLocation[1] === 'joinus'
              ? ' text-red-500'
              : 'hover:text-hoverT font-sans text-basetext-header'
          }
        >
          BİZE KATIL
        </a>
        <a
          href="/contactus"
          className={
            splitLocation[1] === 'contactus'
              ? ' text-red-500'
              : 'hover:text-hoverT font-sans text-basetext-header '
          }
        >
          VEYA BİZE ULAŞ
        </a>
      </div>
    </div>
  )
}
export default Header
