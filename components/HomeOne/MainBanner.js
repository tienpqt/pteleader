import React, { Component } from 'react';
import Link from 'next/link';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="main-banner-content">
                                <h1>PTE Leader Training Platform </h1>
                                <p>With a team of experienced professional PTE trainers, we can guide you step-by-step on how to improve your skills and achieve your desirable scores. We are proud to be one of the best online coaching platform in Australia and Vietnam.</p>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="btn btn-primary">Schedule A Class</a>
                                    </Link>

                                    <Link href="/contact">
                                        <a className="optional-btn">Free Test Level</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="featured-services-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-featured-services-box">
                                    <div className="icon">
                                        <i className="flaticon-robot"></i>
                                    </div>

                                    <h3>
                                        <Link href="/service-details">
                                            <a>Online & Offline Training Courses</a>
                                        </Link>
                                    </h3>
                                    <p>PTE Leader provides an online coaching platform that suit individual learner’s needs with excellent materials and coaching guides.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-featured-services-box">
                                    <div className="icon">
                                        <i className="flaticon-artificial-intelligence"></i>
                                    </div>

                                    <h3>
                                        <Link href="/service-details">
                                            <a>MOCK Test Platform</a>
                                        </Link>
                                    </h3>
                                    <p>Designed to boost your confidence by providing not only the same format and interface as in the actual PTE exam but also utilizing real PTE questions.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-featured-services-box">
                                    <div className="icon">
                                        <i className="flaticon-machine-learning"></i>
                                    </div>

                                    <h3>
                                        <Link href="/service-details">
                                            <a>Best PTE Training Platform</a>
                                        </Link>
                                    </h3>
                                    <p>The platform will give you a complete time-based analytics along with your score card to evaluate your performance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;