import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import '../nav.css';
import styled from 'styled-components';


const SideA = styled.button`

text-decoration: none;
font-size: 25px;
color: #818181;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
display: block;
&:hover {
    background-color: palevioletred;
    color: white;
    text-decoration: none;
  }
`;

const NavStacked= () => 
{   

    return(
        <div>
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right>
        <SideA as="a" id="home" className="bm-item" href="/">Home</SideA>
        <SideA as="a" id="about" className="bm-item menu-item" href="/FoodApp">Food App</SideA>
        <SideA as="a" id="contact" className="menu-item" href="/blockchain">BlockChain</SideA>
         <SideA as="a" className="menu-item" href="/fullcrud/jokecategory">Category</SideA>
        <SideA as="a" className="menu-item" href="/fullcrudRails">fullcrudNodejs</SideA>
        </Menu>
        </div>
    );
} 

export default NavStacked;
