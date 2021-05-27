import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import {Row, Table} from 'react-bootstrap';
import './menu.css';
import Occupation1 from './occupation1';
import Occupation2 from './occupation2';
import Occupation3 from './occupation3';
import Location1 from './location1';
import Location2 from './location2';
import Location3 from './location3';


class Menu extends Component {

    render() { 
        return ( 
                <Container>
                    <h1>Events</h1>
                    <Row>
                       <Table>
                        <tbody>
                            <tr>
                                <th style={{ fontSize : '20px'}}> 11th Nov </th>
                                <td> <Occupation1></Occupation1></td>
                                <td>
                                    <Location1></Location1>
                                </td>
                                
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th style={{ fontSize : '20px'}}> 13th Nov </th>
                                <td> <Occupation2></Occupation2></td>
                                <td>
                                    <Location2></Location2>
                                </td>
                            </tr>
                        </tbody> 
                        <tbody>
                            <tr>
                                <th style={{ fontSize : '20px'}}> 15th Nov </th>
                                <td> <Occupation3></Occupation3></td>
                                <td>
                                    <Location3></Location3>
                                </td>
                            </tr>
                        </tbody>  
                       </Table>
                    </Row>
                </Container> 
         );
    }
}
 
export default Menu;