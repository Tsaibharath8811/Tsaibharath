import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
 
function Foot(){
    return(
<div>
<Container fluid style={{background:"black",color:"white",height:"100px"}}>
    <Row style={{background:"black"}}>
       <Col>
       <h5 style={{marginTop:"45px"}}>List Your Movies  Go a Show,Event,Activity or a great experience?</h5>
       </Col>
       
       <Col style={{marginTop:"37px"}}>
       <Button style={{background:"red" ,width:"150px",marginLeft:"400px"}}>Contact</Button>
       </Col>

    </Row>
    
      
</Container>
<Container style={{background:"smokewhite",height:"70px"}}>
    <Row style={{background:"orang",marginTop:"35px"}}>
        <Col style={{marginLeft:"30px"}}>
 <a href="">24/7 Customer Care</a>
        </Col>
        <Col style={{marginLeft:"130px"}}>
<a href="">Resend Booking Confirmation</a>
        </Col>
        <Col style={{marginLeft:"200px"}}>
        
        <a href="">Subscribe to a NewSettler</a>
        </Col>
    </Row>
    </Container>

    <Container fluid style={{background:"black",color:"white"}}>
    <Row style={{marginLeft:"500px"}}>
    
    <Row>
           <h4>Email:</h4>
           <p>saibharathtarigopula@gmail.com</p>
           </Row> 
           <Row>
           <h4>Phone No:</h4>
           <p>9491788111</p>
           </Row> 
           <Row>
        <h4>Follow Us:</h4>
        <p>bookmyshowinstagram</p>
           </Row> 
         </Row>
    </Container>
</div>
    );
}

export default Foot;