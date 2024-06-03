import React from 'react'

interface HomeProps  {}

const HomePage= (props: HomeProps) => {
  return (
    <>
    
<section className="main__heading heading">
    <div className="container">
        <h1 className="heading__title card">
            <span>
                Join
            </span>
            the Ultimate Community Designed for
            <span>
                You
            </span>
            !
        </h1>
    </div>
</section>
<section className="main__count count">
    <div className="container">
        <div className="count__inner">
            <div className="count__item count-item">
                <p className="count-item__text">
                    <span>
                        1000+
                    </span>
                </p>
                <p className="count-item__subtext">
                    members
                </p>
            </div>
            <div className="count__item count-item">
                <p className="count-item__text">
                    <span>
                        100+
                    </span>
                </p>
                <p className="count-item__subtext">
                    groups
                </p>
            </div>
            <div className="count__item count-item">
                <p className="count-item__text">
                    <span>
                        50+
                    </span>
                </p>
                <p className="count-item__subtext">
                    online courses
                </p>
            </div>
        </div>
    </div>
</section>
<section className="main__groups-section groups-section">
    <div className="container">
        <div className="groups-section__top groups-section-top">
            <h2 className="groups-section-top__title">
                Popular Groups
            </h2>
            <div className="groups-section__buttons swiper-buttons">
                <div className="groups-section__buttons-prev swiper-buttons-prev-btn">
                    <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g id="icons">
                            <path id="Icon"
                                  d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9"
                                  stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                        </g>
                    </svg>
                </div>
                <div className="groups-section__buttons-next swiper-buttons-next-btn">
                    <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g id="icons">
                            <path id="Icon"
                                  d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9"
                                  stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <div className="groups-section__swiper groups-section-swiper swiper">
            <div className="swiper-wrapper">
                <div className="groups-section-swiper__slide groups-section-slide swiper-slide">
                    <div className="groups-section__card card">
                        <div className="card__inner">
                            <p className="card__suptext card__suptext--pink">
                                Public Group
                            </p>
                            <div className="card__options card-options">
                                <div className="card-options__btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="card-options__inner">
                                    <a className="card-options__link" href="/groups">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z"
                                                  stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round"
                                                  strokeLinejoin="round" />
                                        </svg>
                                        <span>
                                            Subscribe
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <a className="card__title" href="/groups">
                                Web Dev
                            </a>
                            <ul className="card__list card-list">
                                <li className="card-list__item">
                                    <p className="card-list__text">
                                        983 Members
                                    </p>
                                </li>
                            </ul>
                            <a className="card-box__poster" href="/groups">
                                <img className="card-box__poster-img" src="images/new/1-1.jpg" alt="img"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="groups-section-swiper__slide groups-section-slide swiper-slide">
                    <div className="groups-section__card card">
                        <div className="card__inner">
                            <p className="card__suptext card__suptext--pink">
                                Public Group
                            </p>
                            <div className="card__options card-options">
                                <div className="card-options__btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="card-options__inner">
                                    <a className="card-options__link" href="/groups">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z"
                                                  stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round"
                                                  strokeLinejoin="round" />
                                        </svg>
                                        <span>
                                            Subscribe
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <a className="card__title" href="/groups">
                                Mobile Apps
                            </a>
                            <ul className="card__list card-list">
                                <li className="card-list__item">
                                    <p className="card-list__text">
                                        872 Members
                                    </p>
                                </li>
                            </ul>
                            <a className="card-box__poster" href="/groups">
                                <img className="card-box__poster-img" src="images/new/1-2.jpg" alt="img"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="groups-section-swiper__slide groups-section-slide swiper-slide">
                    <div className="groups-section__card card">
                        <div className="card__inner">
                            <p className="card__suptext card__suptext--pink">
                                Public Group
                            </p>
                            <div className="card__options card-options">
                                <div className="card-options__btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="card-options__inner">
                                    <a className="card-options__link" href="/groups">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z"
                                                  stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round"
                                                  strokeLinejoin="round" />
                                        </svg>
                                        <span>
                                            Subscribe
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <a className="card__title" href="/groups">
                                UI / UX 
                            </a>
                            <ul className="card__list card-list">
                                <li className="card-list__item">
                                    <p className="card-list__text">
                                        300 Members
                                    </p>
                                </li>
                            </ul>
                            <a className="card-box__poster" href="/groups">
                                <img className="card-box__poster-img" src="images/new/1-3.jpg" alt="img"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="main__elevate elevate">
    <div className="container">
        <div className="elevate__inner">
            <div className="elevate__content elevate-content">
                <h2 className="elevate-content__title">
                    Elevate Your Career <br/>
                    and
                    <span>
                        Connect <br/>
                        with Like-Minded <br/>
                        Professionals <br/>
                    </span>
                    at Design Lab
                </h2>
                <a className="elevate-content__link" data-fancybox="" href="#login-popup">
                    Explore Now
                </a>
            </div>
            <div className="elevate__view elevate-view">
                <div className="elevate-view__box">
                    <p className="elevate-view__box-text">
                        1000+
                    </p>
                    <p className="elevate-view__box-subtext">
                        members
                    </p>
                </div>
                <img className="elevate-view__img" src="images/member-icon-2.png" alt="img"/>
                <img className="elevate-view__img" src="images/member-icon-16.png" alt="img"/>
                <img className="elevate-view__img" src="images/member-icon-8.png" alt="img"/>
                <img className="elevate-view__img" src="images/member-icon-3.png" alt="img"/>
                <img className="elevate-view__img" src="images/member-icon-25.png" alt="img"/>
            </div>
        </div>
    </div>
</section>
<section className="main__new-courses new-courses">
    <div className="container">
        <div className="new-courses__top new-courses-top">
            <h2 className="new-courses-top__title">
                Courses
            </h2>
            <div className="new-courses__buttons swiper-buttons">
                <div className="new-courses__buttons-prev swiper-buttons-prev-btn">
                    <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g id="icons">
                            <path id="Icon"
                                  d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9"
                                  stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                        </g>
                    </svg>
                </div>
                <div className="new-courses__buttons-next swiper-buttons-next-btn">
                    <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g id="icons">
                            <path id="Icon"
                                  d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9"
                                  stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <div className="new-courses__swiper new-courses-swiper swiper">
            <div className="swiper-wrapper">
                    <div className="new-courses-swiper__slide new-courses-slide swiper-slide">
                        <div className="courses__card card">
                            <div className="card__inner">
                                <p className="card__suptext card__suptext--pink">
                                    CategoryName
                                </p>
                                <a className="card__title" href="courses-page.html">
                                    Name
                                </a>
                                <ul className="card__list card-list">
                                     <li className="card-list__item">
                                        <p className="card-list__rait">
                                            <span>
                                                4.5
                                            </span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g id="icons" clipPath="url(#clip0_114_9488)">
                                                    <path id="Vector"
                                                          d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z"
                                                          fill="#F9D442" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_114_9488">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </p>
                                    </li> 
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            6 Lessons
                                        </p>
                                    </li> 
                                </ul>
                                <a className="card-box__poster" href="courses-page.html">
                                    <img className="card-box__poster-img" src="https://kl-pocketbase.pockethost.io/api/files/courses/2ra9eqoy126nz5n/python_v3TqkhSsVu.png" alt="img"/>
                                    <p className="card-box__poster-text">
                                        65$
                                </p> 
                                </a>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
</section>
<section className="main__news-section news-section">
    <div className="container">
        <div className="news-section__top news-section-top">
            <h2 className="news-section-top__title">
                Blog Posts
            </h2>
            <div className="news-section__buttons swiper-buttons">
                <div className="news-section__buttons-prev swiper-buttons-prev-btn">
                    <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g id="icons">
                            <path id="Icon"
                                  d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9"
                                  stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                        </g>
                    </svg>
                </div>
                <div className="news-section__buttons-next swiper-buttons-next-btn">
                    <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g id="icons">
                            <path id="Icon"
                                  d="M2.5 6H9M6.5 3L9.14645 5.64645C9.34171 5.84171 9.34171 6.15829 9.14645 6.35355L6.5 9"
                                  stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <div className="news-section__swiper news-section-swiper swiper">
            <div className="swiper-wrapper">
                <div className="news-section-swiper__slide news-section-slide swiper-slide">
                    <div className="news-section-slide__card card">
                        <div className="card__inner">
                            <a className="card-box__poster" href="blog-page.html">
                                <img className="card-box__poster-img" src="/images/group-img-5.jpg" alt="img"/>
                            </a>
                            <p className="card__suptext card__suptext--purple">
                                technology
                            </p>
                            <a className="card__title" href="#">
                                Coming Soon!
                            </a>
                        </div>
                    </div>
                </div>
                <div className="news-section-swiper__slide news-section-slide swiper-slide">
                    <div className="news-section-slide__card card">
                        <div className="card__inner">
                            <a className="card-box__poster" href="blog-page.html">
                                <img className="card-box__poster-img" src="/images/group-img-5.jpg" alt="img"/>
                            </a>
                            <p className="card__suptext card__suptext--purple">
                                technology
                            </p>
                            <a className="card__title" href="#">
                                Coming Soon!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default HomePage