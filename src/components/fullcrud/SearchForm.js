import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const SearchForm = () => 
{   
    const[firstName,setfirstName] = useState('');
    const[lastName,setlastName] = useState('');

    const updateFname = e =>
    {   
        setfirstName(e.target.value);
    }
    const updateSname = e =>
    {
        setlastName(e.target.value);
    }

    const singleObj = {
        id:0,
        joke:""
    }

    const sendObj = {
        firstName: firstName,
        lastName: lastName
    }

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const URL = "https://api.icndb.com/jokes/random";
    
    const[customJoke,setCustomJoke] = useState(singleObj);

    const customizeResult= async e =>{
        e.preventDefault();
         
        const result = await axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: URL,
            params: sendObj
        })
        // .then(result => console.log(result.data));
           setCustomJoke({id: result.data.value.id, joke: result.data.value.joke});
         console.log(customJoke);
    }
    


    return(
        <div>
            <h4>Customize Joke</h4>
            <form onSubmit={customizeResult}>
                <div className="form-group">
                    <label>Main Character First Name:  </label>
                    <input type="text" value={firstName} onChange={updateFname} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Main Character Last Name: </label>
                    <input type="text" value={lastName} onChange={updateSname} className="form-control"/>
                </div>
                <div className="form-group">
                <Button type="submit" variant="success">Generate</Button>
                </div>
            </form>
            <div>
    <p>{customJoke.joke}</p> 
            </div>
        </div>
    );          
}

export default SearchForm;
                