import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="about-area pt-0 ptb-110">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src="/images/imme/HomePhoto2ok.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <h2>
Let's Make Our Dream Come True Together</h2>
                            <p>IMME Australia’s strategic objective is to support improved teacher, trainer, and student outcomes, enhanced the ways to deliver the lessons and assessments. </p>

                            <ul className="features-list">
                                <li><span><i className="flaticon-tick"></i> Achieving Excellence</span></li>
                                <li><span><i className="flaticon-tick"></i> Happy Learning</span></li>
                                <li><span><i className="flaticon-tick"></i> Multicultural Community</span></li>
                                <li><span><i className="flaticon-tick"></i> Learn To Achieve</span></li>
                                <li><span><i className="flaticon-tick"></i> Gather To Learn</span></li>
                            </ul>

                            <Link href="/about-two">
                                <a className="btn btn-primary">Discover More</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape-img1"><img src="/images/shape/shape1.png" alt="image" /></div>
            <div className="shape-img3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape-img4"><img src="/images/shape/shape4.svg" alt="image" /></div>
        </div>
    )
}

export default AboutUs;