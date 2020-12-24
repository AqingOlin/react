import React from 'react'

function Home(props) {
  const { isAuth } = props
  return (
    <>
      <h1>Home</h1>
      {isAuth ? '會員登入中,XXX你好' : '未登入'}
    </>
  )
}

export default Home
