 import { Button } from "../styled/Button";
import { Container } from "../styled/StartGameContainer";

const startGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="images/dices.png " alt="" />
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default startGame


