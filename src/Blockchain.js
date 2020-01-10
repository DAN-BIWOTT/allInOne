import React, { useEffect,useState } from 'react';
import Web3 from 'web3';
import Navigation from './components/Navigation';
import { Container,Row,Col, FormControl, Button } from 'react-bootstrap';
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config';

const Blockchain = () =>
{
    const[account,setAccounts] = useState('');
    const[contract,setContract] = useState([]);

    let taskCount = 0;
 
    useEffect(
        () => {getBlockdata()}
        ,[]);    

        let objectArray = [];
    const getBlockdata = async () =>{
        const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")); //get a connection to the service
        let response = await web3.eth.getAccounts(); 
        setAccounts(response); //place it in a state.
        const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS);//draw the contract
        setContract(todoList);//keep it in a state.
        const count = await todoList.methods.taskCount().call();//draw the contract methods
        taskCount= count;//keep them in state.
        console.log(taskCount);
        
        for(var i = 0;i<=taskCount;i++){
            const task = await todoList.methods.tasks(i).call();
            objectArray.push(task);
            
        }
        //console.log(objectArray);
       objectArray.map(obj => console.log(obj.content));
    }

//////////////////////  Declarables  ///////////////////////////////
    const[val,setVal] = useState('');
    const[query,setQuery] = useState('');
//////////////////////   Task Form  //////////////////////////////// 
    const sendTask = e => 
    {
        e.preventDefault();
        setQuery(val);
        createTask();
    }

    const updateVal = e => 
    {
        setVal(e.target.value);
    }
/////////////////////  Transaction CRUD ///////////////////////////

////////Create a Task
    const createTask = () => 
    {   
        getBlockdata();
        contract.methods.createTask(query).send({ from: account[0] });
    }

    return(
        <div>
            <Navigation></Navigation>
            
            <Container>
                <Row className="justify-content-center">
                 <p>Current Account: {account[0]}</p>
                </Row>
                <Row>
                    <Col md="4"></Col>
                    <Col md="4">
                    <form onSubmit={sendTask}>
                         <FormControl value={val} onChange={updateVal}></FormControl>
                         <Button color="Success" type="Submit">Create A Task</Button>
                         </form>11
                        </Col>
                    <Col md="4">
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <ol>
                        {objectArray.map(obj => <li>{obj.content}</li>)}
                        </ol>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Blockchain; 