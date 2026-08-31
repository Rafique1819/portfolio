import React from "react";
import "./Home.css";
import man from "../../assets/man.png";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div id="home">
      <div className="lefthome">
        <div className="details">
          <div className="line1">I'M</div>
          <div className="line2">RAFIQUE AHAMAD</div>
          <div className="line3">
            <TypeAnimation
              sequence={[
                "WEB DEVELOPER",
                1000,
                "CODER",
                1000,
                "SOFTWARE DEVELOPER",
                1000,
              ]}
              speed={10}
              deletionSpeed={30}
              repeat={Infinity}
            />
          </div>
          <button>HIRE ME</button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  );
}

export default Home;
