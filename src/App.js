import Footer from 'components/Footer'
import Header from 'components/Header'
import ContactUs from 'pages/ContactUs'
import JoinUs from 'pages/JoinUs'
import MessengerBots from 'pages/MessengerBots'
import MyWorks from 'pages/MyWorks'
import ThisCompanies from 'pages/ThisCompanies'
import WelcomePage from 'pages/WelcomePage'
import worksData from '../src/api/works.json'

import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Pages from 'components/ui/Pages'

export default function App({ Clck }) {
  const [product, setProduct] = useState([])
  useEffect(() => {
    setProduct(worksData)
  }, [])
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/thiscompanies">
            <ThisCompanies />
          </Route>
          <Route path="/welcomepage">
            <WelcomePage />
          </Route>
          <Route path="/myworks">
            <MyWorks />
          </Route>
          <Route path="/joinus">
            <JoinUs />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/messengerbots">
            <MessengerBots />
          </Route>

          {product.length &&
            product.map((product, index) => (
              <Route path={`/projeler/${product.url}`}>
                <Pages key={index} product={product} />
              </Route>
            ))}
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}
