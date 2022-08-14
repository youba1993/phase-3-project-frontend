import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Header() {
  return (
    
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand >Donations Portal</Navbar.Brand>
            <Breadcrumb.Item active>Connected</Breadcrumb.Item>
          </Container>
        </Navbar>
      
   
  );
}

export default Header;
