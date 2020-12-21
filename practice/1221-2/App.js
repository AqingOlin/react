import React, { useState } from 'react'
import ButtonOne from './components/ButtonOne'
import ButtonTwo from './components/BottonTwo'

function App() {
  const [Life, setLife] = useState(true)
  return (
    <>
      <ButtonOne life={Life} setLife={setLife} />
      <ButtonTwo setLife={setLife} />
    </>
  )
}
export default App
