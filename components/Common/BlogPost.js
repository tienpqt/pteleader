import React, { Component } from 'react';
import Link from 'next/link';

class BlogPost extends Component {
    render() {
        return (
            <section className="blog-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Recent News</h2>
                        <p>PTE Leader provides an online coaching platform that suit individual learner’s needs with excellent materials and coaching guides. We are proud to be one of the best online coaching platform in Australia and Vietnam. With a team of experienced professional PTE trainers, we can guide you step-by-step on how to improve your skills and achieve your desirable scores.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="entry-thumbnail">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/imme/1.jpeg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Link href="/#">
                                                    <a>Admin</a>
                                                </Link>
                                            </li>
                                            <li>June 30, 2021</li>
                                        </ul>
                                    </div>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Preparing PTE 30 for the Visa 462</a>
                                        </Link>
                                    </h3>

                                    <p>If you tend to go to Australia with the Visa 462 for work or holiday but your English is not very good, this course is for you. The target of this course is to get PTE 30 ...</p>
                                    
                                    <Link href="/blog-details">
                                        <a className="learn-more-btn">
                                            Read More <i className="flaticon-add"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="entry-thumbnail">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/imme/2.jpeg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Link href="/#">
                                                    <a>Admin</a>
                                                </Link>
                                            </li>
                                            <li>June 30, 2021</li>
                                        </ul>
                                    </div>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Get PTE 50 for the Visa 485</a>
                                        </Link>
                                    </h3>
                                    <p>Your English is not bad but you don't use it for a while and you don't have many free time to review, join this course at anytime that you want to get a PTE 50...</p>
                                    
                                    <Link href="/blog-details">
                                        <a className="learn-more-btn">
                                            Read More <i className="flaticon-add"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-blog-post">
                                <div className="entry-thumbnail">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/imme/3.jpeg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Link href="/#">
                                                    <a>Admin</a>
                                                </Link>
                                            </li>
                                            <li>June 30, 2020</li>
                                        </ul>
                                    </div>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>The first step to study abroad is having a PTE 50+ or 60+</a>
                                        </Link>
                                    </h3>
                                    <p>When your PTE score is 50+ or 60+, a big gate to thousands of schools, univerities and organizations across the world is waiting for you ...</p>
                                    
                                    <Link href="/blog-details">
                                        <a className="learn-more-btn">
                                            Read More <i className="flaticon-add"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
 
                {/* Shape Images */}
                <div className="shape-img2">
                    <img src="/images/shape/shape2.svg" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/shape4.svg" alt="image" />
                </div>
                <div className="shape-img5">
                    <img src="/images/shape/shape5.svg" alt="image" />
                </div>
                <div className="shape-img7">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src="/images/shape/dot1.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot2.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot3.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot4.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot5.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot6.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default BlogPost;