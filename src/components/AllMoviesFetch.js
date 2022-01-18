import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import { useState, useEffect } from 'react';

function AllMoviesFetch() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    try {
      const response = await axios.get('https://saib-tari-sai.herokuapp.com/movies');
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);


  return (
    <div >
      <Container fluid style={{ background: "pink" }}>
        <Container>
          <Row >
            {data.map((mov) =>
                <Col id={mov._ID} key={mov.id} xs={6} md={5} lg={4} >
                  <Card style={{ width: "250px", height: "400" }}  onClick={() => window.location.href = "/movies/" + mov._ID}>
                    <Card.Img style={{ width: "auto", height: "300" }} variant="top" src={mov.image} />
                    <Card.Body>
                      <Card.Title>{mov.name}</Card.Title>
                      <Card.Text>
                        {mov.place}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            
            )}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default AllMoviesFetch;