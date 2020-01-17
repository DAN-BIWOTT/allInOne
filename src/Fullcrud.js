import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import SearchForm from './components/fullcrud/SearchForm';
import FullcrudTable from './components/fullcrud/FullcrudTable';
import TodayJoke from './components/fullcrud/TodayJoke';
import Axios from 'axios';
import NavStacked from './components/NavStacked';


const Fullcrud = () => {

    useEffect(
        ()=>{getData()},
        []
    );

        const[norris,setNorris] = useState([]);

    const getData = async () => 
    {
        const response = await Axios.get("https://api.icndb.com/jokes/random/5");
        setNorris(response.data.value);
         console.log(await norris)
    }
//    norris.map(nor => console.log(nor.categories));
    return(
        <div id="outer-container">
            <NavStacked></NavStacked>
            <Container>
                <Row className="justify-content-md-center">
                    <h3>CHUCK NORRIS JOKES</h3>
                </Row>
                <Row>
                    <Col md="6">
                        {
                            norris.map( 
                                obj =>
                                    <FullcrudTable
                                            key={obj.id}  
                                            norrisJokesids={obj.id}
                                            norrisJokes={obj.joke}
                                    ></FullcrudTable>
                             )
                         }
                    </Col>
                    <Col md="6">
                        <SearchForm></SearchForm>
                        <TodayJoke></TodayJoke>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                     
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
            
export default Fullcrud;