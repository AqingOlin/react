import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState } from 'react'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import ProductBaby from './pages/ProductBaby'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <Router>
      <>
        {/*Logo+標頭+導覽頁*/}
        <MyNavbar />

        {/*主內容處*/}
        <MainContent>
          <h1>Link/to</h1>
          <Link to="/">首頁</Link>
          <Link to="/about">關於</Link>
          <Link to="/login">會員登入頁面</Link>
          <Link to="/product/baby">商品-嬰兒</Link>

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
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
