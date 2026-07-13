
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "about",
    "experience",
    "skills",
    "projects",
    "certificates",
    "contact",
  ];

  return (
    <header className={scrolled ? "navbar navbar-scroll" : "navbar"}>
      <div className="navbar-container">

        <a href="#hero" className="logo">
          MK
        </a>

        <nav className={menuOpen ? "nav active" : "nav"}>

          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={activeSection === link ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}

        </nav>

        <div className="nav-buttons">

          <a
            href="/Marmik Korat Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            Resume
          </a>

          <a
            href="https://linkedin.com/in/marmik-korat-25472a234"
            target="_blank"
            rel="noreferrer"
            className="linkedin-btn"
          >
            LinkedIn
          </a>

        </div>

        <div
          className={menuOpen ? "hamburger active" : "hamburger"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
import "./Navbar.css";
