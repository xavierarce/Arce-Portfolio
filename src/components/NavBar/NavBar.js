import "./NavBar.css";

const NavBar = ({
  onAboutClick,
  onHomeClick,
  onProjectsClick,
  onContactClick,
}) => {
  return (
    <nav className="NavBar">
      <ul className="List">
        <li className="Item">
          <a href="#home" onClick={onHomeClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={onAboutClick}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={onProjectsClick}>
            Projects
          </a>
        </li>
        <li className="ContactItem">
          <a className="active" href="#contact" onClick={onContactClick}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
