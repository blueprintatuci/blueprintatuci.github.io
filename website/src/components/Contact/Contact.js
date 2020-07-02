import React from "react";
import HeaderSection from "../common/HeaderSection";
import Navbar from "../Page/Navbar";
import ContactForm from "./ContactForm";
import Footer from "../Page/Footer";
function Contact() {
  return (
    <div className='Contact'>
      <Navbar />
      <HeaderSection
        title='Contact Us'
        info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.'
      />
      <ContactForm />

      <Footer />
    </div>
  );
}

export default Contact;
