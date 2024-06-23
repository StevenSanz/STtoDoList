import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

export const Socialmedia = () => {

return(
        <div>
            <p className="text-white bounce">Social network</p>
            <a href="https://github.com/StevenSanz" target="_blank"><FontAwesomeIcon icon={faPaperPlane} bounce/></a>
        </div>
        //"fa-brands faGithub"
)
}