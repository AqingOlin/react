import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState } from 'react'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import ProductBaby from './pages/ProductBaby'
import ProductMen from './pages/ProductMen'
import ProductWomen from './pages/ProductWomen'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <Router>
      <>
        {/*Logo+標頭+導覽頁*/}
        <MyNavbar />

        {/*主內容處*/}
        <MainContent>
          {/*以下為路由*/}
          <Switch>
            <Route path="/about">
              <About isAuth={isAuth} />
            </Route>
            <Route path="/login">
              <Login isAuth={isAuth} setIsAuth={setIsAuth} />
            </Route>
            <Route exact path="/">
              <Home isAuth={isAuth} />
            </Route>
            <Route path="/product/baby">
              <ProductBaby />
            </Route>
            <Route path="/product/men">
              <ProductMen />
            </Route>
            <Route path="/product/women">
              <ProductWomen />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
