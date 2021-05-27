import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Panel from 'react-panel-system';
import {Row, Col} from 'react-bootstrap';

class HBox extends Component {
    render() { 
        return ( 
            <div>
                <Container layout = "vbox">
                   <Row>11th Nov</Row>
                   <Row>Sunday Supper Club</Row>
                </Container>
            </div>
         );
    }
}
 
export default HBox;