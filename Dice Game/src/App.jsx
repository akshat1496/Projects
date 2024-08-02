import GamePlay from "./Components/GamePlay.jsx"
import StartGame from "./Components/StartGame"
import './App.css'
import { useState } from "react"

function App(){

  const [isGameStarted , setIsGameStarted] = useState(false);

  const toggleGame = ()=>{
    setIsGameStarted((p)=>!p)
  }
  return ( 
    <>
    {
      isGameStarted ? <GamePlay/>:<StartGame toggle={toggleGame}/>
    }

    </>
  )
}

export default App
