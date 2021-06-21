import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: true,
    animateOut: 'fadeOut',
    items: 1,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
}

class FeedbackSlider extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="feedback-area">
                <div className="container-flauid p-0">
                    {this.state.display ? <OwlCarousel 
                    className="feedback-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="row m-0">
                            <div className="col-lg-6 col-md-12 p-0">
                                <div className="feedback-item">
                                    <p>Over the past few years, I have worked tirelessly to concrete my dream of creating and developing professional PTE training team.
                                        </p>
                                    <div className="client-info">
                                        <div className="client-pic">
                                            <img src="/images/clients/trinh.jpg" alt="image" />
                                        </div>

                                        <h3>Brian NGUYEN</h3>
                                        <span>Co-Founder/Quality Manager</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6 col-md-12 p-0">
                                <div className="client-image bg1">
                                    <img src="/images/clients/trinh.jpg" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="row m-0">
                            <div className="col-lg-6 col-md-12 p-0">
                                <div className="feedback-item">
                                    <p>My educational strategies strive to establish a safe classroom environment based on mutual respect and a common goal of achieving excellence in learning. 
                                        </p>
                                    <div className="client-info">
                                        <div className="client-pic">
                                            <img src="/images/clients/client2.jpg" alt="image" />
                                        </div>

                                        <h3>Noshin Tabassum</h3>
                                        <span>PTE Trainer/ Team Leader


</span>                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6 col-md-12 p-0">
                                <div className="client-image bg2">
                                    <img src="/images/clients/client2.jpg" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="row m-0">
                            <div className="col-lg-6 col-md-12 p-0">
                                <div className="feedback-item">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour predefined words which don't look.</p>

                                    <div className="client-info">
                                        <div className="client-pic">
                                            <img src="/images/clients/client3.jpg" alt="image" />
                                        </div>

                                        <h3>Sarah Taylor</h3>
                                        <span>Designer</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6 col-md-12 p-0">
                                <div className="client-image bg3">
                                    <img src="/images/clients/client3.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        );
    }
}

export default FeedbackSlider;