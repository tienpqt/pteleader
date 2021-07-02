import React from 'react';
import Link from 'next/link';

const FunFacts = () => {
    return (
        <div className="fun-facts-area ptb-110">
            <div className="container">
                <div className="section-title">
                    <h2>We have 5000+ Study Materials Downloadable </h2>
                    <p>We take pride in being one of the best online coaching platforms located in Australia and Vietnam because we want to give everyone easy access to learning.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-6 col-sm-3 col-md-3">
                        <div className="single-funfacts">
                            <h3>5000 <span className="sign-icon">+</span></h3>
                            <p>Study Materials</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-3 col-md-3">
                        <div className="single-funfacts">
                            <h3>100 <span className="sign-icon">+</span></h3>
                            <p>Courses</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-3 col-md-3">
                        <div className="single-funfacts">
                            <h3>300 <span className="sign-icon">+</span></h3>
                            <p>Subcriptions</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-3 col-md-3">
                        <div className="single-funfacts">
                            <h3>50 <span className="sign-icon">+</span></h3>
                            <p>Contributors</p>
                        </div>
                    </div>
                </div>

                <div className="contact-cta-box">
                    <h3>Have any question about us?</h3>
                    <p>Don't hesitate to contact us.</p>

                    <Link href="/contact">
                        <a className="btn btn-primary">Contact Us<span></span></a>
                    </Link>
                </div>
            </div>

            {/* Shape Images  */}
            <div className="shape-img1"><img src="/images/map.png" alt="image" /></div>
            <div className="shape-img3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape-img2"><img src="/images/shape/shape2.svg" alt="image" /></div>
            <div className="shape-img5"><img src="/images/shape/shape5.svg" alt="image" /></div>
            <div className="shape-img4"><img src="/images/shape/shape4.svg" alt="image" /></div>
            <div className="dot-shape1"><img src="/images/shape/dot1.png" alt="image" /></div>
            <div className="dot-shape2"><img src="/images/shape/dot3.png" alt="image" /></div>
        </div>
    )
}

export default FunFacts;