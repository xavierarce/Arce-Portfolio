import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Containers/App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import { RouterProvider, createHashRouter } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/Contact/Contact";
import ErrorPage from "./Routes/ErrorPage";
import About from "./components/About/About";
import { LanguageProvider } from "./Context/LanguageContext";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <LanguageProvider>
        <App />
      </LanguageProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <ContactForm />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
