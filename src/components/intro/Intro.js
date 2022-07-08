import "./intro.css";
import ReactLogo from "../../img/react-1-logo.png";
import HTMLLogo from "../../img/html-logo-png-3.png";
import CSSLogo from "../../img/OIP.png";
import JSLogo from "../../img/R.png";
import BootstrapLogo from "../../img/R (1).png";


const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Ben Cruise</h1>
          <div className="i-title">
          </div>
          <p className="i-desc">
            I design and develop front end web interfaces for the purpose of assembling web applications.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <div className="logos">
          <img src={ReactLogo} alt="React" className="reactLogo"></img>
          <img src={HTMLLogo} alt="HTML" className="HTMLLogo"></img>
          <img src={JSLogo} alt="JS" className="JSLogo"></img>
          <img src={CSSLogo} alt="CSS" className="CSSLogo"></img>
          <img src={BootstrapLogo} alt="Bootstrap" className="BootstrapLogo"></img>
        </div>
      </div>
    </div>
  );
};

export default Intro;