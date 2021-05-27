import React, { Component } from 'react';
import { Container, Row} from 'react-bootstrap';

class Location3 extends Component {
    styles = {
        fontSize: 15,
        fontWeight: "bold"
    };
    render() { 
        return ( 
                <Container>
                    <Row style={this.styles}>08:00 - 15:00</Row>
                    <hr
                        style={{
                        color: 'grey',
                        backgroundColor: 'grey',
                        width: 100,
                        height: 1,
                        margin: 4
                        }}
                    />
                    <Row>The Teapot and Brew Club</Row>
                    <br />
                </Container>
         );
    }
}
 
export default Location3;