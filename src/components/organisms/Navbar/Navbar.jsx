import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Navbar, Nav, Container } from "react-bootstrap";
import LanguageSwitcher from "../../atoms/LanguageSelector/LanguageSelector";
import Sidebar from "../Sidebar/Sidebar";
import "./navbar.css";

export default function CustomNavbar() {
    const { translations } = useLanguage();
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => setShowSidebar((prev) => !prev);
    const closeSidebar = () => setShowSidebar(false);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src="/images/logo.png" alt="Logo" className="img-fluid" height={40} />
                    </Navbar.Brand>

                    {/* Desktop links */}
                    <Navbar.Collapse className="d-none d-lg-flex justify-content-between">
                        <Nav className="me-auto">
                            {["about", "career", "projects", "services", "contact"].map((route) => (
                                <Nav.Link as={Link} to={`/${route}`} key={route}>
                                    {translations[route]}
                                </Nav.Link>
                            ))}
                        </Nav>
                        <LanguageSwitcher />
                    </Navbar.Collapse>

                    {/* Mobile toggle */}
                    <div className="d-lg-none">
                      <LanguageSwitcher />
                    </div>
                    <div className="d-lg-none d-flex align-items-center">
                        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleSidebar} />
                    </div>
                </Container>
            </Navbar>
            {/* Mobile sidebar */}
            <Sidebar title={translations.menu} show={showSidebar} onClose={closeSidebar}>
                {(close) =>
                    ["about", "career", "projects", "services", "contact"].map((route) => (
                        <Nav.Link
                            as={Link}
                            to={`/${route}`}
                            key={route}
                            onClick={close}
                            className="text-white"
                        >
                            {translations[route]}
                        </Nav.Link>
                    ))
                }
            </Sidebar>
        </>
    );
}
