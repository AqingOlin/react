import React, { useState } from 'react'

function ButtonTwo(props) {
  return (
    <>
      <button onClick={() => props.setLife(true)}>復活吧!!</button>
    </>
  )
}
export default ButtonTwo
