import React from 'react';
import Navigation from './components/Navigation';
import { Container, Row, Col, Table, Button, ButtonToolbar } from 'react-bootstrap';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import CustomForm from './components/fullcrud/CustomForm';

const Space_left = styled.div`
margin-left: 5px;
`;

const Fullcrud = () => {
    return(
        <div>
            <Navigation></Navigation>
            <Container>
                <Row>
                    <Col md="6">
                    <h3>Add People</h3>
                    <CustomForm></CustomForm>
                    </Col>
                    <Col md="6">
                    <h3>People</h3>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Person Name</th>
                                    <th>Business Name</th>
                                    <th>ID Number</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                    <ButtonToolbar className="justify-content-md-center">
                                        <Button size="sm" variant="danger"><FaTrashAlt/></Button>
                                        <Space_left></Space_left>
                                        <Button size="sm" variant="primary"><FiEdit/></Button>
                                    </ButtonToolbar>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
            
export default Fullcrud;