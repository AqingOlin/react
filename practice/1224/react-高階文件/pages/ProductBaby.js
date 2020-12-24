import React from 'react'
//高階元件樣式(HOC)，增強文件用
import { withRouter } from 'react-router-dom'

function ProductBaby(props) {
  //需經過高階文件才可會取三大屬性
  console.log(props)
  return (
    <>
      <h1>Product - Baby</h1>
    </>
  )
}

//輸出時加上高階元件(HOC)
export default withRouter(ProductBaby)
