import React, { Component } from 'react';
import { Container, Row} from 'react-bootstrap';

class Location2 extends Component {
    styles = {
        fontSize: 15,
        fontWeight: "bold"
        };
    render() { 
        return ( 
                <Container>
                    <Row style={this.styles}> 08:30 - 08:30</Row>
                    <hr
                        style={{
                        color: 'grey',
                        backgroundColor: 'grey',
                        width: 100,
                        height: 1,
                        margin: 4
                        }}
                    />
                    <Row>Estuary Park</Row>
                    <br />
                </Container>
         );
    }
}
 
export default Location2;