import React, { useState } from 'react'

function Converter(props) {
  //用於輸入值使用的狀態
  const [twd, setTwd] = useState('')
  const [usd, setUsd] = useState('')

  return (
    <>
      <h1>美金-新台幣互轉應用程式</h1>
      {/*可控制選單元素範例：值(value)對應狀態值(inputValue)，更動方法(onChange)對應狀態設定方法(setInputValue)*/}
      新台幣：
      <input
        type="text"
        value={twd}
        onChange={(event) => {
          setTwd(event.target.value)
        }}
      />
      <hr />
      美金：
      <input
        type="text"
        value={usd}
        onChange={(event) => {
          setUsd(event.target.value)
        }}
      />
    </>
  )
}
export default Converter
