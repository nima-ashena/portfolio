import React from 'react';

const MainFa = () => {
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
                                    <a href="#home" className="nav-link" data-animate="scrolling">خانه</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#about" className="nav-link" data-animate="scrolling">درباره من</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contact" className="nav-link" data-animate="scrolling">ارتباط</a>
                                </li>
                            </ul>
                            <ul className="nav ml-auto">
                                <li className="nav-item">
                                    <a href="/" className="btn btn-fab btn-theme no-shadow">En</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                
                <div className="caption-header text-center wow zoomInDown">
                    <h5 className="fw-normal">Welcome</h5>
                    <h1 className="fw-light mb-4">I'm <b className="fg-theme">Nima</b> Ashena</h1>
                    <div className="badge">Software Engineer</div>
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
                        <div className="col-lg-6 offset-lg-1 wow fadeInRight"
                             style={{direction: "rtl !important", textAlign: "right",}}>
                            <h1 className="fw-light">نیما آشنا</h1>
                            <h5 className="fg-theme mb-3">برنامه نویس وب</h5>
                            <p className="" style={{direction: "rtl", textAlign: "justify",}}>
                                من نیما آشنا، برنامه نویس
                                وب
                                و در آینده نزدیک خودم رو فول استک دویلوپر می بینم و به هوش مصنوعی و بلاک چین علاقه دارم
                                .
                            </p>
                            <ul className="theme-list-2">
                                <li><b>زندگی در:</b> تهران، ایران</li>
                                <li><b>سن:</b> 25</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <h1 className="text-center fw-normal wow fadeIn">مهارت های من</h1>
                    <div className="row py-3">
                        <div className="col-md-6">
                            <div className="px-lg-3">
                                <h4 className="wow fadeInUp">مهارت های کد زنی</h4>
                                <div className="progress-wrapper wow fadeInUp">
                                    <span className="caption">JavaScript</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "90%",}}
                                             aria-valuenow="75"
                                             aria-valuemin="0" aria-valuemax="100">90%
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrapper wow fadeInUp">
                                    <span className="caption">Node JS</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "80%",}}
                                             aria-valuenow="75"
                                             aria-valuemin="0" aria-valuemax="100">80%
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrapper wow fadeInUp">
                                    <span className="caption">React JS</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "70%",}}
                                             aria-valuenow="75"
                                             aria-valuemin="0" aria-valuemax="100">70%
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrapper wow fadeInUp">
                                    <span className="caption">NestJs</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "50%",}}
                                             aria-valuenow="75"
                                             aria-valuemin="0" aria-valuemax="100">50%
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrapper wow fadeInUp">
                                    <span className="caption">HTML + CSS</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "80%",}}
                                             aria-valuenow="75"
                                             aria-valuemin="0" aria-valuemax="100">80%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="px-lg-3">
                                <h4 className="wow fadeInUp">مهارت های گرافیکی</h4>
                                <div className="progress-wrapper wow fadeInUp">
                                    <span className="caption">Photoshop</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "60%",}}
                                             aria-valuenow="75"
                                             aria-valuemin="0" aria-valuemax="100">60%
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-wrapper wow fadeInUp">
                                    <span className="caption">Premiere</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: "70%",}}
                                             aria-valuenow="75"
                                             aria-valuemin="0" aria-valuemax="100">70%
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
                            <h2 className="fw-normal">آموزش</h2>
                            <ul className="timeline mt-4 pr-md-5">
                                <li>
                                    <div className="title">1398 - تاکنون</div>
                                    <div className="details">
                                        <h5>مهندس کامپوتر</h5>
                                        <small className="fg-theme">دانشگاه تبریز</small>
                                    </div>
                                </li>
                                <li>
                                    <div className="title">1395-1397</div>
                                    <div className="details">
                                        <h5>مهندس شیمی</h5>
                                        <small className="fg-theme">دانشگاه علم و صنعت ایران</small>
                                    </div>
                                </li>
                                <li>
                                    <div className="title">1391 - 1395</div>
                                    <div className="details">
                                        <h5>دانش آموز رشته ریاضی</h5>
                                        <small className="fg-theme">استعداد های درخشان، سمپاد</small>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 wow fadeInRight" data-wow-delay="200ms">
                            <h2 className="fw-normal">تجربه های کاری</h2>
                            <ul className="timeline mt-4 pr-md-5">
                                 <li>
                                    <div className="title">2022 - Current</div>
                                    <div className="details">
                                        <h5>🎵😍 برنامه نویس وب در استدیو نواک </h5>
                                        <a href="https://navaak.com" target="blank"><small
                                            className="fg-theme">navaak.com</small></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="title">1400 - 1401</div>
                                    <div className="details">
                                        <h5>برنامه نویس وب در استدیو اکتا</h5>
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
                                <p>ارتباط با من</p>
                                <hr className="divider"/>
                                    <ul className="list-unstyled">
                                        <li><a href="https://instagram.com/nima_ashena_">اینستاگرام</a></li>
                                    </ul>
                                    <ul className="list-unstyled">
                                        <li><a href="https://wa.me/989213727668" target="blank">واتس اپ</a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-12">
                            <p className="text-center mb-0 mt-4">Copyright &copy;2020.</p>
                        </div>
                    </div>
                </div>
                

            </div>


        </>
    );
};

export default MainFa;