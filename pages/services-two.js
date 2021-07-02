import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarThree';
import PageBanner from '../components/Common/PageBanner';
import Services from '../components/HomeTwo/Services';
import Footer from '../components/Layouts/Footer';

class ServicesTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Services Two" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Services Two" 
                    bgImgClass="item-bg1" 
                />  
                <Services />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServicesTwo;