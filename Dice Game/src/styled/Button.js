import styled from "styled-components";

export const Button  = styled.button`
    color: #000000;
    background-color: #ffffff;
    padding: 10px 18px;
    min-width: 220px;
    border-radius: 5px;
    border: none;
    border: 2px solid transparent;
    font-size: 16px;
   
    cursor: pointer;
    transition: 0.3s background-color ease-in;
    &:hover{
        background-color: #000000;
        border: 2px solid white;
        color: white;
        transition: 0.2s background-color ease-in;

    }
`;


export const OutlineButton = styled(Button)`
background-color: black;
color: white;
border: 1px solid white;
&:hover{
    background-color: white;
    color: black;
    border: 1px solid transparent;
    transition: 0.4s background-color ease-in;
}

`;