import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import axios from 'axios';


function Register() {
  const [username, setUsername] = useState("")
  const [emailaddress, setEmailAddress] = useState("");
  const [passwordd, setPasswordd] = useState("");



  function clearInput() {
    setUsername("");
    setEmailAddress("");
    setPasswordd("");

  }



  async function PostDetails() {

    const userDetails = {
      "username": username,
      "email": emailaddress,
      "password": passwordd
    }

    await axios.post('https://saib-tari-sai.herokuapp.com/user-register', userDetails);
    
    
   

    clearInput();
  }

  return (
    <div>
      <Container style={{ background: "black", width: "500px", height: "350px", marginTop: "60px", marginBottom: "60px", borderRadius: "20px" ,color:"white"}}>
        <Form>
          <Form.Label>Username</Form.Label>
          <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Enter username" />
          <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control valu={passwordd} onChange={(e) => setPasswordd(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>

          <Button href='/success' style={{color:"white"}} variant="primary" type="submit" onClick={PostDetails} >
           submit
          </Button>
        </Form>
      </Container>
    </div>
  );

}

export default Register;