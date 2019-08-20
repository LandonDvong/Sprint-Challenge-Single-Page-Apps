import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
border: 1px solid;
background-color: crimson;
display-flex: wrap;`

const LocationCard = props => {
  return (
    <>
    <StyledContainer>
    <h2>
      <div> {props.name} </div>
      </h2>
      <div> {props.type} </div>
      <div> {props.dimension} </div>
      <div>{props.residents}</div>
      </StyledContainer>
    </>

  )
};


export default LocationCard;