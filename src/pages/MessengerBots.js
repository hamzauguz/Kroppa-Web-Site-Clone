function MessengerBots() {
  return (
    <div className=" h-auto relative text-center mx-6">
      <img className="m-auto " src={require('../img/bot.png')} />
      <h4 className=" text-black text-base font-medium mb-20 mt-10">
        Hızlı entegre edilebilir ve genişletilebilir Facebook Messenger
        altyapımız ile markanıza akıllı bot çözümleri.
      </h4>
      <div className=" mx-16">
        <a className=" font-medium opacity-70 text-3xl whitespace-pre-line ">
          Kroppa Facebook Messenger Bot altyapımızı kullanarak geliştirdiğimiz
          örnek projeler.
        </a>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8  sm:flex sm:flex-col sm:items-center sm:divide-dashed ">
        <div>
          <a href="https://m.me/BekoNederlandWitgoed/">
            <img src={require('../img/botimg/beko.png')} className="mb-4" />
          </a>
          <a>Beko Hollanda Messenger Bot</a>
        </div>
        <div>
          <a href="https://m.me/etstur">
            <img src={require('../img/botimg/ets.png')} className="mb-4" />
          </a>
          <a>Etstur / Etsbot</a>
        </div>
        <div>
          <a href="https://m.me/mercedesbenzticari">
            <img src={require('../img/botimg/merco.png')} className="mb-4" />
          </a>
          <a>Mercedes Benz</a>
        </div>
        <div>
          <a href="https://m.me/rahatgelecek">
            <img src={require('../img/botimg/vakif.png')} className="mb-4" />
          </a>
          <a>Vakıf Emeklilik / Bay Bilen</a>
        </div>
      </div>
      <div className="mt-10">
        <a className=" font-medium opacity-70  text-3xl whitespace-pre-line ">
          Messenger Bot altyapımız ile ilgili daha fazla bilgi almak için
          iletişime geçin.
        </a>
      </div>
      <div className=" mb-20 mt-6 text-2xl font-medium sm:flex sm:flex-col">
        <a
          href="mailto:info@kroppa.com.tr"
          className=" mr-5  hover:text-footertextcolor "
        >
          info@kroppa.com.tr
        </a>
        <a className=" sm:invisible">|</a>
        <a
          className="hover:text-footertextcolor ml-5 sm:mr-14"
          href="phone:+90 216 580 9696"
        >
          +90 216 580 9696
        </a>
      </div>
    </div>
  )
}
export default MessengerBots
