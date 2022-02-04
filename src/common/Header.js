import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './header.css';
const Header = () => {
	return(
		<Container as="header" fluid className="p-0"  >
			<Container fluid className="topHeader d-flex justify-content-end">
				<Nav.Link href="#link" className="covid">Covid-19 info</Nav.Link>
			</Container>
			<Container>
				<Navbar expand="lg">
					<Navbar.Brand href="#home">
						<img src="assets/images/logo.png" alt="" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav as="ul" className="ms-auto">
							<li className="menu-item">
								<Nav.Link href="#home">Home</Nav.Link>
							</li>
							<li className="menu-item">
								<Nav.Link href="#link">Lab</Nav.Link>
							</li>
							<li className="menu-item">
								<Nav.Link href="#link">Scan</Nav.Link>
							</li>
							<li className="menu-item">
								<Nav.Link href="#link">Film</Nav.Link>
							</li>
							<li className="menu-item">
								<Nav.Link href="#link">Cameras</Nav.Link>
							</li>
							<li>
								<NavDropdown title="Products" id="basic-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
								</NavDropdown>
							</li>
							<li>
								<Nav.Link href="#link">Contact</Nav.Link>
							</li>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</Container>
	);
};

export default Header;
