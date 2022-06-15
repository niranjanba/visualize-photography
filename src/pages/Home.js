import React from "react";
import { Link } from "react-router-dom";
import GalleryImageViewer from "../components/GalleryImageViewer";

function Home() {
    return (
        <>
            {/* hero section */}
            <section className="hero-section">
                <div className="hero-wrapper">
                    <div className="hero-title">
                        <div className="hero-heading">
                            <h1>Looking for Best&nbsp;</h1>
                            <ul className="dynamic-text">
                                <li>
                                    <span>Kids</span>
                                </li>
                                <li>
                                    <span>Events</span>
                                </li>
                                <li>
                                    <span>Wedding</span>
                                </li>
                                <li>
                                    <span>Birthday</span>
                                </li>
                            </ul>
                            <h1>&nbsp;Photographer</h1>
                        </div>
                        <p>
                            We at Visualize Photography are waiting to capture
                            every Amazing moment of your special occasion.
                        </p>
                    </div>
                </div>
            </section>
            {/* prortfolio */}
            <section className="portfolio-section">
                <div className="title">
                    <h1>Portfolio</h1>
                    <p>Take a look at my work</p>
                </div>
                <div className="image-grid">
                    <GalleryImageViewer showStaredOnly={true} />
                </div>
                <button className="view-more">
                    <Link to={"/gallery"}>View More</Link>
                </button>
            </section>

            {/* services section */}
            <section className="services-section">
                <div className="title">
                    <h1>Services</h1>
                    <p>The range of services we provide</p>
                </div>
                <div className="services">
                    <div className="service wedding">
                        <div className="typography">
                            <h1>Wedding Photography</h1>
                            <h4>Make every moment of your Wedding memorable</h4>
                        </div>
                    </div>
                    <div className="service prewedding">
                        <div className="typography">
                            <h1>Pre Wedding Photography</h1>
                            <h4>
                                Make every moment of your pre wedding memorable
                            </h4>
                        </div>
                    </div>
                    <div className="service birthday">
                        <div className="typography">
                            <h1>Birthday Photography</h1>
                            <h4>
                                Beautiful photography is a must when it comes to
                                planning your big day, so we’ve rounded up the
                                best Birthday Photography
                            </h4>
                        </div>
                    </div>
                    <div className="service kids">
                        <div className="typography">
                            <h1>Kids Photography</h1>
                            <h4>Hire a best kids Photographer</h4>
                        </div>
                    </div>
                    <div className="service traditional">
                        <div className="typography">
                            <h1>Traditional Photography and Videography</h1>
                            <h4>Make every moment of you wedding memorable</h4>
                        </div>
                    </div>
                    <div className="service candid">
                        <div className="typography">
                            <h1>Candid Photography and Videography</h1>
                            <h4>
                                capture the best candid moments of your big day.
                            </h4>
                        </div>
                    </div>
                    <div className="service baby-shower">
                        <div className="typography">
                            <h1>Baby Shower Photography</h1>
                            <h4>
                                Hire Best Baby Shower Photographers in Bangalore
                            </h4>
                        </div>
                    </div>
                    <div className="service corporate">
                        <div className="typography">
                            <h1>Corporate Events Photography</h1>
                            <h4>
                                Looking for Event Phtographer? you are at the
                                right place.
                            </h4>
                        </div>
                    </div>
                </div>
                <button className="view-more">
                    <Link to={"/contact"}>Contact Us</Link>
                </button>
            </section>
        </>
    );
}

export default Home;
