import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function CardSlider(){
    return(
<div>
<Container fluid style={{marginTop:"20px",marginBottom:"",background:"white"}}>
    <h2>Recommended Movies</h2>

    <Row>
        <Col>
        <Card style={{ width:"250px",height:"450px",borderColor:"white" }}>
  <Card.Img variant="top" src="./rrr.jpg" style={{width:"250px",height:"500px",borderRadius:"20px",background:"black"}} />
  <Card.Title>RRR</Card.Title>
    <Card.Text>
      Action/Thriller
    </Card.Text>
</Card>

</Col>


<Col>
        <Card style={{ width:"250px",height:"500px",borderColor:"white" }}>
  <Card.Img variant="top" src="./spider.jpg" style={{width:"250px",height:"400px",borderRadius:"20px",background:"black"}} />
  <Card.Title>Spider Man No Way Home</Card.Title>
    <Card.Text>
      Action
    </Card.Text>
</Card>

</Col>
<Col>
        <Card style={{ width:"250px",height:"500px",borderColor:"white" }}>
  <Card.Img variant="top" src="./sham.jpg" style={{width:"250px",height:"400px",borderRadius:"20px",background:"black"}} />
  <Card.Title>Shyam Singha Roy</Card.Title>
    <Card.Text>
      Action/Thriller
    </Card.Text>
</Card>

</Col>
<Col>
        <Card style={{ width:"250px",height:"500px",borderColor:"white" }}>
  <Card.Img variant="top" src="./pushpa.jpg" style={{width:"250px",height:"400px",borderRadius:"20px",background:"black"}} />
  <Card.Title>Pushpa</Card.Title>
    <Card.Text>
      Action/Thriller
    </Card.Text>
</Card>

</Col>
<Col>
        <Card style={{ width:"250px",height:"500px",borderColor:"white" }}>
  <Card.Img variant="top" src="./akkanda.jpg" style={{width:"250px",height:"400px",borderRadius:"20px",background:"black"}} />
  <Card.Title>Akkanda</Card.Title>
    <Card.Text>
      Action/Thriller
    </Card.Text>
</Card>

</Col>

<Col>
        <Card style={{ width:"250px",height:"500px",borderColor:"white" }}>
  <Card.Img variant="top" src="./Bang.jpg" style={{width:"250px",height:"400px",borderRadius:"20px",background:"black"}} />
  <Card.Title>Bangarraju</Card.Title>
    <Card.Text>
      Comedy/Fantasy
    </Card.Text>
</Card>

</Col>
<Col>
        <Card style={{ width:"250px",height:"500px",borderColor:"white" }}>
  <Card.Img variant="top" src="./83.jpg" style={{width:"250px",height:"400px",borderRadius:"20px",background:"black"}} />
  <Card.Title>83</Card.Title>
    <Card.Text>
      Action/Thriller
    </Card.Text>
</Card>

</Col>
<Col>
        <Card style={{ width:"250px",height:"500px",borderColor:"white" }}>
  <Card.Img variant="top" src="./a.jpg" style={{width:"250px",height:"400px",borderRadius:"20px",background:"black"}} />
  <Card.Title>Acharya</Card.Title>
    <Card.Text>
      Action/Thriller
    </Card.Text>
</Card>

</Col>
    </Row>

</Container>
</div>
    );
}

export default CardSlider;