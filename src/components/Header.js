import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand style={{cursor:"pointer"}}onClick={()=>window.location.href="/"}>BookMyShow</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            
                            <Form className="d-flex">
                            <FormControl
                            
                                type="search"
                                placeholder="Search Here Movies,Sports,Ganmes,Promos"
                                className="me-2"
                                aria-label="Search"
                                style={{width:"450px"}}
                                
                            />
                              <Button variant="outline-success">Search</Button>
                            </Form>
                            
                            
                        
                            <NavDropdown title="Share web link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">https://tsaibharath-8yfnu4305-tsaibharath8811.vercel.app/register</NavDropdown.Item>
                                </NavDropdown>
                        
                        </Nav>
                        
                        <NavDropdown title="Location" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Guntur</NavDropdown.Item>
                                <NavDropdown.Item href="">Vijawada</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    None
                                </NavDropdown.Item>
                            </NavDropdown> 
                           
                            
                          <Button href="/register" width="10px" height="10px" variant="light">Sign in</Button>
                          
                    
                    </Navbar.Collapse>
                </Container>
                
            </Navbar>

            



            
        
        </div>
    );
}

export default Header;