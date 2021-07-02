import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarThree';
import PageBanner from '../components/Common/PageBanner';
import ContactFormContent from '../components/Contact/ContactFormContent';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Contact" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Contact" 
                    bgImgClass="item-bg3" 
                />  
                <ContactFormContent />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Contact;