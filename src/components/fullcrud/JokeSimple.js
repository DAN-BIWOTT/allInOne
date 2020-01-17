import React, { useEffect, useState } from 'react';
import { Col, Row, Navbar,Nav} from 'react-bootstrap';
import '../../joke.css';


const JokeSimple = () => 
{   
    
    let limitJoke = 100;

    const[nerdy,setNerdy] = useState([]);
    
    useEffect(
        () => {getCat()},[]
    )

    const getCat = async () => {
        // console.log(thechoice);
        const response = await fetch(`https://api.icndb.com/jokes/random/${limitJoke}`,{method: 'GET'});
        const result = await response.json();
       
        for(let i = 0; i < limitJoke; i++){
        if(result.value[i].categories[0] === "nerdy"){
            setNerdy(result.value)
            }
        }
    }
    

    return(
        <div className="container-fluid">

            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="">Category</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/fullcrud/jokecategory">Nerdy</Nav.Link>
                <Nav.Link href="/fullcrud/jokeExplicit">Explicit</Nav.Link>
                <Nav.Link href="/fullcrud/jokeSimple">Undefined</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>

            <Row>
               
                {nerdy.map(norris => <Col md="4" key={norris.id}>
                <section className="cards-wrapper" >
                <div className="card-grid-space">
                    <div className="num">{norris.id}</div>
                    <a className="card">
                    <div>
                        <h1>Undefined Jokes</h1>
                        <p>{norris.joke}</p>
                        <div className="date">6 Oct 2017</div>
                        <div className="tags">
                        <div className="tag">nerd</div>
                        <div className="tag">explicit</div>
                        <div className="tag">undefined</div>
                        </div>
                    </div>
                    </a>
                </div>
                </section>
               </Col> )}
            </Row>
        </div>
    )
}

export default JokeSimple; 