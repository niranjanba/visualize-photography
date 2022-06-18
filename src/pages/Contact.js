import { useState, useEffect, useRef } from "react";
// import axios from "axios";
import Loading from "../components/loading";
import ShowModal from "../components/modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Contact.css";
import { ImLocation } from "react-icons/im";
import { MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import logo from "../images/logo.png";

function Contact() {
    const makePhoneCall = () => {
        window.open("tel:9980378466");
    };

    const initialState = {
        name: "",
        phone: "",
        email: "",
        message: "",
        service: "",
    };
    const [formValues, setformValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [isMessageError, setIsMessageError] = useState(false);

    const formRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value });
        if (isSubmit) validate(formValues);
    };

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setIsShowModal(true);
            }, 1000);
            const bodyData = {
                name: formValues.name,
                phone: formValues.phone,
                email: formValues.email,
                message: formValues.message,
                service: formValues.service,
            };
            setformValues(initialState);
            fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode({ "form-name": "contact", ...bodyData }),
            })
                .then(() => console.log("submitter"))
                .catch((error) => alert(error));
        }
    }, [formErrors]);

    const validate = (value) => {
        const errors = {};
        const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!value.name) {
            errors.name = "Please Enter your Name!";
        }
        if (!value.phone) {
            errors.phone = "Please enter your phone number";
        } else if (!phoneRegex.test(value.phone)) {
            errors.phone = "Please enter valid phone number";
        }
        if (!value.email) {
            errors.email = "Please enter your email id";
        } else if (!emailRegex.test(value.email)) {
            errors.email = "Please enter valid email id";
        }
        if (!value.service) {
            errors.service = "Please select a service";
        }
        if (!value.message) {
            errors.message = "Write something to us";
        }
        return errors;
    };

    const setModal = () => {
        if (isMessageError) {
            return (
                <div>
                    <h4 style={{ color: "red" }}>Oops!</h4>
                    <h5>There was a problem.</h5>
                    <h6>Try Again</h6>
                </div>
            );
        }
        return (
            <div>
                <h3>Dress up, your Photographer is on the way! &#128521; </h3>
                <h4 style={{ color: "rgb(37, 158, 37)" }}>
                    Thank you for showing interest.
                </h4>
                <h5>
                    We have received your message, we'll get back to you as soon
                    as posible.
                </h5>
                <span className="modal-footers">- Visualize Photography</span>
            </div>
        );
    };
    return (
        <section id="contact" className="contact">
            {isLoading ? <Loading /> : ""}
            {isShowModal ? (
                <ShowModal isModal={setIsShowModal}> {setModal()} </ShowModal>
            ) : (
                ""
            )}
            <div className="wrapper" style={{ background: "#00000075" }}>
                <div className="container">
                    <div className="heading">
                        <img src={logo} alt="logo" style={{ width: "40%" }} />
                        <h2 className="h1 mb-3 mt-3 text-center underline">
                            Contact Us
                        </h2>
                        <h4>Let's Start a Conversation</h4>
                    </div>
                    <div className="row mobile-contact">
                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i>
                                        <ImLocation />
                                    </i>
                                    <h4>Location:</h4>
                                    <p>Bangalore, India</p>
                                </div>

                                <div className="email">
                                    <i>
                                        <HiMail />
                                    </i>
                                    <h4>Email:</h4>
                                    <p>
                                        <a
                                            style={{ color: "black" }}
                                            href="mailto:visualize.photos@gmail.com"
                                        >
                                            visualize.photos@gmail.com
                                        </a>
                                    </p>
                                </div>

                                <div className="phone">
                                    <i>
                                        <MdCall />
                                    </i>
                                    <h4>Call:</h4>
                                    <p onClick={makePhoneCall}>
                                        +91 9980378466
                                    </p>
                                </div>
                                <div className="mapouter">
                                    <div className="gmap_canvas">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7776.022428826883!2d77.53795736871126!3d12.971134063424596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNear%20XGCR%2B2W7%2C%202nd%20Cross%20%20Rd%2C%20Hoshalli%20Extension%2C%20Stage%201%2C%20%20%3F%20%20Vijayanagar%2C%20Bengaluru%2C%20Karnataka%20%20560040!5e0!3m2!1sen!2sin!4v1655308046291!5m2!1sen!2sin"
                                            width="310"
                                            height="300"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="
                                col-lg-7
                                d-flex
                                mt-5 mt-lg-0
                                align-items-stretch align-items-center
                            "
                        >
                            <form
                                className="php-email-form"
                                onSubmit={handleSubmit}
                                ref={formRef}
                                data-netlify={true}
                            >
                                <div className="form-row contact-details">
                                    <input
                                        type="hidden"
                                        name="form-name"
                                        value="contact"
                                    />
                                    <div className="form-group w-100">
                                        <label htmlFor="name">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            onChange={handleChange}
                                            value={formValues.name}
                                        />
                                        <div className="validate">
                                            {formErrors.name}
                                        </div>
                                    </div>
                                    <div className="form-group w-100">
                                        <label htmlFor="name">Your Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            onChange={handleChange}
                                            value={formValues.email}
                                        />
                                        <div className="validate">
                                            {formErrors.email}
                                        </div>
                                    </div>
                                    <div className="form-group w-100">
                                        <label htmlFor="name">
                                            Your Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone"
                                            id="phone"
                                            onChange={handleChange}
                                            value={formValues.phone}
                                        />
                                        <div className="validate">
                                            {formErrors.phone}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Message</label>
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        id="message"
                                        rows="10"
                                        onChange={handleChange}
                                        value={formValues.message}
                                    ></textarea>
                                    <div className="validate">
                                        {formErrors.message}
                                    </div>
                                </div>
                                <select
                                    id="service"
                                    className="form-select"
                                    aria-label="Default select example"
                                    name="service"
                                    defaultValue="Select Service"
                                    onChange={handleChange}
                                >
                                    <option value="Select Service" disabled>
                                        Select Service
                                    </option>
                                    <option value="wedding photography">
                                        Wedding Photography
                                    </option>
                                    <option value="Pre Wedding Photoshoot">
                                        Pre-Wedding Photography
                                    </option>
                                    <option value="birthday photography">
                                        Birthday Photography
                                    </option>
                                    <option value="kids photography">
                                        Kids Photography
                                    </option>
                                    <option value="events photography">
                                        Events Photography
                                    </option>
                                    <option value="traditional phtography">
                                        Traditional Photography
                                    </option>
                                    <option value="Baby shower">
                                        Baby shower Photoshoot
                                    </option>
                                    <option value="candid photoshoot">
                                        Candid Photoshoot
                                    </option>
                                </select>
                                <div className="validate">
                                    {formErrors.service}
                                </div>
                                <div className="text-center">
                                    <button className="submit" type="submit">
                                        Request a callback
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
