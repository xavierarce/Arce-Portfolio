import NavBar from "../components/NavBar/NavBar";
import "./App.css";
import "../i18n"; // <-- this initializes everything
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="contentApp">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
