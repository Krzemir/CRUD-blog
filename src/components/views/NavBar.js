
import { NavLink} from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
     return (
        <>
            <Navbar bg="primary" variant="dark" className="rounded mt-4 mb-4">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">Blog.app</Navbar.Brand>
                    <div className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
     );
}

export default NavBar;