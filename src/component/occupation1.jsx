import React, { Component } from 'react';
import { Container, Row} from 'react-bootstrap';
import './occupation.css';

class Occupation1 extends Component {

    styles = {
        fontSize: 15,
        fontWeight: "bold"
    };
    
    render() { 
        return ( 
                <Container layout="grid">
                        <Row style={ this.styles }>Sunday Supper Club</Row>
                        <hr
                            style={{
                                color: 'grey',
                                backgroundColor: 'grey',
                                width: 300,
                                height: 1,
                                margin: 2
                            }}
                        />
                    <Row>a culinary event with foods all over the world.This
                        is a weekly clud you can join for small fee. Learn 
                        cooking methods from top chefs....
                    </Row>
                    <Row>
                        <button>+ Event Details</button>
                    </Row>
                </Container>
        );
    }
}
 
export default Occupation1;