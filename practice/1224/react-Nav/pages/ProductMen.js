import React from 'react'
import { withRouter } from 'react-router-dom'

function ProductMen(props) {
  //需經過高階文件才可會取三大屬性
  return (
    <>
      <h1>Product - Men</h1>
    </>
  )
}

//輸出時加上高階元件(HOC)
export default withRouter(ProductMen)
