import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
border: 1px solid;
background-color: purple;
display-flex: wrap;
`
const CharacterCard = props => {
  return (
    <>
    <StyledContainer>
<img src={props.image} alt={props.name} />
    <div>Name: {props.name}</div>
    <div>Species: {props.species}</div>
    <div>Gender: {props.gender}</div>
    </StyledContainer>
    </>
  )
};
export default CharacterCard;
