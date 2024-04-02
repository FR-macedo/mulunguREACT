import Navbar from "react-bootstrap/Navbar";

function NavbarVazia() {
    return(
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#">Navbar</Navbar.Brand> 
        </Navbar>
      </div>
        
    );
}

export default NavbarVazia;