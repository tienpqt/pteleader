import React from 'react';
import Link from 'next/link';

const OurFeaturedSolutions = () => {
    return (
        <div className="featured-solutions-area ptb-110">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services</h2>
                    <p>IMME Australia commits to our clients to deliver high and consistent levels of educational services and comply with professional standards. Putting the needs and success of our clients as the first priority, we dedicatedly offer</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-featured-solutions-box">
                            <div className="icon">
                                <img src="/images/icon1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/index-2/#">
                                    <a>Education Support</a>
                                </Link>
                            </h3>
                            <p>IMME Australia is confident to provide client the best educational services based on our deep knowledge, professional experience and wide network with Australian and New Zealand universities and schools. IMME Australia is proudly to be one of the qualified Education Agents in Australia.
</p>
                            <Link href="/index-2/#">
                                <a className="learn-more-btn">Read More</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-featured-solutions-box">
                            <div className="icon">
                                <img src="/images/icon2.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/index-2/#">
                                    <a>Student Welfare Support</a>
                                </Link>
                            </h3>
                            <p>With an aim of helping our clients to achieve the best outcomes and integrate to the new life, our professional and friendly team are here to assist you. Comprehensive pre and post arrival orientation program to help our clients have the opportunity to learn and understand all the things relating to living and studying in a new country.
</p>
                            <Link href="/index-2/#">
                                <a className="learn-more-btn">Read More</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-featured-solutions-box">
                            <div className="icon">
                                <img src="/images/icon3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/index-2/#">
                                    <a>Educational Platform</a>
                                </Link>
                            </h3>
                            <p>We use our unique smart combination of education and technology expertise to create and deliver high quality solutions in teaching and training. We are delighted to introduce the LEADER Platform that can be used to improve student outcomes and enhance professional performance of training and assessment across all education sectors. 
</p>
                            <Link href="/index-2/#">
                                <a className="learn-more-btn">Read More</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape-img2"><img src="/images/shape/shape2.svg" alt="image" /></div>
            <div className="shape-img3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape-img5"><img src="/images/shape/shape5.svg" alt="image" /></div>
            <div className="dot-shape1"><img src="/images/shape/dot1.png" alt="image" /></div>
            <div className="dot-shape2"><img src="/images/shape/dot3.png" alt="image" /></div>
        </div>
    )
}

export default OurFeaturedSolutions;