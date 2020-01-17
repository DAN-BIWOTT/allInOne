import React, { useState } from 'react';
import { Button, ButtonGroup, Modal, Col,Row } from 'react-bootstrap';
import Axios from 'axios';

const DisplayArticles = ({pkey,ptitle,pbody}) =>
{  
    const deleteMe = async e =>{
        e.preventDefault();
        let val = parseInt(e.target.value);
       
        await Axios.
        delete(
            `https://philosopherapi.herokuapp.com/api/v1/articles/${val}`,
            {headers:{"Content-Type" : "Application/Json"}}
        )
        .catch(res => {
            console.log(res);
        });
        window.location.reload();
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const id = pkey;

    const handleOpen = async (e) => {
        
        await Axios.get(`https://philosopherapi.herokuapp.com/api/v1/articles/${e.target.value}`,{headers:{"Content-Type":"Application/Json"}})
        .then(response => {
            setTitleVal(response.data.data.title);
            setBodyVal(response.data.data.body);
        });
        setShow(true);
    }
    //  EDIT
    const[titleVal,setTitleVal] = useState("");
    const[bodyVal,setBodyVal] = useState("");

    const updateTitle = (e) =>{
        setTitleVal(e.target.value);
    }
    const updateBody = (e) =>{
        setBodyVal(e.target.value);
    }
    const setValues = (e) =>{
        e.preventDefault();
        editMe();
    }
    const editMe  = async()=>{
       
        await Axios.
        put(`https://philosopherapi.herokuapp.com/api/v1/articles/${id}`,
            { title: titleVal, body: bodyVal },
            {
            headers:{"Content-Type": "Application/Json"}
            })
            .then(response => {
                console.log(response);
                window.location.reload();
            })
    }
    return(
        <>
            <tr>
                <td>{ptitle}</td>
                <td>{pbody}</td>
                <td>
                    <ButtonGroup>
                        <Button value={pkey} onClick={deleteMe} size="md" className="bg-danger">Delete</Button>
                        <Button value={pkey} onClick={handleOpen} size="md" className="bg-primary">Edit</Button>
                    </ButtonGroup>
                    
                </td>
            </tr>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <form className="form-group" onSubmit={setValues}>
            <Modal.Body>
                <div className="container-fluid">
                    <Row>
                        <Col md="1"></Col>
                        <Col md="10">
                            
                                <div>
                                    <label>Title:</label>
                                    <input type="text" value={titleVal} onChange={updateTitle} className="form-control" />
                                </div>
                                <div>
                                    <label>Body:</label>
                                    <textarea type="text" value={bodyVal} onChange={updateBody} className="form-control" />
                                </div>
                            
                        </Col>
                        <Col md="1"></Col>
                    </Row>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <ButtonGroup>
            <Button variant="success" onClick={handleClose} type="submit">
                Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </ButtonGroup>
            </Modal.Footer>
            </form>
        </Modal>
        </>
    );
}

export default DisplayArticles;