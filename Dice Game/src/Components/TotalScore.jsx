import styled from 'styled-components';
import PropTypes from 'prop-types';

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer score={score}>
      <h1 className="scoreDisplay">{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

TotalScore.propTypes = {
  score: PropTypes.number.isRequired
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;

  .scoreDisplay {
    color: ${(props) => (props.score > 0 ? 'green' : 'red')};
  }

  h1 {
    font-size: 100px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
