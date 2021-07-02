import React from 'react';

const FreeTrialArea = () => {
    return (
        <div className="free-trial-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="free-trial-img">
                            <img src="/images/free-trial-img.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="free-trial-text">
                            <h2>Start your free entry test</h2>

                            <form className="newsletter-form">
                                <input type="email" className="input-newsletter" placeholder="Enter your  email here" />
                                <button type="submit">Book your place</button>
                            </form>

                            <p>Test out the PTE Leader Platform features for 14 days.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape-img3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="dot-shape2"><img src="/images/shape/dot3.png" alt="image" /></div>
        </div>
    )
}

export default FreeTrialArea;