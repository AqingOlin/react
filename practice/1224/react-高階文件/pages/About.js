import React from 'react'

function About(props) {
  const { isAuth } = props
  return (
    <>
      <h1>About</h1>
      {isAuth ? '會員登入中,XXX你好' : '未登入'}
    </>
  )
}

export default About
