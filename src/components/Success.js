import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Badge from 'react-bootstrap/Badge';

function Success() {
    return(
         <div>
             <Container style={{marginTop:"150px",marginBottom:"90px",height:"300px",width:"500px"}}>
            <Alert variant="success">
            <div>
  
  Status:   <Badge bg="success">Success</Badge> 
 
  
  
 </div>
  <Alert.Heading>Your Account is Succesfully Created!!!!!</Alert.Heading>
  <hr />
  <p className="mb-0">
    Thanks For Registration :)
    
  </p>
  <Button onClick={()=> window.location.href="/register"} style={{marginTop:"20px",marginLeft:"0px",width:"100px", height:"40px"}}>OK</Button>
</Alert>

</Container>
         </div>
    
        
    );
    
}

export default Success;