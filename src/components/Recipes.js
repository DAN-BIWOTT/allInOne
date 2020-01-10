import React from 'react';
import { Container, Row, Col,Image } from 'react-bootstrap';
import styled from 'styled-components';

const Shadow = styled.div`
-moz-box-shadow: 0 0 10px #ccc;
-webkit-box-shadow: 0 0 10px #ccc;
box-shadow: 0 0 10px #ccc;
`;

const Custom_margin = styled.div`
margin-top: 50px;
margin-bottom: 50px;
`;

const Title = styled.h1`
text-decoration: underline;
`;

const Recipe = ({title,calories,img,source,ingredients}) => {
    return(
        <Custom_margin>
        <Container>
             <Shadow>
            <Row className="justify-content-md-center">
                <Title>{title}</Title>
            </Row>
           
            <Row>
             <Col md='4'>
             <Image className="justify-content-md-center" src={img} thumbnail />    
            </Col>
                 <Col md='8'>
                     <h4>Calory value: {calories}</h4>
                     <h4>Data Source: {source}</h4>
                     <ol>
                     {
                         ingredients.map(
                         i => <li>{i.text}</li>
                     )}
                     </ol>
                 </Col>
             </Row>  
            </Shadow>   
        </Container>  
        </Custom_margin>
    );
}

export default Recipe;