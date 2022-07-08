import "./about.css";
import Award from "../../img/award.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CV from "../CV/CV";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg" style={{opacity: '0.5'}}></div>
        <div className="a-card bg" style={{marginLeft: '50px', marginTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div >
            <Link to="/CV" className="resumeDiv" style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faFileLines} class="a-faFileLines" />
            <span className="a-resume">Curriculum Vitae</span></Link>
          </div>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">
          I am seeking to launch a career and further my experience building web applications and services. I am passionate about learning and developing my skill set while tackling more complex issues, for the purpose of pushing my capabilities.
        </p>
        <div className="arrowText">
          <FontAwesomeIcon icon={faAnglesLeft} class="a-faAnglesLeft" />
          <p style={{fontWeight: '600', marginLeft: '15px'}}>
            Please refer to my CV on the left.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;