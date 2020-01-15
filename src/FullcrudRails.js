import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import RailsNote from './components/fullcrudRails/RailsNote';
import AddNewArticle from './components/fullcrudRails/AddNewArticle';
import DisplayArticles from './components/fullcrudRails/DisplayArticles';

const FullcrudRails = () =>
{   
    useEffect(
        ()=>{showMeth()},
        []
    );

    const URL = "http://localhost:3002/api/v1/articles";
    
    const[myth,setMyth] = useState([]);

    const showMeth = async () =>
    {   

        const response = await fetch(URL);
        const res = await response.json();
        setMyth(res.data)
       // console.log(res);

    }

  

    return(
        <div>
            <Navigation></Navigation>
            <Container>
                <Row className="justify-content-md-center">
                    <h3>Diary</h3>
                    <Col md="6" >
                        <RailsNote></RailsNote>
                    </Col>
                    <Col md="6" >
                        <AddNewArticle></AddNewArticle>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <table className="table table-bordered table-striped table-responsive-md text-center">
                            <thead >
                                <tr>
                                    <td>Title</td>
                                    <td>Body</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                            myth.map( mth => <DisplayArticles
                                    pkey = {mth.id}
                                    key = {mth.id}
                                    ptitle = {mth.title}
                                    pbody = {mth.body}
                            ></DisplayArticles>)}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FullcrudRails;