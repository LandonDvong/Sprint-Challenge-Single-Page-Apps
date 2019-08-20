import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
border-bottom: 1px solid black;
background-color: black;
display: flex;
justify-content: space-evenly;
align-content: space-around;
`
// TODO: Add missing tabs below
export default function TabNav() {
    return (
        
        <>
        
         <div className="nav-links">
            <StyledContainer>
                <NavLink className="some-nav" to="/character">
                Characters
                </NavLink>
                <NavLink className="some-nav" to="/episode">
                Episodes
                </NavLink>
                <NavLink className="some-nav" to="/location">
                Locations
                </NavLink>
            </StyledContainer>
         </div>
         

        </>
      
    )
};