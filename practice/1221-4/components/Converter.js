import React, { useState } from 'react'

function Converter(props) {
  //用於輸入值使用的狀態
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      {/*可控制選單元素範例：值對應狀態值，更動方法對應狀態設定方法*/}
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
      />
    </>
  )
}
export default Converter
