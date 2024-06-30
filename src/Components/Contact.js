import React, { useState } from "react";
import contactImage from "../IMG/CAR-1.png";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace with your Formspree form endpoint
        const formEndpoint = "https://formspree.io/f/movaqazg";

        fetch(formEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => {
            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                alert("Failed to send message");
            }
        })
        .catch((error) => {
            console.error("Error sending message:", error);
            alert("Failed to send message");
        });
    };

    return (
        <>
            {/* Page Header Start */}
            <div className="container-fluid page-header mb-5 p-0 contact-Img">
                <div className="container-fluid page-header-inner bg-transparent py-5">
                    <div className="container text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown" style={{ fontWeight: "700" }}>Contact</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><a href="Home">Home</a></li>
                                {/* <li className="breadcrumb-item"><a href="/">Pages</a></li> */}
                                <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Page Header End */}

            {/* Contact Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-primary text-uppercase">Contact Us</h6>
                        <h1 className="mb-5">Contact For Any Query</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-md-4">
                                    <div className="bg-light d-flex flex-column justify-content-center p-4">
                                        <h5 className="text-uppercase">Booking</h5>
                                        <p className="m-0"><i className="fa fa-envelope-open text-primary me-2 p-2"></i>book@example.com</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-light d-flex flex-column justify-content-center p-4">
                                        <h5 className="text-uppercase">General</h5>
                                        <p className="m-0"><i className="fa fa-envelope-open text-primary me-2 p-2"></i>info@example.com</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="bg-light d-flex flex-column justify-content-center p-4">
                                        <h5 className="text-uppercase">Technical</h5>
                                        <p className="m-0"><i className="fa fa-envelope-open text-primary me-2 p-2"></i>tech@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeIn mt-5" data-wow-delay="0.1s">
                            <img src={contactImage} alt="Contact" className="img-fluid rounded-start" />
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="wow fadeInUp" data-wow-delay="0.2s">
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "100px" }} value={formData.message} onChange={handleChange}></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </>
    )
}

export default Contact;
