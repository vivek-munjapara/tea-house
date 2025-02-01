'use client'
import Link from 'next/link';
//import { FaUserAlt } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "next/image";
import logo from "../../../public/logo.png"
import { useState } from 'react';


const Navmenu = ({ data }) => {
	const mainmenu = data.mainmenu;
	const mainsubmenu = data.mainsubmenu;
	//console.log(mainsubmenu.pages)
	const [expanded, setExpanded] = useState(false);
	const closeNav = () => setExpanded(false);
	return (
		<Container>
			{/* {data.map((item)=>item)} */}
			<Navbar expand="lg" className="bg-white py-2 py-lg-0" expanded={expanded}	>
				<Link href="/" className='navbar-brand' onClick={closeNav}>
					<Image src={logo} width='170' height={'135'} alt="logo" />
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto me-0'
					onClick={() => setExpanded(!expanded)} />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						{mainmenu.slice(0, 4).map((item, i) =>
							<Link href={`/` + (item.linkName === 'home' ? "" : item.linkName)} key={i} className='nav-item nav-link' onClick={closeNav}>{item.linkName}</Link>
						)}
						<NavDropdown title="More" id="basic-nav-dropdown">
							{mainsubmenu.pages.map((item, i) =>
								<NavDropdown.Item key={i} as={Link} href={`/` + item.replace(/ /g, '-')} className='text-dark'
									onClick={closeNav}>
									{item}
								</NavDropdown.Item>
							)}
						</NavDropdown>
						{mainmenu.slice(5, 6).map((item, i) =>
							<Link href={`/` + (item.linkName === 'home' ? "" : item.linkName)} className='nav-item nav-link' key={i} onClick={closeNav}>{item.linkName}</Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	)
}

export default Navmenu

