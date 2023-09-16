import React from "react";
import logo from "../img/logoQuad.png";

import "./home.css";

function Home() {
  return (
    <div className="h">
      <div className="h-wrapper">
        <div className="h-logo">
          <img src={logo} alt="" className="logoAth" />
        </div>
        <h1>Materie prime alimentari per la produzione di integratori</h1>
        <div className="h-top">
          <div className="h-top-left">
            <p>
              <b>Qualità</b>
            </p>
          </div>
          <div className="h-top-right">
            <p>
              <b>Prezzi</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
