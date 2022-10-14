import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>Copyright © {year}.  All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;