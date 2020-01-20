import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import FullcrudTable from './components/FullcrudTable';
import TodayJoke from './components/TodayJoke';
import NavStacked from '../components/NavStacked';
import { getJokes } from './controllers/MainController';


const Fullcrud = () => {
const[norris,setNorris] = useState([]);
    useEffect(
        ()=>{ setNorris(getJokes(5).data.value)},
        []
    );

 
    // const getData = async () => 
    // {
    //     const response = await Axios.get("https://api.icndb.com/jokes/random/5");
    //     setNorris(response.data.value);
    // }
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