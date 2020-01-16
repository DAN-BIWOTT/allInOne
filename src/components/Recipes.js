import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Shadow = styled.div`
-moz-box-shadow: 0 0 10px #ccc;
-webkit-box-shadow: 0 0 10px #ccc;
box-shadow: 0 0 10px #ccc;
width: 100%;
`;

const Custom_margin = styled.div`
margin-top: 50px;
margin-bottom: 50px;
`;

const CustomCard = styled.div`
width: 100%;
height: 400px;
background-color: #ffffff;
`;

const CardBar = styled.div`
-moz-box-shadow: 0 0 10px #ccc;
-webkit-box-shadow: 0 0 10px #ccc;
box-shadow: 0 0 10px #ccc;
border-radius: 25px;
  border: 2px solid #ff9900;
  padding: 20px;
  width: 50%;
  height: 100px;
  margin-bottom: 10px;
`;

const CustomImage = styled.img`
border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 100%;
&:hover{
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
`;


const CustomHeader4 = styled.h1`
font-family: 'Indie Flower', cursive;
`;
const Recipe = ({key_,title,calories,img,source,ingredients}) => {
    return(
        <Custom_margin>
        <Container>
            <Row>
                <Col md="2"></Col>
                <Col md="10">

            <CardBar>
                    <Row className="justify-content-md-center" style={{backgroundColor: "#ff9900"}}>
                        <CustomHeader4>{title}</CustomHeader4>
                    </Row>
             </CardBar>

            <Shadow> 
                 
            <CustomCard>
                <Row>
                  <Col md='4' class="text-center">
                    <CustomImage  src={img} />    
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
             </CustomCard> 
            </Shadow>  

            </Col>
            </Row> 
        </Container>  
        </Custom_margin>
    );
}

export default Recipe;