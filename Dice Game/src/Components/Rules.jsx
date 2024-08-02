import RulesContainer from '../styled/RulesContainer.js'

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>After click if selected number is equal to dice number you will get same point as dice{""}</li>
        <li>If you get wrong guess then 2 point will be deducted. </li>
      </div>
    </RulesContainer>
  )
}

export default Rules
