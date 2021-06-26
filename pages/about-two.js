import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarThree';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/AboutTwo/AboutUsContent';
import ProfessionalSolutions from '../components/HomeFive/ProfessionalSolutions';
import PartnerSlider from '../components/AboutTwo/PartnerSlider';
import CustomerFeedback from '../components/HomeFive/CustomerFeedback';
import Team from '../components/Common/Team';
import Footer from '../components/Layouts/Footer';

class AboutTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="About Us" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="About Us" 
                    bgImgClass="item-bg1" 
                />  
                <AboutUsContent />
                <ProfessionalSolutions />
                <Team />
                <PartnerSlider />
                <CustomerFeedback />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default AboutTwo;