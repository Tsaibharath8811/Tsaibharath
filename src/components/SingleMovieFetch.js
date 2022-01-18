
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

function SingleMovieFetch() {
    const { movid } = useParams();
    const [sdata, setsData] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get('https://saib-tari-sai.herokuapp.com/movie/${movid}');
            console.log(response);
            setsData([response.data]);
            console.log([response.data]);
        } catch (error) {
            console.error(error);
        }
    }, []);


    return (
        <div>
            <Container fluid style={{ background: "pink", padding: "%5" }}>
                <Row style={{ textAlign: "center" }}>
                    {sdata.map((mov) => {
                        return (
                            <Col >
                                <Card style={{ width: "250px", height: "300px" }}>
                                    <Card.Img variant="top" src={mov.image} style={{ width: "250px", height: "250px" }} />
                                    <Card.Body>
                                        <Card.Title>{mov.name}</Card.Title>
                                        <Card.Text>
                                            {mov.place}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>
                        )
                    }

                    )}
                </Row>
            </Container>
        </div>
    );
}

export default SingleMovieFetch;