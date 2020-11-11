import React from "react";
import HeaderSection from "../common/HeaderSection";
import Navbar from "../Page/Navbar";
import ContactForm from "./ContactForm";
import Footer from "../Page/Footer";
function Contact() {
  return (
    <div className='Contact'>
      <HeaderSection
        title='Contact Us'
        info='Have any questions or comments? Interested in working with us? Let us know!'
      />
      <ContactForm />
      
      <Footer />
    </div>
  );
}

export default Contact;
