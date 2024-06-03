import React from 'react'

interface GroupManageProps  {}

const GroupManage = (props: GroupManageProps) => {
  return (
  <>
  <div className="container">
        <div className="group-profile__tabs tabs">
            <button className="tabs__btn tabs__btn--active" type="button" id="0">
                Home
            </button>
            <button className="tabs__btn" type="button" id="1">
                About
            </button>
            <button className="tabs__btn" type="button" id="2">
                Media
            </button>
            <button className="tabs__btn" type="button" id="3">
                Members
                <span>
                    10
                </span>
            </button>
            <button className="tabs__btn" type="button" id="4">
                Forum
            </button>
        </div>
        
     <div className="members__inner">
        <div className="members__card card">
            <div className="card__inner">
                <p className="card__suptext">
                    3d artist
                </p>
                <div className="card__options card-options">
                    <div className="card-options__btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card-options__inner">
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88563 10.781C9.38553 10.281 8.70725 10 8.00001 10H4.00001C3.29277 10 2.61449 10.281 2.11439 10.781C1.6143 11.2811 1.33334 11.9594 1.33334 12.6667V14"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M6.00001 7.33333C7.47277 7.33333 8.66668 6.13943 8.66668 4.66667C8.66668 3.19391 7.47277 2 6.00001 2C4.52725 2 3.33334 3.19391 3.33334 4.66667C3.33334 6.13943 4.52725 7.33333 6.00001 7.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M12.6667 5.33331V9.33331" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.6667 7.33331H10.6667" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>
                                Add Friend
                            </span>
                        </a>
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                            <span>
                                Follow
                            </span>
                        </a>
                    </div>
                </div>
                <h3 className="card__title">
                    Anthony
                    <span>
                        Clark
                    </span>
                </h3>
                <a className="card__text" href="#">
                    anthony-clark
                </a>
                <p className="card__subtext">
                    Joined April 2019
                </p>
                <div className="card__box card-box">
                    <div className="card-box__person-img card-person-img">
                        <img className="card-person-img__image" src="/images/member-icon-2.png" alt="img"/>
                        <span className="card-person-img__status">

                        </span>
                    </div>
                    <a className="card-box__link" href="#">
                        Send Message
                    </a>
                </div>
            </div>
        </div>
        <div className="members__card card">
            <div className="card__inner">
                <p className="card__suptext">
                    ux/ui designer
                </p>
                <div className="card__options card-options">
                    <div className="card-options__btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card-options__inner">
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88563 10.781C9.38553 10.281 8.70725 10 8.00001 10H4.00001C3.29277 10 2.61449 10.281 2.11439 10.781C1.6143 11.2811 1.33334 11.9594 1.33334 12.6667V14"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M6.00001 7.33333C7.47277 7.33333 8.66668 6.13943 8.66668 4.66667C8.66668 3.19391 7.47277 2 6.00001 2C4.52725 2 3.33334 3.19391 3.33334 4.66667C3.33334 6.13943 4.52725 7.33333 6.00001 7.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M12.6667 5.33331V9.33331" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.6667 7.33331H10.6667" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>
                                Add Friend
                            </span>
                        </a>
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                            <span>
                                Follow
                            </span>
                        </a>
                    </div>
                </div>
                <h3 className="card__title">
                    Valerie
                    <span>
                        Ferguson
                    </span>
                </h3>
                <a className="card__text" href="#">
                    valerie_ui
                </a>
                <p className="card__subtext">
                    Joined Oct 2020
                </p>
                <div className="card__box card-box">
                    <div className="card-box__person-img card-person-img">
                        <img className="card-person-img__image" src="/images/member-icon-3.png" alt="img"/>
                        <span className="card-person-img__status card-person-img__status--disabled">

                        </span>
                    </div>
                    <a className="card-box__link" href="#">
                        Send Message
                    </a>
                </div>
            </div>
        </div>
        <div className="members__card card">
            <div className="card__inner">
                <p className="card__suptext">
                    illustrator
                </p>
                <div className="card__options card-options">
                    <div className="card-options__btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card-options__inner">
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88563 10.781C9.38553 10.281 8.70725 10 8.00001 10H4.00001C3.29277 10 2.61449 10.281 2.11439 10.781C1.6143 11.2811 1.33334 11.9594 1.33334 12.6667V14"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M6.00001 7.33333C7.47277 7.33333 8.66668 6.13943 8.66668 4.66667C8.66668 3.19391 7.47277 2 6.00001 2C4.52725 2 3.33334 3.19391 3.33334 4.66667C3.33334 6.13943 4.52725 7.33333 6.00001 7.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M12.6667 5.33331V9.33331" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.6667 7.33331H10.6667" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>
                                Add Friend
                            </span>
                        </a>
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                            <span>
                                Follow
                            </span>
                        </a>
                    </div>
                </div>
                <h3 className="card__title">
                    Lilly-Rose
                    <span>
                        Holland
                    </span>
                </h3>
                <a className="card__text" href="#">
                    lillyrose.flower
                </a>
                <p className="card__subtext">
                    Joined Jan 2015
                </p>
                <div className="card__box card-box">
                    <div className="card-box__person-img card-person-img">
                        <img className="card-person-img__image" src="/images/member-icon-7.png" alt="img"/>
                        <span className="card-person-img__status">

                        </span>
                    </div>
                    <a className="card-box__link" href="#">
                        Send Message
                    </a>
                </div>
            </div>
        </div>
        <div className="members__card card">
            <div className="card__inner">
                <p className="card__suptext">
                    graphic designer
                </p>
                <div className="card__options card-options">
                    <div className="card-options__btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card-options__inner">
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88563 10.781C9.38553 10.281 8.70725 10 8.00001 10H4.00001C3.29277 10 2.61449 10.281 2.11439 10.781C1.6143 11.2811 1.33334 11.9594 1.33334 12.6667V14"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M6.00001 7.33333C7.47277 7.33333 8.66668 6.13943 8.66668 4.66667C8.66668 3.19391 7.47277 2 6.00001 2C4.52725 2 3.33334 3.19391 3.33334 4.66667C3.33334 6.13943 4.52725 7.33333 6.00001 7.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M12.6667 5.33331V9.33331" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.6667 7.33331H10.6667" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>
                                Add Friend
                            </span>
                        </a>
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                            <span>
                                Follow
                            </span>
                        </a>
                    </div>
                </div>
                <h3 className="card__title">
                    Tina
                    <span>
                        Alvarez
                    </span>
                </h3>
                <a className="card__text" href="#">
                    tina.alvarez
                </a>
                <p className="card__subtext">
                    Joined Aug 2021
                </p>
                <div className="card__box card-box">
                    <div className="card-box__person-img card-person-img">
                        <img className="card-person-img__image" src="/images/member-icon-8.png" alt="img"/>
                        <span className="card-person-img__status">

                        </span>
                    </div>
                    <a className="card-box__link" href="#">
                        Send Message
                    </a>
                </div>
            </div>
        </div>
        <div className="members__card card">
            <div className="card__inner">
                <p className="card__suptext">
                    ux/ui designer
                </p>
                <div className="card__options card-options">
                    <div className="card-options__btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card-options__inner">
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88563 10.781C9.38553 10.281 8.70725 10 8.00001 10H4.00001C3.29277 10 2.61449 10.281 2.11439 10.781C1.6143 11.2811 1.33334 11.9594 1.33334 12.6667V14"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M6.00001 7.33333C7.47277 7.33333 8.66668 6.13943 8.66668 4.66667C8.66668 3.19391 7.47277 2 6.00001 2C4.52725 2 3.33334 3.19391 3.33334 4.66667C3.33334 6.13943 4.52725 7.33333 6.00001 7.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M12.6667 5.33331V9.33331" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.6667 7.33331H10.6667" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>
                                Add Friend
                            </span>
                        </a>
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                            <span>
                                Follow
                            </span>
                        </a>
                    </div>
                </div>
                <h3 className="card__title">
                    Susan
                    <span>
                        Fole
                    </span>
                </h3>
                <a className="card__text" href="#">
                    susan-foley
                </a>
                <p className="card__subtext">
                    Joined Feb 2021
                </p>
                <div className="card__box card-box">
                    <div className="card-box__person-img card-person-img">
                        <img className="card-person-img__image" src="/images/member-icon-4.png" alt="img"/>
                        <span className="card-person-img__status">

                        </span>
                    </div>
                    <a className="card-box__link" href="#">
                        Send Message
                    </a>
                </div>
            </div>
        </div>
        <div className="members__card card">
            <div className="card__inner">
                <p className="card__suptext">
                    3d artist
                </p>
                <div className="card__options card-options">
                    <div className="card-options__btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card-options__inner">
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88563 10.781C9.38553 10.281 8.70725 10 8.00001 10H4.00001C3.29277 10 2.61449 10.281 2.11439 10.781C1.6143 11.2811 1.33334 11.9594 1.33334 12.6667V14"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M6.00001 7.33333C7.47277 7.33333 8.66668 6.13943 8.66668 4.66667C8.66668 3.19391 7.47277 2 6.00001 2C4.52725 2 3.33334 3.19391 3.33334 4.66667C3.33334 6.13943 4.52725 7.33333 6.00001 7.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M12.6667 5.33331V9.33331" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.6667 7.33331H10.6667" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>
                                Add Friend
                            </span>
                        </a>
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                            <span>
                                Follow
                            </span>
                        </a>
                    </div>
                </div>
                <h3 className="card__title">
                    Timothy
                    <span>
                        Stuart
                    </span>
                </h3>
                <a className="card__text" href="#">
                    tim.stuart.3d
                </a>
                <p className="card__subtext">
                    Joined Dec 2022
                </p>
                <div className="card__box card-box">
                    <div className="card-box__person-img card-person-img">
                        <img className="card-person-img__image" src="/images/member-icon-10.png" alt="img"/>
                        <span className="card-person-img__status">

                        </span>
                    </div>
                    <a className="card-box__link" href="#">
                        Send Message
                    </a>
                </div>
            </div>
        </div>
        <div className="members__card card">
            <div className="card__inner">
                <p className="card__suptext">
                    ux/ui designer
                </p>
                <div className="card__options card-options">
                    <div className="card-options__btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card-options__inner">
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88563 10.781C9.38553 10.281 8.70725 10 8.00001 10H4.00001C3.29277 10 2.61449 10.281 2.11439 10.781C1.6143 11.2811 1.33334 11.9594 1.33334 12.6667V14"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M6.00001 7.33333C7.47277 7.33333 8.66668 6.13943 8.66668 4.66667C8.66668 3.19391 7.47277 2 6.00001 2C4.52725 2 3.33334 3.19391 3.33334 4.66667C3.33334 6.13943 4.52725 7.33333 6.00001 7.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M12.6667 5.33331V9.33331" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.6667 7.33331H10.6667" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>
                                Add Friend
                            </span>
                        </a>
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                            <span>
                                Follow
                            </span>
                        </a>
                    </div>
                </div>
                <h3 className="card__title">
                    Philippa
                    <span>
                        Bush
                    </span>
                </h3>
                <a className="card__text" href="#">
                    philippa-bush23
                </a>
                <p className="card__subtext">
                    Joined May 2023
                </p>
                <div className="card__box card-box">
                    <div className="card-box__person-img card-person-img">
                        <img className="card-person-img__image" src="/images/member-icon-9.png" alt="img"/>
                        <span className="card-person-img__status card-person-img__status--disabled">

                        </span>
                    </div>
                    <a className="card-box__link" href="#">
                        Send Message
                    </a>
                </div>
            </div>
        </div>
        <div className="members__card card">
            <div className="card__inner">
                <p className="card__suptext">
                    illustrator
                </p>
                <div className="card__options card-options">
                    <div className="card-options__btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card-options__inner">
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88563 10.781C9.38553 10.281 8.70725 10 8.00001 10H4.00001C3.29277 10 2.61449 10.281 2.11439 10.781C1.6143 11.2811 1.33334 11.9594 1.33334 12.6667V14"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M6.00001 7.33333C7.47277 7.33333 8.66668 6.13943 8.66668 4.66667C8.66668 3.19391 7.47277 2 6.00001 2C4.52725 2 3.33334 3.19391 3.33334 4.66667C3.33334 6.13943 4.52725 7.33333 6.00001 7.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M12.6667 5.33331V9.33331" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.6667 7.33331H10.6667" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>
                                Add Friend
                            </span>
                        </a>
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                            <span>
                                Follow
                            </span>
                        </a>
                    </div>
                </div>
                <h3 className="card__title">
                    Katie
                    <span>
                        Campbell
                    </span>
                </h3>
                <a className="card__text" href="#">
                    katie.campbell.art
                </a>
                <p className="card__subtext">
                    Joined Apr 2018
                </p>
                <div className="card__box card-box">
                    <div className="card-box__person-img card-person-img">
                        <img className="card-person-img__image" src="/images/member-icon-28.png" alt="img"/>
                        <span className="card-person-img__status card-person-img__status--disabled">

                        </span>
                    </div>
                    <a className="card-box__link" href="#">
                        Send Message
                    </a>
                </div>
            </div>
        </div>
        <div className="members__card card">
            <div className="card__inner">
                <p className="card__suptext">
                    graphic designer
                </p>
                <div className="card__options card-options">
                    <div className="card-options__btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card-options__inner">
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88563 10.781C9.38553 10.281 8.70725 10 8.00001 10H4.00001C3.29277 10 2.61449 10.281 2.11439 10.781C1.6143 11.2811 1.33334 11.9594 1.33334 12.6667V14"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M6.00001 7.33333C7.47277 7.33333 8.66668 6.13943 8.66668 4.66667C8.66668 3.19391 7.47277 2 6.00001 2C4.52725 2 3.33334 3.19391 3.33334 4.66667C3.33334 6.13943 4.52725 7.33333 6.00001 7.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M12.6667 5.33331V9.33331" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.6667 7.33331H10.6667" stroke="#0E1218" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>
                                Add Friend
                            </span>
                        </a>
                        <a className="card-options__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z"
                                      stroke="#0E1218" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                            <span>
                                Follow
                            </span>
                        </a>
                    </div>
                </div>
                <h3 className="card__title">
                    Leila
                    <span>
                        Calderon
                    </span>
                </h3>
                <a className="card__text" href="#">
                    lcalderon.paralect
                </a>
                <p className="card__subtext">
                    Joined Jul 2020
                </p>
                <div className="card__box card-box">
                    <div className="card-box__person-img card-person-img">
                        <img className="card-person-img__image" src="/images/member-icon-19.png" alt="img"/>
                        <span className="card-person-img__status">

                        </span>
                    </div>
                    <a className="card-box__link" href="#">
                        Send Message
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  
  </>
  )
}

export default GroupManage