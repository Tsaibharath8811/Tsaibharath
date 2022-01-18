import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
function Box(){
    return(
<div>
  <Container fluid style={{background:"white"}}>  
<Container   style={{marginBottom:"10px"}}>
    <Row style={{height:"80px"}}>
        <Col style={{background:"yellow",width:"auto",height:"",transform:"skew(-40deg)"}}>
 <Col style={{transform:"skew(40deg)",marginTop:"20px",marginLeft:"50px"}}><h3>BookMyShow</h3></Col>
        </Col>
<Col style={{background:"skyblue",width:"auto",height:"auto",transform:"skew(-40deg)"}}>
<Col style={{transform:"skew(40deg)",marginTop:"25px",marginLeft:"50px"}}>
 <h6>Watch Handpicked Cinema,Curated With Love:)  </h6>
</Col>
</Col>
    </Row>
    </Container>
    </Container>
</div>
    );
}

export default Box;