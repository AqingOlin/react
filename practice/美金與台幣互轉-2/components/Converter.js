import React, { useState } from 'react'
import MoneyInput from './MoneyInput'

function Converter(props) {
  //用於輸入值使用的狀態
  const [twd, setTwd] = useState('0')
  const [usd, setUsd] = useState('0')

  const usd2Twd = (usd) => (28.53 * usd).toFixed(0)
  const twd2Usd = (twd) => (twd / 28.53).toFixed(2)

  return (
    <>
      <h1>美金-新台幣互轉應用程式</h1>
      {/*可控制選單元素範例：值(value)對應狀態值(inputValue)，更動方法(onChange)對應狀態設定方法(setInputValue)*/}
      <MoneyInput
        title="新台幣"
        money={twd}
        setMoney={(newValue) => {
          setTwd(newValue)
          setUsd(twd2Usd(newValue))
        }}
      />
      <hr />
      <MoneyInput
        title="美金"
        money={usd}
        setMoney={(newValue) => {
          setUsd(newValue)
          setTwd(usd2Twd(newValue))
        }}
      />
      {/* 新台幣：
      <input
        type="text"
        value={twd}
        onChange={(event) => {
          const newValue = +event.target.value
          //網頁上輸入為字串，要先轉數字類型
          setTwd(newValue)
          setUsd(twd2Usd(newValue))
        }}
      />
      <hr />
      美金：
      <input
        type="text"
        value={usd}
        onChange={(event) => {
          //先得到將要變動的值。網頁上輸入為字串，要先轉數字類型
          const newValue = +event.target.value
          //設定美金的值(文字輸入框)
          setUsd(newValue)
          //設定轉換後的新台幣
          setTwd(usd2Twd(newValue))
        }}
      /> */}
    </>
  )
}
export default Converter
