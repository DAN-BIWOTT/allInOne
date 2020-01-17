import React from 'react';
import { Table} from 'react-bootstrap';
import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton
  } from 'react-share';
  import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon
  } from 'react-share';
import styled from 'styled-components';

const Share = styled.div`
display: inline-block;
`;

const FullcrudTable = ({norrisJokes,norrisJokesids}) =>
{   

    return(
        <div>
             <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Jokes</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr> 
                                    <td>{ norrisJokesids }</td>
                                    <td>{ norrisJokes }</td>
                                    <td>
                                        <Share>
                                        <FacebookShareButton url={URL}><FacebookIcon size={32} round={true} /></FacebookShareButton>
                                        <TwitterShareButton url={URL}><TwitterIcon size={32} round={true}/></TwitterShareButton>
                                        <TelegramShareButton url={URL}><TelegramIcon size={32} round={true}/></TelegramShareButton>
                                        <WhatsappShareButton url={URL}><WhatsappIcon size={32} round={true}/></WhatsappShareButton>
                                        </Share>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
        </div>
    );
}

export default FullcrudTable;