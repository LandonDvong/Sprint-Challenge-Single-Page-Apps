import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
border-bottom: 1px solid black;
background-color: red;
display-flex: wrap;`

const EpisodeCard = props => {
  return (
    <>
    <StyledContainer>
    <div> {props.episode} </div>
    <div> {props.air_date}</div>
    <h1>
    <div> {props.name}</div>
    </h1>

    </StyledContainer>
    </>
  )
};
export default EpisodeCard;
