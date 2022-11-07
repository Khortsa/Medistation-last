import React from "react";
import { Link } from "react-router-dom";
import Faq from "../pages/Faq";


const Footer = () => {
    return (
        <footer >
            <p>All rights reserved @MediStation</p>
            <a href="mailto:khortsa2021@gmail.com"><img src='./icons/email.png' className='pe-2' alt='an email icon'/></a>
            {/* <Faq path="/faq"/> */}<Link to="/faq"><img src='./icons/faq.png' className='pe-2' alt='a faq icon'/></Link>
            <a href="instagram.com/medistation"><img src='./icons/instagram.png' className='pe-2' alt='an instagram icon'/></a>
            
       </footer>
    )
};

export default Footer;
