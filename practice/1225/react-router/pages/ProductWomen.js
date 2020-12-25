import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function ProductWomen(props) {
  //需經過高階文件才可會取三大屬性
  const { isAuth } = props
  if (isAuth === false) {
    return (
      <>
        <h1>此頁面限登入會員後觀看</h1>
        <Link to="/login">回會員登入</Link>
      </>
    )
  }
  return (
    <>
      <h1>Product - Women(會員登入後)</h1>
    </>
  )
}

//輸出時加上高階元件(HOC)
export default withRouter(ProductWomen)
