import React, {useState} from 'react';
import "./CV.css";
import ReactLogo from "../../img/react-1-logo.png";
import HTMLLogo from "../../img/html-logo-png-3.png";
import CSSLogo from "../../img/OIP.png";
import JSLogo from "../../img/R.png";
import BootstrapLogo from "../../img/R (1).png";

const CV = () => {
    const [buttonChoice, setButtonChoice] = useState(0);

    const Details = () => {
        if (buttonChoice === 0) {
        return  (
                <div className="topInfo" style={{backgroundColor: 'white'}}>
                    <span className="topInfoText" style={{backgroundColor: 'white'}}>Ash, United Kingdom</span>
                    <span className="topInfoText" style={{backgroundColor: 'white'}}>07972 045233</span>
                    <span className="topInfoText" style={{backgroundColor: 'white'}}>ben_cruise@hotmail.co.uk</span>
                </div>)
        } else if (buttonChoice === 1) {
            return (
                <div className="personalStatement" style={{backgroundColor: 'white'}}>
                    <span className="personalStatementText" style={{backgroundColor: 'white'}}>Personal Statement</span>
                    <span className="spanText" style={{backgroundColor: 'white'}}>I have a professional and conscientious attitude towards my work, excellent analytical skills and attention to detail, a thorough understanding of business operations and a meticulous nature.</span>
                    <span className="spanText" style={{backgroundColor: 'white'}}>Driven, hard working, self taught and with a highly professional mindset, I am seeking to launch a career and further my experience building web applications and services. I am passionate about learning and developing my skill set while also tackling more complex issues, for the purpose of pushing my capabilities.</span>
                    <span className="spanText" style={{backgroundColor: 'white'}}>I learn quickly and always welcome additional duties, in order to learn and grow quickly into a role. Please see the Github link above for demonstration of the projects I have been building.</span>
                </div>) 
        } else if (buttonChoice === 2) {
            return (
                <div className="knowledge" style={{backgroundColor: 'white'}}>
                    <span className="knowledgeText" style={{backgroundColor: 'white'}}>Knowledge</span>
                        <li style={{backgroundColor: 'white'}}>React</li>
                        <li style={{backgroundColor: 'white'}}>HTML</li>
                        <li style={{backgroundColor: 'white'}}>CSS</li>
                        <li style={{backgroundColor: 'white'}}>JavaScript</li>
                        <li style={{backgroundColor: 'white'}}>Bootstrap</li>
                </div>    
            )
        } else if (buttonChoice === 3) {
            return (
                <div className="professionalExperience" style={{backgroundColor: 'white'}}>
                <span className="professionalExperienceText" style={{backgroundColor: 'white'}}>Professional Experience</span>
                    <div className="jobDescription" style={{backgroundColor: 'white'}}>
                        <span className="jobTitle" style={{backgroundColor: 'white'}}>Front-End Web Developer</span>
                        <div className="companyTime" style={{backgroundColor: 'white'}}><span className="company" style={{backgroundColor: 'white'}}>Self Taught</span><span style={{backgroundColor: 'white'}} className="jobDate">March 2022 - Present</span></div>
                        <li className="jobList" style={{backgroundColor: 'white'}}>Implementing and designing front end web interfaces for the purpose of assembling web applications.</li>
                        <li className="jobList" style={{backgroundColor: 'white'}}>I am continuously looking for and working on projects that push my knowledge and experience up to the next level, to ensure exponential growth.</li>
                        <li className="jobList" style={{backgroundColor: 'white'}}>With the aim of beginning a career as a front-end web developer, I ensure that all code is clear and concise, as would be expected within an organisation and while coding with others, for the purpose of better business practises.</li>
                        <li className="jobList" style={{backgroundColor: 'white'}}>I have built a good knowledge of the processes required to build a web application, and use the knowledge and skills earnt to work on and practise building new applications every day.</li>
                    </div>
                    <div className="jobDescription" style={{backgroundColor: 'white'}}>
                        <span className="jobTitle" style={{backgroundColor: 'white'}}>Operations Assistant</span>
                        <div className="companyTime" style={{backgroundColor: 'white'}}><span className="company" style={{backgroundColor: 'white'}}>Please email or call for company details</span><span style={{backgroundColor: 'white'}} className="jobDate">March 2016 - Present</span></div>
                        <li className="jobList" style={{backgroundColor: 'white'}}>Redesigning Excel spreadsheet reports so that the reports can be updated, and data can be found quickly and efficiently. This has saved hours of time daily therefore enabling me to take on greater responsibilities, give quicker responses to clients and Sales Managers, and seek further ways to be efficient.</li>
                        <li className="jobList" style={{backgroundColor: 'white'}}>Using Excel at a very high standard, I design formulas within formulas in order to manipulate data, to give complex answers in one tab, rather than spending time using filters, multiple formulas or taking up space in Excel. Working with Excel has greatly improved my analytical abilities, and the enjoyment and growth I took from it was the catalyst for considering a career in front end web development.</li>
                        <li className="jobList" style={{backgroundColor: 'white'}}>Frequently using various Excel formulas has taught me to map data and detect any data discrepancies. This has helped when sending out our European daily sales report, stock statuses and transit statuses, amongst other reports.</li>
                        <li className="jobList" style={{backgroundColor: 'white'}}>Working within a rapidly growing and dynamic semiconductor industry I would handle all operation assistant level duties. I have been communicating with customers via email to answer operational queries, sending out daily reports and assisting Sales Managers and other departments when required.</li>
                    </div>
                    <div className="jobDescription" style={{backgroundColor: 'white'}}>
                        <span className="jobTitle" style={{backgroundColor: 'white'}}>Sales Administrator</span>
                        <div className="companyTime" style={{backgroundColor: 'white'}}><span style={{backgroundColor: 'white'}} className="company">Please email or call for company details</span><span style={{backgroundColor: 'white'}} className="jobDate">January 2016-March 2016 (three month contract)</span></div>
                        <li className="jobList" style={{backgroundColor: 'white'}}>I would be given large amounts of data and it would be my duty to establish whether the data was recent, correct and could help to establish potential leads.</li>
                        <li className="jobList" style={{backgroundColor: 'white'}}>Via LinkedIn, Google and telephone I would research new and existing companies to find new leads and tidy up the database, personally helping to grow the Weybridge office client base by a large percentage.</li>
                        <li className="jobList" style={{backgroundColor: 'white'}}>By finding new companies and leads I would determine management structures and company email formats to build new company information.</li>
                        <li className="jobList" style={{backgroundColor: 'white'}}>I was trusted from an early stage to add, remove and edit from the company database. This enabled me to further build the confidence I had in my analytical skills and attention to detail and grow as an individual in the workplace.</li>
                    </div>
                    <div className="jobDescription" style={{backgroundColor: 'white'}}>
                        <span className="jobTitle" style={{backgroundColor: 'white'}}>Receptionist</span>
                        <div className="companyTime" style={{backgroundColor: 'white'}}><span className="company" style={{backgroundColor: 'white'}}>Please email or call for company details</span><span style={{backgroundColor: 'white'}} className="jobDate">November 2014-November 2015</span></div>
                        <li className="jobList" style={{backgroundColor: 'white'}}>As a receptionist I would perform standard receptionist duties as well as dealing with various administrative and banking duties.</li>
                    </div>
                    <div className="jobDescription" style={{backgroundColor: 'white'}}>
                        <span className="jobTitle" style={{backgroundColor: 'white'}}>Waiter/Bar Staff</span>
                        <div className="companyTime" style={{backgroundColor: 'white'}}><span className="company" style={{backgroundColor: 'white'}}>Please email or call for company details</span><span style={{backgroundColor: 'white'}} className="jobDate">November 2011-November 2014 / Please email or call for company details (Part-time) October 2010-November 2011</span></div>
                        <li className="jobList" style={{backgroundColor: 'white'}}>Performing normal waiting and bar duties improved my attention to details and ability to multitask.</li>
                    </div>
                </div>
            )
        } else if (buttonChoice === 4) {
            return (
                <div className="educationDiv" style={{backgroundColor: 'white'}}>
                    <div className="jobDescription" style={{backgroundColor: 'white'}}>
                        <span className="jobTitle" style={{backgroundColor: 'white'}}>Education</span>
                        <div className="companyTime" style={{backgroundColor: 'white'}}><span className="company" style={{backgroundColor: 'white'}}>University of Brighton</span><span className="jobDate" style={{backgroundColor: 'white'}}>2007-2010</span></div>
                        <li className="jobList" style={{backgroundColor: 'white'}}>BA (Hons) Business Studies (2.2)</li>
                        <div className="companyTime" style={{backgroundColor: 'white'}}><span style={{backgroundColor: 'white'}} className="company">Hinchley Wood Sixth Form </span><span style={{backgroundColor: 'white'}} className="jobDate">2005-2007</span></div>
                        <li className="jobList" style={{backgroundColor: 'white'}}>BA (Hons) Business Studies (2.2)</li>
                        <div className="companyTime" style={{backgroundColor: 'white'}}><span className="company" style={{backgroundColor: 'white'}}>Hinchley Wood School and Brooklands College </span><span className="jobDate" style={{backgroundColor: 'white'}}>1999-2005</span></div>                        
                        <li className="jobList" style={{backgroundColor: 'white'}}>7 GCSEs including Maths (B), English Language (C), English Literature (C)</li>
                    </div>
                </div>
            ) 
        }   else if (buttonChoice === 5) {
            return (
                <span style={{backgroundColor: 'white'}} className="references">Reference information will be made available upon request.</span>  
            )
        }
    }

  return (<div style={{height: '98vh'}}>
    <div style={{backgroundColor: 'rgba(0, 128, 128, 0.1)', width: '100vw', marginLeft: '-9px', height: '100vh', marginTop: '-65px'}}>
        <div className="CVContainer" style={{backgroundColor: 'rgba(0, 128, 128, 0)'}}>
            <span className="topInfoText" style={{fontWeight: '700', fontSize: '50px', marginBottom: '25px', backgroundColor: 'rgba(0, 128, 128, 0)', marginTop: '25px'}}>Ben Cruise</span>
                <div className="CVLogoDiv">
                    <img src={ReactLogo} alt="React" className="CVReactLogo"></img>
                    <img src={HTMLLogo} alt="HTML" className="CVHTMLLogo"></img>
                    <img src={JSLogo} alt="JS" className="CVJSLogo"></img>
                    <img src={CSSLogo} alt="CSS" className="CVCSSLogo"></img>
                    <img src={BootstrapLogo} alt="Bootstrap" className="CVBootstrapLogo"></img>
                </div>
            <div className="CVOptions" style={{backgroundColor: 'rgba(0, 128, 128, 0)'}}>
                <div className="CVOptionsButtons" style={{backgroundColor: 'rgba(0, 128, 128, 0)'}}>
                    <button className="CVButton" onClick={() => setButtonChoice(0)}>Contact Details</button>
                    <button className="CVButton" onClick={() => setButtonChoice(1)}>Personal Statement</button>
                    <button className="CVButton" onClick={() => setButtonChoice(2)}>Knowledge</button>
                    <button className="CVButton" onClick={() => setButtonChoice(3)}>Professional Experience</button>
                    <button className="CVButton" onClick={() => setButtonChoice(4)}>Education</button>
                    <button className="CVButton" onClick={() => setButtonChoice(5)}>References</button>
                </div>
            </div>
            <Details />                         
        </div>
    </div>
    </div>
  )
}

export default CV