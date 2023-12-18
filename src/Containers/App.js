import NavBar from "../Components/NavBar/NavBar";
import "./App.css";
import { Outlet } from "react-router-dom";

  
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="contentApp">
      <Outlet/>
      </div>
    </div>
  );
}

export default App;
