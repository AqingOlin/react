import React, { useState } from 'react'

function ButtonTwo(props) {
  const [twoData, setTwoData] = useState('Two')
  return (
    <>
      <h1>ButtonTwo:</h1>
      <button onClick={() => props.setChildData(twoData)}>two</button>
    </>
  )
}
export default ButtonTwo
