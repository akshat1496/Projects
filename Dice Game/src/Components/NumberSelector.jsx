import styled from "styled-components"
import PropTypes from 'prop-types'

const NumberSelector = ({error, setError ,selectedNumber,setSelectedNumber}) => {
    const array= [1,2,3,4,5,6];
   const numberSelectorHandle = (value)=>{
    setSelectedNumber(value);
    setError("");
   }
    // console.log(selectedNumber);
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {array.map((value,i)=>(
            <Box
            isselected = {value === selectedNumber}
            onClick={()=>numberSelectorHandle(value)}
             key={i+1}> {value} </Box>
            
        ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`


display: flex;
flex-direction: column;
align-items: end;

.error{
  color: red;
}

.flex{
  display: flex;
  gap: 24px;
}
p{
font-size:24px;
font-weight: 700;
padding: 10px 10px;
}
`;


const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid white;
display:grid ;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=>(props.isselected ?"white":"black")} ;
color: ${(props)=>(props.isselected ?"black":"white")} ;


`;


NumberSelector.propTypes = {
  error:PropTypes.string,
 setError:PropTypes.func,
  selectedNumber: PropTypes.number,
  setSelectedNumber: PropTypes.func
};