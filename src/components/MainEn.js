import React from 'react';
import {Link, Router} from "react-router-dom";

const MainEn = () => {
    return (
        <>
            <div className="btn-back_to_top">
                <span className="ti-arrow-up"/>
            </div>

            <div className="vg-page page-home" id="home" style={{backgroundImage: "url(./assets/img/bg_image_1.jpg)"}}>

                <div className="navbar navbar-expand-lg navbar-dark sticky" data-offset="500">
                    <div className="container">

                        <button className="navbar-toggler" data-toggle="collapse" data-target="#main-navbar"
                                aria-expanded="true">
                            <span className="ti-menu"/>
                        </button>
                        <div className="collapse navbar-collapse" id="main-navbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a href="#home" className="nav-link" data-animate="scrolling">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#about" className="nav-link" data-animate="scrolling">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contact" className="nav-link" data-animate="scrolling">Contact</a>
                                </li>
                            </ul>
                            <ul className="nav ml-auto">
                                <li className="nav-item">
                                    {/* <a href="/fa" className="btn btn-fab btn-theme no-shadow">Fa</a> */}
                                    {/*<Link to="/fa" className="btn btn-fab btn-theme no-shadow">Fa</Link>*/}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="caption-header text-center wow zoomInDown">
                    <h5 className="fw-normal">Welcome</h5>
                    <h1 className="fw-light mb-4">I'm Nima <b className="fg-theme"> Ashena</b></h1>
                    <div className="badge" style={{color: "aliceblue"}}>Full Stack Developer</div>
                </div>

                <div className="floating-button"><span className="ti-mouse"/></div>
            </div>

            <div className="vg-page page-about" id="about">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4 py-3">
                            <div className="img-place wow fadeInUp">
                                <img src="./assets/img/nima.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1 wow fadeInRight">
                            <h1 className="fw-light">Nima Ashena</h1>
                            <p className="text-muted">
                                I'm a programmer and Full Stack Developer. Furthermore, I am interested in Artificial Intelligence.
                            </p>
                            <ul className="theme-list">
                                <li><b>Age:</b> 24</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <h1 className="text-center fw-normal wow fadeIn">My Skills</h1>
                    <div className="row py-3">
                        <div className="col-md-6">
                            <div className="px-lg-3">
                                <h4 className="wow fadeInUp">Backend</h4>
                                <div className="progress-wrapper wow fadeInUp">
                                    <span className="caption">NodeJS</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "100%",}}
                                             aria-valuenow="75"
                                             aria-valuemin="0" aria-valuemax="100">node js
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrapper wow fadeInUp">
                                    <span className="caption">NestJS</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "100%",}}
                                             aria-valuenow="75"
                                             aria-valuemin="0" aria-valuemax="100">nest js
                                        </div>
                                    </div>
                                </div>
  
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="px-lg-3">
                                <h4 className="wow fadeInUp">Frontend</h4>
                                <div className="progress-wrapper wow fadeInUp">
                                    <span className="caption">JavaScript</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "100%",}}
                                             aria-valuenow="75"
                                             aria-valuemin="0" aria-valuemax="100">javaScript
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrapper wow fadeInUp">
                                    <span className="caption">ReactJs</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "100%",}}
                                             aria-valuenow="75"
                                             aria-valuemin="0" aria-valuemax="100">react js
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-6 wow fadeInRight">
                            <h2 className="fw-normal">Education</h2>
                            <ul className="timeline mt-4 pr-md-5">
                                <li>
                                    <div className="title">2020 - Current</div>
                                    <div className="details">
                                        <h5>Software Engineering</h5>
                                        <small className="fg-theme">University of Tabriz</small>
                                    </div>
                                </li>
                                <li>
                                    <div className="title">2016-2019</div>
                                    <div className="details">
                                        <h5>Chemical Engineering</h5>
                                        <small className="fg-theme">Iran University of Science and Technology</small>
                                    </div>
                                </li>
                                <li>
                                    <div className="title">2012-2016</div>
                                    <div className="details">
                                        <h5>Diploma in Mathematics and Physics</h5>
                                        <small className="fg-theme">Student at NODET</small>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 wow fadeInRight" data-wow-delay="200ms">
                            <h2 className="fw-normal">Experience</h2>
                            <ul className="timeline mt-4 pr-md-5">
                                <li>
                                    <div className="title">2022 - Current</div>
                                    <div className="details">
                                        <h5>Web Developer at Navaak 🎵😍</h5>
                                        <a href="https://navaak.com" target="blank"><small
                                            className="fg-theme">navaak.com</small></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="title">2021 - 2022</div>
                                    <div className="details">
                                        <h5>Web Developer at OCTA</h5>
                                        <a href="https://octaventure.ir" target="blank"><small
                                            className="fg-theme">octaventure.ir</small></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vg-footer" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 py-3">
                            <div className="float-lg-right">
                                <p>Contact me</p>
                                <hr className="divider"/>
                                <ul className="list-unstyled">
                                    <li><a href="https://instagram.com/nima_ashena_">Instagram</a></li>
                                </ul>
                                <ul className="list-unstyled">
                                        <li><a href="https://wa.me/989213727668" target="blank">WhatsApp</a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-12">
                            <p className="text-center mb-0 mt-4">Copyright &copy,2020.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainEn;