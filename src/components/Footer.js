function Footer() {
  return (
    <div className="flex flex-col sm:text-sm   bg-footer px-10  h-auto  pt-5 absolute w-full">
      <div className="  grid grid-cols-3 sm:flex-col  sm:h-auto sm:flex  items-center  text-textfooter font-sans   ">
        <div className=" mt-8 sm:flex-col sm:flex ">
          <img src={require('../img/kroppa-footer-logo.png')} />
          <div className="flex text-center sm:flex-col ml-3 mt-8">
            <h3 className="h-auto sm:w-auto  w-24 text-left">
              İçerenköy Mah. Topçu İbrahim Sk. Quick Tower, No:8/10, 34752
              Ataşehir/İstanbul
            </h3>
            <div className=" flex-col sm:my-5 sm:float-left sm:-ml-[235px] sm:w-auto flex ml-4 ">
              <a
                href="tel:+902165809696"
                className=" hover:text-footertextcolor "
              >
                +90 216 580 96 96
              </a>
              <a
                className=" hover:text-footertextcolor"
                href="mailto:info@kroppa.com"
              >
                info@kroppa.com
              </a>
            </div>
          </div>
        </div>
        <div className=" sm:text-xs flex-col sm:gap-x-6 sm:ml-[14px] sm:grid sm:grid-cols-3 flex gap-y-5 mt-6 ml-36 sm:my-5">
          <a className=" hover:text-footertextcolor" href="/welcomepage">
            HOŞ GELDİN
          </a>
          <a
            className=" hover:text-footertextcolor sm:w-48"
            href="/thiscompanies"
          >
            BU MARKALARA
          </a>
          <a className=" hover:text-footertextcolor sm:w-48" href="/myworks">
            ŞU İŞLERİ YAPTIK
          </a>
          <a className=" hover:text-footertextcolor" href="/joinus">
            BİZE KATIL
          </a>
          <a className=" hover:text-footertextcolor sm:w-48" href="/contactus">
            VEYA BİZE ULAŞ
          </a>
        </div>
        <div className="self-end sm:w-auto sm:mt-8 sm:ml-12 md:h-auto -mb-24">
          <a
            href="/messengerbots"
            className=" hover:text-footertextcolor sm:mr-20"
          >
            FACEBOOK MESSENGER BOT
          </a>
          <div className=" gap-x-6 tablet:float-right sm:gap-x-2 flex my-14  ">
            <a
              href="https://facebook.com/KroppaDigital"
              className=" hover:text-footertextcolor"
            >
              FACEBOOK
            </a>
            <a
              href="https://twitter.com/KroppaDigital"
              className=" hover:text-footertextcolor"
            >
              TWITTER
            </a>
            <a
              href="https://www.instagram.com/kroppadigital/"
              className=" hover:text-footertextcolor"
            >
              INSTAGRAM
            </a>
            <a
              href="https://www.linkedin.com/company/11437464/"
              className=" hover:text-footertextcolor"
            >
              LINKEDIN
            </a>
            <a
              href="https://www.youtube.com/channel/UCwZc4Si8UcgYNF1p96Uy_lA"
              className=" hover:text-footertextcolor"
            >
              YOUTUBE
            </a>
          </div>
        </div>
      </div>
      <div className=" border-t opacity-50 border-white w-full mt-14 mb-[60px]  "></div>
    </div>
  )
}
//

export default Footer
