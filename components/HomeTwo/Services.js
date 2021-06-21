
import React, { Component } from 'react'
import Link from 'next/link'

export default class Services extends Component {

    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <div className="services-section bg-f2f6f9 ptb-110">
                <div className="container">
                    <div className="section-title">
                        <h2>We Offer Professional Solutions</h2>
                        <p>IMME Australia is proudly to be one of the leading companies in providing the education support and technical solutions. We create and maintain a range of high-quality solutions and services in Education and Technology. </p>
                    </div>

                    <div className="tab services-tab-list">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <ul className="tabs">
                                    <li
                                        className="current"
                                        onClick={(e) => this.openTabSection(e, 'tab1')}
                                    >
                                        <i className="flaticon-income"></i>
                                        <span>Educational Consultant</span>
                                    </li>
                                    
                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab2')}
                                    >
                                        <i className="flaticon-automatic"></i>
                                        <span>Pre-Departure Orientation</span>
                                    </li>
                                    
                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab3')}
                                    >
                                        <i className="flaticon-locked"></i>
                                        <span>Student welfare support</span>
                                    </li>
                                    
                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab4')}
                                    >
                                        <i className="flaticon-molecular"></i>
                                        <span>Online English Test Preparation</span>
                                    </li>
                                    
                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab5')}
                                    >
                                        <i className="flaticon-gear"></i>
                                    <span>DevOps Assessment Systems</span>
                                    </li>
                                    
                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab6')}
                                    >
                                        <i className="flaticon-ceo"></i>
                                        <span>E-Learning & Blended Learning</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-8 col-md-8">
                                <div className="tab-content">
                                    <div id="tab1" className="tabs-item">
                                        <div className="image">
                                            <img src="/images/imme/DigitalLearning.png" alt="image" />
                                        </div>

                                        <div className="content">
                                            <p>With an aim of helping our teacher, trainer, and students to achieve the targeted educational outcomes, IMME Australia has successfully built a wide range of study material with the highest standard that suit many levels of studying. Learning should be accessible to anyone from anywhere in the world at any time.</p>

                                            <Link href="/service-details">
                                                <a className="btn btn-primary">Read More</a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div id="tab2" className="tabs-item">
                                        <div className="image">
                                            <img src="/images/imme/StudyAbroad.png" alt="image" />
                                        </div>

                                        <div className="content">
                                            <p>IMME Australia aims to personalize the application, provide the most accurate up to date information, consult the most efficient and economical solution to clients in accordance with relevant laws and regulation.</p>

                                            <Link href="/service-details">
                                                <a className="btn btn-primary">Read More</a>
                                            </Link>
                                        </div>
                                    </div>
        
                                    <div id="tab3" className="tabs-item">
                                        <div className="image">
                                            <img src="/images/imme/Welfare.png" alt="image" />
                                        </div>

                                        <div className="content">
                                            <p>IMME Australia takes pride to support our students with emotional, financial, and social difficulties on the journey to make the dream comes true. We partner and work closely with School’s Welfare Support Worker to make sure our students to be secure, happy, and looked after while living and studying in Australia.</p>

                                            <Link href="/service-details">
                                                <a className="btn btn-primary">Read More</a>
                                            </Link>
                                        </div>
                                    </div>
        
                                    <div id="tab4" className="tabs-item">
                                        <div className="image">
                                            <img src="/images/imme/MockTestAssessement.png" alt="image" />
                                        </div>

                                        <div className="content">
                                            <p>IMME Australia develops the testing and assessment system which can accommodate the wide and diversify kinds of question types, especially the Mock Test of Online English Test such as PTE Academic, IELTS, TOEIC, APTIS…</p>

                                            <Link href="/service-details">
                                                <a className="btn btn-primary">Read More</a>
                                            </Link>
                                        </div>
                                    </div>
        
                                    <div id="tab5" className="tabs-item">
                                        <div className="image">
                                            <img src="/images/imme/Autonimation.png" alt="image" />
                                        </div>

                                        <div className="content">
                                            <p>IMME Australia’s Technical experts are here to assist many organizations, institutes, schools, and centres in conducting the front and back-end platform development. Upon applying our platform, the clients will be able to transform their business process to achieve a standardized way of teaching and learning.
</p>

                                            <Link href="/service-details">
                                                <a className="btn btn-primary">Read More</a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div id="tab6" className="tabs-item">
                                        <div className="image">
                                            <img src="/images/imme/BlendedLearning.png" alt="image" />
                                        </div>

                                        <div className="content">
                                            <p> IMME Australia is delighted to introduce the LEADER Platform that can be used to improve student outcomes and enhance professional performance of training and assessment across all education sectors. </p>
                                            <Link href="/service-details">
                                                <a className="btn btn-primary">Read More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images  */}
                <div className="shape-img1"><img src="/images/shape/shape1.png" alt="image" /></div>
                <div className="shape-img3"><img src="/images/shape/shape3.png" alt="image" /></div>
                <div className="shape-img2"><img src="/images/shape/shape2.svg" alt="image" /></div>
                <div className="shape-img5"><img src="/images/shape/shape5.svg" alt="image" /></div>
                <div className="shape-img4"><img src="/images/shape/shape4.svg" alt="image" /></div>
                <div className="dot-shape1"><img src="/images/shape/dot1.png" alt="image" /></div>
                <div className="dot-shape2"><img src="/images/shape/dot3.png" alt="image" /></div>
            </div>
        )
    }
}