import { useState } from 'react';
import TotalScore from "./TotalScore"
import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import Rules from "./Rules";
import { Button, OutlineButton } from '../styled/Button';
import { MainContainer } from '../styled/MainContainer';


const gamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules,setShowRules] = useState(false);

  const generateRandomNumber = (min,max)=>{

    return Math.floor(Math.random()*(max-min)+min);
}

const roleDice = ()=>{
    if(!selectedNumber){
      setError("Please select a number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);


    if(selectedNumber===randomNumber){
      setScore((prev)=>prev+randomNumber);
      console.log("MATCHED");
    }
    else{
      setScore((prev)=>prev-2);
    }
    setSelectedNumber(undefined);
}

const resetScore=()=>{
  setScore(0);
}

  return (
    <MainContainer>
      <div className="top_section">
      <TotalScore score ={score}/>
      <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice}/>   
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={ ()=>setShowRules((prev)=>!prev) }> {showRules? "Hide":"Show"} Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  )
}

export default gamePlay

