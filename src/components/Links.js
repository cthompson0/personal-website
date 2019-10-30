import React, { Component } from 'react';
import githubLogo from '../images/github_social.png';
import linkedinLogo from '../images/linkedin_social.png';
import emailLogo from '../images/email_social.png';
import '../App.css'

export class Links extends Component {
    render() {
        return(
            <div>
                <a href='https://github.com/cthompson0'>
                    <img className="contact" src={githubLogo} alt="github contact" />
                </a>
                <a href='https://www.linkedin.com/in/chuckdthompson/'>
                    <img className="contact" src={linkedinLogo} alt="linkedin contact" />
                </a> 
                    <img className="contact" src={emailLogo} alt="email contact" />
            </div>
        )
    }
}

export default Links
