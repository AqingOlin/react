import React, { useState } from 'react'

function MoneyInput(props) {
  const { title, money, setMoney } = props
  return (
    <>
      {title}：
      <input
        type="text"
        value={money}
        onChange={(event) => {
          setMoney(+event.target.value)
        }}
      />
    </>
  )
}
export default MoneyInput
