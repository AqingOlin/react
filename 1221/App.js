import React, { useState } from 'react'
import ButtonOne from './components/ButtonOne'
import ButtonTwo from './components/BottonTwo'

function App() {
  const [appData, setAppData] = useState('App')

  //子女->父母 準備接收子女的內容狀態用的
  const [childData, setChildData] = useState('')

  //子女->子女 one 到 two
  const [oneToTwoData, setOneToTwoData] = useState('')
  return (
    <>
      <h1>App: {childData}</h1>
      {/*父母->子女： 直接特過props傳自己的資料給子女元件*/}
      <ButtonOne appData={appData} setOneToTwoData={setOneToTwoData} />
      {/*子女->父母： 傳一個setter函式給子女元件*/}
      <ButtonTwo oneToTwoData={oneToTwoData} setChildData={setChildData} />
    </>
  )
}
export default App
