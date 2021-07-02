import React from 'react';

const AboutUsContent = () => {
    return (
        <div className="why-choose-us-area ptb-110 pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="why-choose-us-image text-center">
                            <img src="/images/imme/teamIMME2.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="why-choose-us-content">
                            <h2>About Us</h2>
                            <p>IMME Australia is proudly to be one of the leading companies in providing the education support and technical solutions. We create and maintain a range of high-quality solutions and services in Education and Technology. </p>
                            <p>IMME Australia provides:</p>
                            
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-why-choose-us-box">
                                        <h3>Educational Counseling</h3>
                                        <p>IMME Australia is confident to provide client the best educational service based on our deep knowledge, experience and wide network with Australian schools.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-why-choose-us-box">
                                        <h3>Pre-Departure Orientation</h3>
                                        <p>Comprehensive pre and post arrival orientation program to ensure clients have the opportunity to learn and understand the issues relating to living and studying in Australia.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-why-choose-us-box">
                                        <h3>Application Guidance</h3>
                                        <p>Once the schools are ticked by you and family, IMME Australia will assist you to understand and prepare all the necessary documents for a successful admission application and then the visa application to be ready to enter in Australia.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-why-choose-us-box">
                                        <h3>Accommodation Service</h3>
                                        <p>IMME Australia offers a variety of high standard student accommodation to suit different budgets and needs. IMME Australia will help in finding accommodation and understanding lease and tenancy conditions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsContent;