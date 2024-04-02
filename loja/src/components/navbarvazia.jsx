import Navbar from "react-bootstrap";

function navbarVazia() {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    );
}

export default navbarVazia;