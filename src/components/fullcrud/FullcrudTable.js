import React from 'react';
import { Table} from 'react-bootstrap';

const FullcrudTable = ({norrisJokes,norrisJokesids}) =>
{   

    return(
        <div>
             <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Jokes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{ norrisJokesids }</td>
                                    <td>{ norrisJokes }</td>
                                </tr>
                            </tbody>
                        </Table>
        </div>
    );
}

export default FullcrudTable;