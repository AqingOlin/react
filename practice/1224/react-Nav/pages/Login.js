import React from 'react'

function Login(props) {
  const { isAuth, setIsAuth } = props
  return (
    <>
      <h1>會員登入頁面</h1>
      <button
        onClick={() => {
          setIsAuth(true)
        }}
      >
        登入
      </button>
      {isAuth ? '會員登入中,XXX你好' : '未登入'}
    </>
  )
}

export default Login
