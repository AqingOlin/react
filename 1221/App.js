import React, { useState } from 'react'
import ButtonOne from './components/ButtonOne'
import ButtonTwo from './components/BottonTwo'

function App() {
  const [appData, setAppData] = useState('App')

  //準備接收子女的內容狀態用的
  const [childData, setChildData] = useState('')
  return (
    <>
      <h1>App: {childData}</h1>
      {/*直接特過props傳自己的資料給子女元件*/}
      <ButtonOne textData={appData} />
      {/*傳一個setter函式給子女元件*/}
      <ButtonTwo setChildData={setChildData} />
    </>
  )
}
export default App
