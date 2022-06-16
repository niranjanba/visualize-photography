import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

function Footer() {
    return (
        <footer className="footer">
            <div className="social">
                <h2>follow us</h2>
                <ul>
                    <li>
                        <a href="https://instagram.com/_visualize_photography_?igshid=YmMyMTA2M2Y=">
                            <AiFillInstagram className="instagram" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="about">
                <h2>About us</h2>
                <p>
                    Visualize Photography is a photography studio in Bengaluru.
                    We make photoshoot for all types of special occasions
                </p>
                <div className="contact">
                    <h2>Contact</h2>
                    <p>
                        Phone: <a href="tel:9980378466">9980378466</a>
                    </p>
                    <p>
                        Email:{" "}
                        <a href="mailto:visualize.photos@gmail.com">
                            visualize.photos@gmail.com
                        </a>
                    </p>
                </div>
            </div>

            <div className="company">
                <div className="logo"></div>
                <p>
                    Copyright © 2020-2022 Visualize Photography Studios. <br />
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
