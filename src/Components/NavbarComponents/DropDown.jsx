import React from 'react'
import styled from "styled-components";


const DropDownWrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
`


const DropDown = (props) => {
    return(
        <DropDownWrapper>
            {props.children}
        </DropDownWrapper>
    )
} 


export default DropDown



