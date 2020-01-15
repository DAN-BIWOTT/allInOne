import React, { useEffect, useState } from 'react';
import { Table, Col, Row, Card } from 'react-bootstrap';
import styled from 'styled-components';
import nerd from '../../images/nerd.png';
import baby from '../../images/baby.png';
import undefinedIMG from '../../images/undefinedIMG.png';
import home from '../../images/home.png';

const SideNav = styled.div`
height: 100%;
width: 130px;
position: fixed;
z-index: 1;
top: 0;
left: 0;
background: rgb(195,128,34);
background: linear-gradient(0deg, rgba(195,128,34,1) 0%, rgba(191,60,0,0.2553396358543417) 100%);
overflow-x: hidden;
padding-top: 20px;
`;

const SideA = styled.a`
padding: 6px 8px 6px 16px;
text-decoration: none;
font-size: 25px;
color: #818181;
display: block;
`;

const CustomMargin = styled.div`
margin-top: 25px;
margin-right: 10px;
`;
const JokeCategories = () => 
{   
    
    const cat = [];
    let limitJoke = 12;

    const processCat = (choice) =>
    {
        getCat(choice);
        // console.log(cat);
    }
    const[myJoke,setMyJoke] = useState([])
    const getCat = async (thechoice) => 
    {   
        const response = await fetch(`http://api.icndb.com/jokes/random/${limitJoke}`,{method: 'GET'});
        const result = await response.json();
        for(let i = 0; i < limitJoke; i++){
         // console.log(result.value[i].categories[0]);
         try{
         if(result.value[i].categories[0] != undefined){ 
                if((result.value[i].categories[0]) == thechoice ){
                    
                    if(cat.length <= 12)
                    {  
                        setMyJoke(result.value)
                        limitJoke++;
                        console.log(myJoke);
                        getCat(thechoice);
                    }
                }
            }
          }catch(e){console.log(" ")}
        }
    }
    

    return(
        <div className="container-fluid">
            <Row>
                <Col md="1">
                    <SideNav>
                        <CustomMargin>
                        <SideA href="/"> <img src={home} alt="nerd" /></SideA>
                        </CustomMargin>
                        <CustomMargin>
                        <SideA href=""> <img onClick = {processCat("nerd")} src={nerd} alt="nerd" /></SideA>
                        </CustomMargin>
                        <CustomMargin>
                        <SideA href="" ><img onClick = {processCat("explicit")} src={baby} alt="nerd" /></SideA>
                        </CustomMargin>
                        <CustomMargin>
                        <SideA href="#"><img src={undefinedIMG} alt="nerd" /></SideA>
                        </CustomMargin>
                    </SideNav>
                </Col>
                <Col md="11">
                <Row>
                {myJoke.map(norris => 
                <Col md="4">
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{norris.id}</Card.Title>
                    <Card.Text>
                    {norris.joke}
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                 )}</Row>
                </Col>
                
            </Row>
        </div>
    )
}

export default JokeCategories; 