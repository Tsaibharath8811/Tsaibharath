import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




import Container from 'react-bootstrap/Container';

function HeaderOne() {
    return (
        <div>
            <Navbar collapseOnSelect expand bg="dark" variant="dark">
  <Container fluid style={{background:"black",height:"30px"}}>
  
  
  
    <Nav className="me-auto" style={{marginLeft:"70px"}}>
    <Navbar.Brand href="/movies">movies</Navbar.Brand>
      <Navbar.Brand href="#features">sports</Navbar.Brand>
      <Navbar.Brand href="#pricing">events</Navbar.Brand>
      
    </Nav>
    <Nav style={{marginRight:"60px"}}>
    <Navbar.Brand href="#home">offers</Navbar.Brand>
      <Navbar.Brand href="#features">coupons</Navbar.Brand>
      <Navbar.Brand href="#pricing">bookings</Navbar.Brand>
    </Nav>
    
  </Container>
</Navbar>
        </div>
    );
}

export default HeaderOne;