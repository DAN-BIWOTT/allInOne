import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const CustomForm = () => 
{   

    const details = 
    {
        pName: '',
        bName: '',
        id: 0 
    }
    const[detail,setDetail] = useState(details);

    const[tempPerson,setTempPerson] = useState('');
    const[tempBusiness,setTempBusiness] = useState('');
    const[tempId,setTempId] = useState('');

    const updatePname = e =>
    {   
        setTempPerson(e.target.value);
    }
    const updateBname = e =>
    {
        setTempBusiness(e.target.value);
    }
    const updateId = e =>
    {
        setTempId(e.target.value);
    }

    const addObject= e =>{
        e.preventDefault();
        setDetail({
            pName: tempPerson,
            bName: tempBusiness,
            id: tempId,
        });console.log(detail);
    }

    return(
        <form onSubmit={addObject}>
            <div className="form-group">
                <label>Add Person Name:  </label>
                <input type="text" value={tempPerson} onChange={updatePname} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Add Business Name: </label>
                <input type="text" value={tempBusiness} onChange={updateBname} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Add ID Number: </label>
                <input type="text" value={tempId} onChange={updateId} className="form-control"/>
            </div>
            <div className="form-group">
               <Button type="submit" variant="success">Submit</Button>
            </div>
        </form> 
    );          
}

export default CustomForm;
                