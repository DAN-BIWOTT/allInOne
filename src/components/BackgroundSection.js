import React from 'react';
import styled from 'styled-components';
import bg1 from '../images/bg1.jpg';


const SectionContainer = styled.img`
  width: 100%;
  height: 666px;
`;
const BackgroundSection = () => 
{   
    return(
            <SectionContainer src={bg1} />
    );
} 

export default BackgroundSection;