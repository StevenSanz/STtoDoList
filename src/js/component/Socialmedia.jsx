import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export const Socialmedia = () => {

return(
    <div>
        <div>
            <p className="text-white bounce">Social network</p>
        </div>
        <div className="d-flex justify-content-center">
            <div>
                <a href="https://github.com/StevenSanz" target="_blank"><FontAwesomeIcon icon={faPaperPlane} bounce/></a>
            </div>
            <div className="ms-2">
                <a href="https://www.linkedin.com/in/steven-sanz-grau/" target="_blank"><FontAwesomeIcon icon={faLinkedin} bounce/></a>
            </div>
        </div>
    </div>
        //"fa-brands faGithub"
        // <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        // <FontAwesomeIcon icon={faLinkedin} />
)
}