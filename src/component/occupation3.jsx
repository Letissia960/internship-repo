import React, { Component } from 'react';
import { Container, Row} from 'react-bootstrap';

class Occupation3 extends Component {
    
    styles = {
        fontSize: 15,
        fontWeight: "bold"
    };


    render() { 
        return (  
                <Container>
                        <Row style={this.styles}>Morning Brews and Views</Row>
                        <hr
                                style={{
                                    color: 'grey',
                                    backgroundColor: 'grey',
                                    width: 300,
                                    height: 1,
                                    margin: 2
                                }}
                            />
                    <Row>Enjoy free samples of our latest brews and while overlooking the 
                        beautiful sites of our city.Plenty of iced and hot tee, plus gourmet 
                        coffee...
                    </Row>
                    <Row>
                        <button>+ Event Details</button>
                    </Row>
                </Container>
        );
    }
}
 
export default Occupation3;