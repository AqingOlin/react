import React from 'react'
import { withRouter } from 'react-router-dom'

function ProductWomen(props) {
  //需經過高階文件才可會取三大屬性
  return (
    <>
      <h1>Product - Women</h1>
    </>
  )
}

//輸出時加上高階元件(HOC)
export default withRouter(ProductWomen)
