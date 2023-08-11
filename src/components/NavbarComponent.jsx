import { Navbar, Container, Nav } from "react-bootstrap"
import ibox_logo from "../img/ibox_logo.png"

const NavbarComponent = () => {
  return (
    <div>
        <Navbar bg="black" data-bs-theme="dark" width={30} height={10}>
        <Container>
          <Navbar.Brand href="HomePage">
            <img src={ibox_logo} alt="logo-ibox" width={88} height={39}></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#iphone" className="iphone">iPhone</Nav.Link>
            <Nav.Link href="#ipad" className="fw-bold">iPad</Nav.Link>
            <Nav.Link href="#watch" className="fw-bold">Watch</Nav.Link>
            <Nav.Link href="#mac" className="fw-bold">Mac</Nav.Link>
            <Nav.Link href="#aksesoris" className="fw-bold">Aksesoris</Nav.Link>
            <Nav.Link href="#event&promo" className="fw-bold">Event&Promo</Nav.Link>
            <Nav.Link href="#bisnis" className="fw-bold">Bisnis</Nav.Link>
            <Nav.Link href="#layanan" className="fw-bold">Layanan</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent