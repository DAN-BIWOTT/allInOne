import React, { useState, useEffect } from 'react';
import { Button, Modal, Image } from 'react-bootstrap';
import Axios from 'axios';

const TodayJoke = () =>
{   
    useEffect(
        () => {todaysJoke()},
        []
    );
    const todaysJokeObj = 
    {
        id:0,
        joke:''
    }
    const[todaysImage,setTodaysImage] = useState();
    const[info,setInfo] = useState(todaysJokeObj);
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
  
    const URL = "https://app.zenserp.com/api/v2/search?q=chuck%20Norris&hl=en&gl=US&location=United%20States&search_engine=google.com&tbm=isch&num=1&start=0";
    const todaysJoke = async e =>
    {
        const response = await Axios.get(`https://api.icndb.com/jokes/random`);
        setInfo({id: response.data.value.id, joke: response.data.value.joke});
        const imageResponse = await fetch(URL, {method: "GET", headers: {'apikey': 'ed2b7b20-33ae-11ea-88fc-c559cf85b878','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(console.log(response))
        const image = await imageResponse.json();
        const val = Math.floor((Math.random() * 10) + 1);
        setTodaysImage(image.image_results[val].thumbnail);
    }
    

    return(
        <div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Today's Joke</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>{info.joke}</p>
      <Image src={todaysImage} thumbnail />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
}

export default TodayJoke;