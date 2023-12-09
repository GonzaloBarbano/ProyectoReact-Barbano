import React from "react";
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-dark">
                <h5>Creado por Gonzalo Barbano Sumay</h5>
                <h5>Redes</h5>
                <div>
                    <a href="https://www.instagram.com/gonzalobarbano/"><FontAwesomeIcon icon={faInstagram} className="fa-2x iconRedes"/></a>
                    <a href="https://github.com/dashboard"><FontAwesomeIcon icon={faGithub} className="fa-2x iconRedes"/></a>
                </div>
        </footer>
    )
}

export default Footer;