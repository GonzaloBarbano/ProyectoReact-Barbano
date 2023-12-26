import { Container, Navbar, Dropdown } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to= "/" > HOME </NavLink>
                <Dropdown className="bg-dark border-danger">
                    <Dropdown.Toggle className="bg-dark border-danger" variant="success" id="dropdown-basic">
                        Categorías
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/category/calzados">Calzados</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/category/ropa">Ropa</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <CartWidget />
            </Container>
        </Navbar>
    );
};
export default NavBar;