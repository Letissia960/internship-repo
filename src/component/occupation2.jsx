import React, { Component } from 'react';
import { Container, Row} from 'react-bootstrap';

class Occupation2 extends Component {
    
    styles = {
        fontSize: 15,
        fontWeight: "bold"
    };

    render() { 
        return (  
                <Container>
                        <Row style={this.styles}>Evining in the Park</Row>
                        <hr
                                style={{
                                    color: 'grey',
                                    backgroundColor: 'grey',
                                    width: 300,
                                    height: 1,
                                    margin: 2
                                }}
                            />
                    <Row>We invite you to listen to live bands play beautiful music 
                        in the park. Enjoy the sound of Laureen Devis and the Kings 
                        and enjoy wine tast....
                    </Row>
                    <Row>
                        <button>+ Event Details</button>
                    </Row>
                </Container>
        );
    }
}
 
export default Occupation2;