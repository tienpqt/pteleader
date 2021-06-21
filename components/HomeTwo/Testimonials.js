import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
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
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="testimonials-area ptb-110">
            <div className="container">
                <div className="section-title">
                    <h2>What People Say About Us</h2>
                    <p>"Creativity is intelligence having fun." - Albert Einstein</p>
                </div>

                {display ? <OwlCarousel 
                    className="testimonials-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/author3.jpg" alt="image" />
                            <h3>Nhu Nguyen</h3>
                            <span>PTE Student</span>
                        </div>
                        <p>The course was exciting, fun but a lot of work. I liked the assignments that required us to get online and also offline. Sometimes the sources from the homework materials gave me a better idea and understanding about my English level. Ideas from the course notes or book helped me a lot. I have never expected to learn so much from an online class, however, I now see the ocean life in a whole new way. I know I could have done better, but in the end I learned that an online class could be as good an angle as a regular class.  I enjoyed it very much.</p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/author1.jpg" alt="image" />
                            <h3>Neo Phan</h3>
                            <span>PTE Student</span>
                        </div>
                        <p>With PTE Leader, I can improve all of my English skills and develop a wider knowledge of PTE Test. Trainers are friendly, kind and always willing to support students. Their platform is amazing, it provides many resources and practice materials. Please join PTE LEADER so you can become a part of this amazing team and achieve your desired score like me and other students.</p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <div className="client-info">
                            <img src="/images/author2.jpg" alt="image" />
                            <h3>James Coutus</h3>
                            <span>Sport Coach</span>
                        </div>
                        <p>I took an Intermediate course on PTE Leader in February 2021 and I really loved it. Trainer is very thorough and professional. There are many useful strategies, advices and practice materials. Overall, a great experience and I highly recommend it.</p>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
            
            {/* Shape Images */}
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

export default Testimonials;