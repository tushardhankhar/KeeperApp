import React from "react";

var date = new Date();
var currentYear = date.getFullYear();
function Footer(){
    return (
        <footer>
            <p>copyright © {currentYear}</p>
        </footer>
    )
}

export default Footer;