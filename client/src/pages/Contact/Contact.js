import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, message } = formData;

    if (!fname || !lname || !email || !mobile || !message) {
      toast.error("All fields are required");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Invalid email");
      return;
    }

    try {
      const response = await fetch(
        `https://ayush-singh-rouge.vercel.app/api/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fname, lname, email, mobile, message }),
        }
      );

      const data = await response.json();

      if (response.status === 201) {
        toast.success("Your response has been submitted");
        setFormData({
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        toast.error(data.error || "Error submitting the form");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting the form");
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="container mb-3 contact">
        <h2 className="text-center ">CONTACT WITH</h2>

        <div className="container mt-2">
          <div className="row justify-content-center">
            <h6 className="text-center">
              <a
                href="https://www.linkedin.com/in/ayush-singh-a06b4922a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin color="blue" size={30} className="ms-2" />
              </a>
              <a
                href="https://github.com/ayushks150"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub color="black" size={30} className="ms-2" />
              </a>
              <a
                href="https://www.instagram.com/kumar_aayush00/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram color="blue" size={30} className="ms-2" />
              </a>
            </h6>
            <div className="text-center w-100 my-3">
              <span>
                <b>----------------------OR----------------------</b>
              </span>
            </div>
          </div>
          <Form className="row mt-2" onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3 col-lg-6 col-md-6 col-sm-12"
              controlId="formBasicFname"
            >
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 col-lg-6 col-md-6 col-sm-12"
              controlId="formBasicLname"
            >
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 col-lg-6 col-md-6 col-sm-12"
              controlId="formBasicEmail"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 col-lg-6 col-md-6 col-sm-12"
              controlId="formBasicMobile"
            >
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 col-12"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" className="col-lg-6 btt" type="submit">
                Submit
              </Button>
            </div>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
