import { Link, useRouteError } from "react-router-dom";

import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <body id="error-page" class="nalo">
        <div class="stars">
          <div class="custom-navbar">
            <div class="brand-logo"></div>
            <div class="navbar-links"></div>
          </div>
          <div class="central-body">
            <h2 className="ErrorMessage">
              <i>{error.statusText || error.message}</i>
              <br />
              <i>{error.status}</i>
            </h2>
            <Link className="btn-go-home" to={"/"}>
              GO BACK HOME
            </Link>
          </div>
          <div class="objects">
            <img
              alt="lora"
              class="object_rocket"
              src="http://salehriaz.com/404Page/img/rocket.svg"
              width="40px"
            />
            <div class="earth-moon">
              <img
                alt="lora"
                class="object_earth"
                src="http://salehriaz.com/404Page/img/earth.svg"
                width="100px"
              />
              <img
                alt="lora"
                class="object_moon"
                src="http://salehriaz.com/404Page/img/moon.svg"
                width="80px"
              />
            </div>
            <div class="box_astronaut">
              <img
                alt="lora"
                class="object_astronaut"
                src="http://salehriaz.com/404Page/img/astronaut.svg"
                width="140px"
              />
            </div>
          </div>
          <div class="glowing_stars">
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
          </div>
        </div>
      </body>
    </div>
  );
}
