import React, { Component } from 'react';
import { Container, Row} from 'react-bootstrap';
import './occupation.css';

class Location1 extends Component {
    styles = {
        fontSize: 15,
        fontWeight: "bold"
    };
    render() { 
        return ( 
                <Container>
                    <div>
                        <Row style={this.styles}>16:00 - 19:00</Row>
                        <hr
                            style={{
                            color: 'grey',
                            backgroundColor: 'grey',
                            width: 100,
                            height: 1,
                            margin: 4
                            }}
                        />
                    </div>
                    <Row>144 WElm St, Chicago, IL, 60610, USA</Row>
                </Container>
         );
    }
}
 
export default Location1;