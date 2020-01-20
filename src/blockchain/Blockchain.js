import React, { useEffect,useState } from 'react';
import Web3 from 'web3';
import NavScaleRotate from '../components/NavScaleRotate';
import { Container,Row,Col, FormControl, Button, ButtonToolbar } from 'react-bootstrap';
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config/config';

const Blockchain = () =>
{
    const[account,setAccounts] = useState('');
    const[contract,setContract] = useState([]);
    const[blockData,setBlockData] = useState([]);

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
       setBlockData(objectArray);
    }

//////////////////////  Declarables  ///////////////////////////////
    const[val,setVal] = useState('');
//////////////////////   Task Form  //////////////////////////////// 
 
    const updateVal = e => 
    {   console.log(e.target.value);
        setVal(e.target.value);
    }
/////////////////////  Transaction CRUD ///////////////////////////

////////Create a Task
    const createTask = () => 
    {   console.log(val);
        getBlockdata();
        contract.methods.createTask(val).send({ from: account[0] });
    }

    return(
        <div>
            <NavScaleRotate></NavScaleRotate>
            
            <Container>
                <Row className="justify-content-center">
                 <p>Current Account: {account[0]}</p>
                </Row>
                <Row>
                    <Col md="4"></Col>
                    <Col md="4">
                    <form onSubmit={createTask}>
                        <ButtonToolbar>
                         <FormControl value={val} onChange={updateVal}></FormControl>
                         <Button color="Success" type="Submit">Create A Task</Button>
                         </ButtonToolbar>
                         </form>
                        </Col>
                    <Col md="4">
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <ol><h4>Tasks to be accomplished</h4>
                        {blockData.map(obj => <li key={obj.content.toString()}>{ obj.content}</li>)}
                        </ol>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Blockchain; 