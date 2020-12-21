import React, { useState } from 'react'

function ButtonOne(props) {
  // one的內部資料(狀態)
  const [oneData, setOneData] = useState('One')
  return (
    <>
      {/*父母->子女：單向傳自己的狀態給父母*/}
      <h1>ButtonOne(appData): {props.appData}</h1>
      {/*子女->子女：利用父母元件傳來的setter函式來傳自己的狀態給父母*/}
      <button onClick={() => props.setOneToTwoData(oneData)}>one</button>
    </>
  )
}
export default ButtonOne
