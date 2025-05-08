import { Link } from "react-router-dom";
import "./NavBar.css";
import { useLanguageContext } from "../../Context/LanguageContext";
import { Button, Flex } from "antd";

const tradKey = "NavBar";

const NavBar = () => {
  const { setLanguage, translate } = useLanguageContext();
  const { writeTrad } = translate(tradKey);

  return (
    <nav className="NavBar">
      <ul className="List">
        <li>
          <Link className="Item" to="">
            {writeTrad("Home")}
          </Link>
        </li>
        <li>
          <Link to="projects">{writeTrad("Projects")}</Link>
        </li>
        <li>
          <Link to="about">{writeTrad("About")}</Link>
        </li>
        <li>
          <Link className="active" to="contact">
            {writeTrad("Contact")}
          </Link>
        </li>
        <li className="ContactItem">
          <Flex align="center" gap="small" justify="space-between">
            <Button onClick={() => setLanguage("en")}>{writeTrad("En")}</Button>
            <Button onClick={() => setLanguage("fr")}>{writeTrad("Fr")}</Button>
          </Flex>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
