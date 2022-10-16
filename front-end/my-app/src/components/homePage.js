import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../resources/images/shipping_logo.png'
import styled from 'styled-components';

function HomePage() {
  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Container>
            <ImageDiv>
            <img src={logo} width="60px" height="60px" alt='Shipway Logo'/>
            </ImageDiv>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  href="#Track">Track Your package</Nav.Link>
            <Nav.Link href="#features">Hub Near You</Nav.Link>
            <Nav.Link href="#pricing">Delivery Partners</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default HomePage;

const ImageDiv = styled.div`
margin-right: 40px
`;