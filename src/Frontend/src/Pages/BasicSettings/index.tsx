import React from 'react'
import { useNavigate } from 'react-router'

interface BasicSettingsProps  {}

const BasicSettings = (props: BasicSettingsProps) => {
    const navigate = useNavigate() ; 
    function handleClick(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
        navigate('/GroupManage') ;  
    }

  return (
<>
<div className="section-top section-top--space">
    <div className="container">
        <div className="section-top__inner">
            <div className="section-top__content section-top-content">
                <p className="section-top-content__suptext">
                    Public Group
                </p>
                <h1 className="section-top-content__title title">
                    Graphic Design
                </h1>
                <ul className="section-top-content__list card-list">
                    <li className="card-list__item">
                        <p className="card-list__text">
                            Active 19 days ago
                        </p>
                    </li>
                    <li className="card-list__item">
                        <a className="card-list__link" href="#">
                            Group Administrators
                            <img className="card-list__link-img" src="/images/member-icon-12.png" alt="img"/>
                            <img className="card-list__link-img" src="/images/member-icon-3.png" alt="img"/>
                        </a>
                    </li>
                </ul>
                <div className="section-top-content__buttons">
                    <button className="members-section-top-body-box__buttons-link members-section-top-body-box__buttons-link--purple"
                            x-on:click="$store.profile.toggle()">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88563 10.781C9.38553 10.281 8.70725 10 8.00001 10H4.00001C3.29277 10 2.61449 10.281 2.11439 10.781C1.6143 11.2811 1.33334 11.9594 1.33334 12.6667V14"
                                  stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round" />
                            <path d="M6.00001 7.33333C7.47277 7.33333 8.66668 6.13943 8.66668 4.66667C8.66668 3.19391 7.47277 2 6.00001 2C4.52725 2 3.33334 3.19391 3.33334 4.66667C3.33334 6.13943 4.52725 7.33333 6.00001 7.33333Z"
                                  stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round" />
                            <path d="M12.6667 5.33331V9.33331" stroke="#0E1218" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.6667 7.33331H10.6667" stroke="#0E1218" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>
                        </span>
                    </button>
                    <button onClick={handleClick} className="members-section-top-body-box__buttons-link members-section-top-body-box__buttons-link--purple"
                            x-on:click="$store.profile.toggle()">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"/></svg>
                        <span >
                        </span>
                        Manage Group
                    </button>
                </div>
            </div>
            <div className="section-top__img" style={{ backgroundImage: 'url("https://kl-pocketbase.pockethost.io/api/files/intellexus_files/kgy84m06ww0os9f/group_img_1_i0KreYT3yH.jpg")' }}>
            </div>
        </div>
    </div>
</div>
<section className="main__group-profile group-profile">
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
        <div className="group-profile__inner">
            <div className="group-profile__wrapper group-profile__wrapper--active" id="0">
            <section className="group-profile__posts group-profile-posts">
                    <div className="group-profile-posts__top">
                        <p className="group-profile-posts__top-text">
                            RSS
                        </p>
                        <div className="group-profile-posts__top-select custom-select">
                            <select>
                                <option value="0">Everything</option>
                                <option value="1">Everything</option>
                                <option value="2">Everything 2</option>
                            </select>
                        <div className="select-selected">Everything</div><div className="select-items select-hide"><div>Everything</div><div>Everything 2</div></div></div>
                    </div>
                    <div className="group-profile-posts__inner">
                        <div className="group-profile-posts__post post">
                            <div className="post__body post-body">
                                <div className="post-body__top post-body-top">
                                    <a className="post-body-top__link" href="#">
                                        <img className="post-body-top__link-img" src="/images/member-icon-10.png" alt="img"/>
                                    </a>
                                    <div className="post-body-top__box">
                                        <p className="post-body-top__box-text">
                                            <a href="#">
                                                Susan Foley
                                            </a>
                                            posted an update in the group
                                            <span>
                                                Graphic Design
                                            </span>
                                        </p>
                                        <p className="post-body-top__box-subtext">
                                            6 months ago
                                        </p>
                                    </div>
                                    <div className="post-body-top__options card-options">
                                        <div className="card-options__btn">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="card-options__inner">
                                            <a className="card-options__link" href="#">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="icons">
                                                        <path id="Vector" d="M8 11.3335V14.6668" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path id="Vector_2" d="M3.33333 11.3335H12.6667V10.1602C12.6665 9.91211 12.5972 9.66901 12.4665 9.45819C12.3358 9.24738 12.1488 9.07721 11.9267 8.96683L10.74 8.36683C10.5179 8.25644 10.3309 8.08628 10.2002 7.87547C10.0695 7.66465 10.0001 7.42155 10 7.1735V4.00016H10.6667C11.0203 4.00016 11.3594 3.85969 11.6095 3.60964C11.8595 3.35959 12 3.02045 12 2.66683C12 2.31321 11.8595 1.97407 11.6095 1.72402C11.3594 1.47397 11.0203 1.3335 10.6667 1.3335H5.33333C4.97971 1.3335 4.64057 1.47397 4.39052 1.72402C4.14048 1.97407 4 2.31321 4 2.66683C4 3.02045 4.14048 3.35959 4.39052 3.60964C4.64057 3.85969 4.97971 4.00016 5.33333 4.00016H6V7.1735C5.99987 7.42155 5.93054 7.66465 5.79981 7.87547C5.66909 8.08628 5.48214 8.25644 5.26 8.36683L4.07333 8.96683C3.85119 9.07721 3.66425 9.24738 3.53352 9.45819C3.40279 9.66901 3.33347 9.91211 3.33333 10.1602V11.3335Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </g>
                                                </svg>

                                                <span>
                                                    Pin to Top
                                                </span>
                                            </a>
                                            <a className="card-options__link" href="#">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.66667 10.0002C2.66667 10.0002 3.33333 9.3335 5.33333 9.3335C7.33333 9.3335 8.66667 10.6668 10.6667 10.6668C12.6667 10.6668 13.3333 10.0002 13.3333 10.0002V2.00016C13.3333 2.00016 12.6667 2.66683 10.6667 2.66683C8.66667 2.66683 7.33333 1.3335 5.33333 1.3335C3.33333 1.3335 2.66667 2.00016 2.66667 2.00016V10.0002Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M2.66667 14.6667V10" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>

                                                <span>
                                                    Report
                                                </span>
                                            </a>
                                            <a className="card-options__link" href="#">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 4H14" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66667C4 14.6667 3.33333 14 3.33333 13.3333V4" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M5.33333 4.00016V2.66683C5.33333 2.00016 6 1.3335 6.66667 1.3335H9.33333C10 1.3335 10.6667 2.00016 10.6667 2.66683V4.00016" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M6.66667 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M9.33333 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>


                                                <span>
                                                    Delete
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-body__view post-body-view">
                                    <a className="post-body-view__link" href="#">
                                        <img className="post-body-view__link-img" src="/images/new/34525.jpg" alt="img"/>
                                    </a>
                                </div>
                                <div className="post-body__info post-body-info">
                                    <div className="post-body-info__box post-body-info-box">
                                        <ul className="post-body-info-box__list post-body-info-box-list">
                                            <li className="post-body-info-box-list__item">
                                                <a className="post-body-info-box-list__link" href="#">
                                                    <img className="post-body-info-box-list__link-img" src="/images/member-icon-8.png" alt="img"/>
                                                </a>
                                            </li>
                                            <li className="post-body-info-box-list__item">
                                                <a className="post-body-info-box-list__link" href="#">
                                                    <img className="post-body-info-box-list__link-img" src="/images/member-icon-21.png" alt="img"/>
                                                </a>
                                            </li>
                                            <li className="post-body-info-box-list__item">
                                                <a className="post-body-info-box-list__link" href="#">
                                                    <img className="post-body-info-box-list__link-img" src="/images/member-icon-25.png" alt="img"/>
                                                </a>
                                            </li>
                                            <li className="post-body-info-box-list__item">
                                                <p className="post-body-info-box-list__text">
                                                    6+
                                                </p>
                                            </li>
                                        </ul>
                                        <p className="post-body-info-box__text">
                                            liked this post
                                        </p>
                                    </div>
                                    <p className="post-body-info__text">
                                        <span>
                                            2
                                        </span>
                                        Comments
                                    </p>
                                </div>
                                <form className="post-body__assessment post-body-assessment" action="#">
                                    <button className="post-body-assessment__btn post-body-assessment__btn--unlike" type="button">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.66675 8.09556L2.66675 3.4289M5.00008 8.37063V4.00033C5.00008 3.26395 5.59704 2.66699 6.33341 2.66699H11.5936C12.2201 2.66699 12.7622 3.10328 12.8961 3.7154L13.8231 7.9531C13.914 8.36886 13.5974 8.76223 13.1718 8.76223H10.6667C9.93037 8.76223 9.33341 9.35918 9.33341 10.0956V11.0174C9.33341 11.7077 9.05917 12.3698 8.57101 12.858C8.2775 13.1515 7.78793 13.0989 7.56346 12.7497L5.21184 9.09164C5.07359 8.87658 5.00008 8.6263 5.00008 8.37063Z" stroke="#6D9985" strokeWidth="1.5" strokeLinecap="round"></path>
                                        </svg>
                                        <span>
                                            Unlike
                                        </span>
                                    </button>
                                    <button className="post-body-assessment__btn" type="button">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_137_2244)">
                                                <path d="M9.33325 6.00016C9.33325 6.35378 9.19278 6.69292 8.94273 6.94297C8.69268 7.19302 8.35354 7.3335 7.99992 7.3335H3.99992L1.33325 10.0002V2.66683C1.33325 1.9335 1.93325 1.3335 2.66659 1.3335H7.99992C8.35354 1.3335 8.69268 1.47397 8.94273 1.72402C9.19278 1.97407 9.33325 2.31321 9.33325 2.66683V6.00016Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M12.0001 6H13.3334C13.687 6 14.0262 6.14048 14.2762 6.39052C14.5263 6.64057 14.6667 6.97971 14.6667 7.33333V14.6667L12.0001 12H8.00008C7.64646 12 7.30732 11.8595 7.05727 11.6095C6.80722 11.3594 6.66675 11.0203 6.66675 10.6667V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_137_2244">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>
                                            Comment
                                        </span>
                                    </button>
                                </form>
                            </div>
                            <div className="post__comments post-comments comments">
                                <div className="comments__inner">
                                    <div className="comments__wrapper">
                                        <div className="comments__item comments-item">
                                            <div className="comments-item__options card-options">
                                                <div className="card-options__btn">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div className="card-options__inner">
                                                    <a className="card-options__link" href="#">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="icons">
                                                                <path id="Vector" d="M8 11.3335V14.6668" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path id="Vector_2" d="M3.33333 11.3335H12.6667V10.1602C12.6665 9.91211 12.5972 9.66901 12.4665 9.45819C12.3358 9.24738 12.1488 9.07721 11.9267 8.96683L10.74 8.36683C10.5179 8.25644 10.3309 8.08628 10.2002 7.87547C10.0695 7.66465 10.0001 7.42155 10 7.1735V4.00016H10.6667C11.0203 4.00016 11.3594 3.85969 11.6095 3.60964C11.8595 3.35959 12 3.02045 12 2.66683C12 2.31321 11.8595 1.97407 11.6095 1.72402C11.3594 1.47397 11.0203 1.3335 10.6667 1.3335H5.33333C4.97971 1.3335 4.64057 1.47397 4.39052 1.72402C4.14048 1.97407 4 2.31321 4 2.66683C4 3.02045 4.14048 3.35959 4.39052 3.60964C4.64057 3.85969 4.97971 4.00016 5.33333 4.00016H6V7.1735C5.99987 7.42155 5.93054 7.66465 5.79981 7.87547C5.66909 8.08628 5.48214 8.25644 5.26 8.36683L4.07333 8.96683C3.85119 9.07721 3.66425 9.24738 3.53352 9.45819C3.40279 9.66901 3.33347 9.91211 3.33333 10.1602V11.3335Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </g>
                                                        </svg>

                                                        <span>
                                                            Pin to Top
                                                        </span>
                                                    </a>
                                                    <a className="card-options__link" href="#">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.66667 10.0002C2.66667 10.0002 3.33333 9.3335 5.33333 9.3335C7.33333 9.3335 8.66667 10.6668 10.6667 10.6668C12.6667 10.6668 13.3333 10.0002 13.3333 10.0002V2.00016C13.3333 2.00016 12.6667 2.66683 10.6667 2.66683C8.66667 2.66683 7.33333 1.3335 5.33333 1.3335C3.33333 1.3335 2.66667 2.00016 2.66667 2.00016V10.0002Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M2.66667 14.6667V10" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>

                                                        <span>
                                                            Report
                                                        </span>
                                                    </a>
                                                    <a className="card-options__link" href="#">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2 4H14" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66667C4 14.6667 3.33333 14 3.33333 13.3333V4" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M5.33333 4.00016V2.66683C5.33333 2.00016 6 1.3335 6.66667 1.3335H9.33333C10 1.3335 10.6667 2.00016 10.6667 2.66683V4.00016" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M6.66667 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M9.33333 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>


                                                        <span>
                                                            Delete
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="comments-item__img">
                                                <img className="comments-item__image" src="/images/member-icon-19.png" alt="img"/>
                                            </div>
                                            <div className="comments-item__inner">
                                                <p className="comments-item__name">
                                                    Philippa Bush
                                                </p>
                                                <p className="comments-item__date">
                                                    a year ago
                                                </p>
                                                <p className="comments-item__text">
                                                    Where is that? Looks beautiful.
                                                </p>
                                                <a className="comments-item__link" href="#">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.99935 11.3332L2.66602 7.99984L5.99935 4.6665" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M13.3327 12V10.6667C13.3327 9.95942 13.0517 9.28115 12.5516 8.78105C12.0515 8.28095 11.3733 8 10.666 8H2.66602" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                    <span>
                                                        Reply
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comments__wrapper">
                                        <div className="comments__item comments-item">
                                            <div className="comments-item__options card-options">
                                                <div className="card-options__btn">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div className="card-options__inner">
                                                    <a className="card-options__link" href="#">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="icons">
                                                                <path id="Vector" d="M8 11.3335V14.6668" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path id="Vector_2" d="M3.33333 11.3335H12.6667V10.1602C12.6665 9.91211 12.5972 9.66901 12.4665 9.45819C12.3358 9.24738 12.1488 9.07721 11.9267 8.96683L10.74 8.36683C10.5179 8.25644 10.3309 8.08628 10.2002 7.87547C10.0695 7.66465 10.0001 7.42155 10 7.1735V4.00016H10.6667C11.0203 4.00016 11.3594 3.85969 11.6095 3.60964C11.8595 3.35959 12 3.02045 12 2.66683C12 2.31321 11.8595 1.97407 11.6095 1.72402C11.3594 1.47397 11.0203 1.3335 10.6667 1.3335H5.33333C4.97971 1.3335 4.64057 1.47397 4.39052 1.72402C4.14048 1.97407 4 2.31321 4 2.66683C4 3.02045 4.14048 3.35959 4.39052 3.60964C4.64057 3.85969 4.97971 4.00016 5.33333 4.00016H6V7.1735C5.99987 7.42155 5.93054 7.66465 5.79981 7.87547C5.66909 8.08628 5.48214 8.25644 5.26 8.36683L4.07333 8.96683C3.85119 9.07721 3.66425 9.24738 3.53352 9.45819C3.40279 9.66901 3.33347 9.91211 3.33333 10.1602V11.3335Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </g>
                                                        </svg>

                                                        <span>
                                                            Pin to Top
                                                        </span>
                                                    </a>
                                                    <a className="card-options__link" href="#">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.66667 10.0002C2.66667 10.0002 3.33333 9.3335 5.33333 9.3335C7.33333 9.3335 8.66667 10.6668 10.6667 10.6668C12.6667 10.6668 13.3333 10.0002 13.3333 10.0002V2.00016C13.3333 2.00016 12.6667 2.66683 10.6667 2.66683C8.66667 2.66683 7.33333 1.3335 5.33333 1.3335C3.33333 1.3335 2.66667 2.00016 2.66667 2.00016V10.0002Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M2.66667 14.6667V10" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>

                                                        <span>
                                                            Report
                                                        </span>
                                                    </a>
                                                    <a className="card-options__link" href="#">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2 4H14" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66667C4 14.6667 3.33333 14 3.33333 13.3333V4" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M5.33333 4.00016V2.66683C5.33333 2.00016 6 1.3335 6.66667 1.3335H9.33333C10 1.3335 10.6667 2.00016 10.6667 2.66683V4.00016" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M6.66667 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M9.33333 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>


                                                        <span>
                                                            Delete
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="comments-item__img">
                                                <img className="comments-item__image" src="/images/member-icon-12.png" alt="img"/>
                                            </div>
                                            <div className="comments-item__inner">
                                                <p className="comments-item__name">
                                                    Tina Alvarez
                                                </p>
                                                <p className="comments-item__date">
                                                    a year ago
                                                </p>
                                                <p className="comments-item__text">
                                                    Looks professional.
                                                </p>
                                                <div className="comments-item__pictures">
                                                    <img className="comments-item__pictures-image" src="/images/new/23425.jpg" alt="img"/>
                                                </div>
                                                <a className="comments-item__link" href="#">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.99935 11.3332L2.66602 7.99984L5.99935 4.6665" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M13.3327 12V10.6667C13.3327 9.95942 13.0517 9.28115 12.5516 8.78105C12.0515 8.28095 11.3733 8 10.666 8H2.66602" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                    <span>
                                                        Reply
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group-profile-posts__post post">
                            <div className="post__body post-body">
                                <div className="post-body__top post-body-top">
                                    <a className="post-body-top__link" href="#">
                                        <img className="post-body-top__link-img" src="/images/member-icon-25.png" alt="img"/>
                                    </a>
                                    <div className="post-body-top__box">
                                        <p className="post-body-top__box-text">
                                            <a href="#">
                                                Susan Foley
                                            </a>
                                            posted an update in the group
                                            <span>
                                                Graphic Design
                                            </span>
                                        </p>
                                        <p className="post-body-top__box-subtext">
                                            6 months ago
                                        </p>
                                    </div>
                                    <div className="post-body-top__options card-options">
                                        <div className="card-options__btn">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="card-options__inner">
                                            <a className="card-options__link" href="#">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="icons">
                                                        <path id="Vector" d="M8 11.3335V14.6668" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path id="Vector_2" d="M3.33333 11.3335H12.6667V10.1602C12.6665 9.91211 12.5972 9.66901 12.4665 9.45819C12.3358 9.24738 12.1488 9.07721 11.9267 8.96683L10.74 8.36683C10.5179 8.25644 10.3309 8.08628 10.2002 7.87547C10.0695 7.66465 10.0001 7.42155 10 7.1735V4.00016H10.6667C11.0203 4.00016 11.3594 3.85969 11.6095 3.60964C11.8595 3.35959 12 3.02045 12 2.66683C12 2.31321 11.8595 1.97407 11.6095 1.72402C11.3594 1.47397 11.0203 1.3335 10.6667 1.3335H5.33333C4.97971 1.3335 4.64057 1.47397 4.39052 1.72402C4.14048 1.97407 4 2.31321 4 2.66683C4 3.02045 4.14048 3.35959 4.39052 3.60964C4.64057 3.85969 4.97971 4.00016 5.33333 4.00016H6V7.1735C5.99987 7.42155 5.93054 7.66465 5.79981 7.87547C5.66909 8.08628 5.48214 8.25644 5.26 8.36683L4.07333 8.96683C3.85119 9.07721 3.66425 9.24738 3.53352 9.45819C3.40279 9.66901 3.33347 9.91211 3.33333 10.1602V11.3335Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </g>
                                                </svg>

                                                <span>
                                                    Pin to Top
                                                </span>
                                            </a>
                                            <a className="card-options__link" href="#">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.66667 10.0002C2.66667 10.0002 3.33333 9.3335 5.33333 9.3335C7.33333 9.3335 8.66667 10.6668 10.6667 10.6668C12.6667 10.6668 13.3333 10.0002 13.3333 10.0002V2.00016C13.3333 2.00016 12.6667 2.66683 10.6667 2.66683C8.66667 2.66683 7.33333 1.3335 5.33333 1.3335C3.33333 1.3335 2.66667 2.00016 2.66667 2.00016V10.0002Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M2.66667 14.6667V10" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>

                                                <span>
                                                    Report
                                                </span>
                                            </a>
                                            <a className="card-options__link" href="#">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 4H14" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66667C4 14.6667 3.33333 14 3.33333 13.3333V4" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M5.33333 4.00016V2.66683C5.33333 2.00016 6 1.3335 6.66667 1.3335H9.33333C10 1.3335 10.6667 2.00016 10.6667 2.66683V4.00016" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M6.66667 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M9.33333 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>


                                                <span>
                                                    Delete
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-body__view post-body-view post-body-view--grid">
                                    <a className="post-body-view__link" href="#">
                                        <img className="post-body-view__link-img" src="/images/new/m1.jpg" alt="img"/>
                                    </a>
                                    <a className="post-body-view__link" href="#">
                                        <img className="post-body-view__link-img" src="/images/new/m2.jpg" alt="img"/>
                                    </a>
                                    <a className="post-body-view__link" href="#">
                                        <img className="post-body-view__link-img" src="/images/new/m3.jpg" alt="img"/>
                                    </a>
                                    <a className="post-body-view__link" href="#">
                                        <img className="post-body-view__link-img" src="/images/new/m4.jpg" alt="img"/>
                                    </a>
                                    <a className="post-body-view__link" href="#">
                                        <img className="post-body-view__link-img" src="/images/new/m5.jpg" alt="img"/>
                                    </a>
                                </div>
                                <div className="post-body__info post-body-info">
                                    <div className="post-body-info__box post-body-info-box">
                                        <ul className="post-body-info-box__list post-body-info-box-list">
                                            <li className="post-body-info-box-list__item">
                                                <a className="post-body-info-box-list__link" href="#">
                                                    <img className="post-body-info-box-list__link-img" src="/images/member-icon-6.png" alt="img"/>
                                                </a>
                                            </li>
                                            <li className="post-body-info-box-list__item">
                                                <a className="post-body-info-box-list__link" href="#">
                                                    <img className="post-body-info-box-list__link-img" src="/images/member-icon-14.png" alt="img"/>
                                                </a>
                                            </li>
                                            <li className="post-body-info-box-list__item">
                                                <a className="post-body-info-box-list__link" href="#">
                                                    <img className="post-body-info-box-list__link-img" src="/images/member-icon-1.png" alt="img"/>
                                                </a>
                                            </li>
                                            <li className="post-body-info-box-list__item">
                                                <p className="post-body-info-box-list__text">
                                                    6+
                                                </p>
                                            </li>
                                        </ul>
                                        <p className="post-body-info-box__text">
                                            liked this post
                                        </p>
                                    </div>
                                    <p className="post-body-info__text">
                                        <span>
                                            5
                                        </span>
                                        Comments
                                    </p>
                                </div>
                                <form className="post-body__assessment post-body-assessment" action="#">
                                    <button className="post-body-assessment__btn post-body-assessment__btn--unlike" type="button">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.66675 8.09556L2.66675 3.4289M5.00008 8.37063V4.00033C5.00008 3.26395 5.59704 2.66699 6.33341 2.66699H11.5936C12.2201 2.66699 12.7622 3.10328 12.8961 3.7154L13.8231 7.9531C13.914 8.36886 13.5974 8.76223 13.1718 8.76223H10.6667C9.93037 8.76223 9.33341 9.35918 9.33341 10.0956V11.0174C9.33341 11.7077 9.05917 12.3698 8.57101 12.858C8.2775 13.1515 7.78793 13.0989 7.56346 12.7497L5.21184 9.09164C5.07359 8.87658 5.00008 8.6263 5.00008 8.37063Z" stroke="#6D9985" strokeWidth="1.5" strokeLinecap="round"></path>
                                        </svg>
                                        <span>
                                            Unlike
                                        </span>
                                    </button>
                                    <button className="post-body-assessment__btn" type="button">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_137_2244)">
                                                <path d="M9.33325 6.00016C9.33325 6.35378 9.19278 6.69292 8.94273 6.94297C8.69268 7.19302 8.35354 7.3335 7.99992 7.3335H3.99992L1.33325 10.0002V2.66683C1.33325 1.9335 1.93325 1.3335 2.66659 1.3335H7.99992C8.35354 1.3335 8.69268 1.47397 8.94273 1.72402C9.19278 1.97407 9.33325 2.31321 9.33325 2.66683V6.00016Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M12.0001 6H13.3334C13.687 6 14.0262 6.14048 14.2762 6.39052C14.5263 6.64057 14.6667 6.97971 14.6667 7.33333V14.6667L12.0001 12H8.00008C7.64646 12 7.30732 11.8595 7.05727 11.6095C6.80722 11.3594 6.66675 11.0203 6.66675 10.6667V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_137_2244">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>
                                            Comment
                                        </span>
                                    </button>
                                </form>
                            </div>
                            <div className="post__comments post-comments comments">
                                <div className="comments__inner">
                                    <div className="comments__wrapper">
                                        <div className="comments__item comments-item">
                                            <div className="comments-item__options card-options">
                                                <div className="card-options__btn">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div className="card-options__inner">
                                                    <a className="card-options__link" href="#">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="icons">
                                                                <path id="Vector" d="M8 11.3335V14.6668" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path id="Vector_2" d="M3.33333 11.3335H12.6667V10.1602C12.6665 9.91211 12.5972 9.66901 12.4665 9.45819C12.3358 9.24738 12.1488 9.07721 11.9267 8.96683L10.74 8.36683C10.5179 8.25644 10.3309 8.08628 10.2002 7.87547C10.0695 7.66465 10.0001 7.42155 10 7.1735V4.00016H10.6667C11.0203 4.00016 11.3594 3.85969 11.6095 3.60964C11.8595 3.35959 12 3.02045 12 2.66683C12 2.31321 11.8595 1.97407 11.6095 1.72402C11.3594 1.47397 11.0203 1.3335 10.6667 1.3335H5.33333C4.97971 1.3335 4.64057 1.47397 4.39052 1.72402C4.14048 1.97407 4 2.31321 4 2.66683C4 3.02045 4.14048 3.35959 4.39052 3.60964C4.64057 3.85969 4.97971 4.00016 5.33333 4.00016H6V7.1735C5.99987 7.42155 5.93054 7.66465 5.79981 7.87547C5.66909 8.08628 5.48214 8.25644 5.26 8.36683L4.07333 8.96683C3.85119 9.07721 3.66425 9.24738 3.53352 9.45819C3.40279 9.66901 3.33347 9.91211 3.33333 10.1602V11.3335Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </g>
                                                        </svg>

                                                        <span>
                                                            Pin to Top
                                                        </span>
                                                    </a>
                                                    <a className="card-options__link" href="#">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.66667 10.0002C2.66667 10.0002 3.33333 9.3335 5.33333 9.3335C7.33333 9.3335 8.66667 10.6668 10.6667 10.6668C12.6667 10.6668 13.3333 10.0002 13.3333 10.0002V2.00016C13.3333 2.00016 12.6667 2.66683 10.6667 2.66683C8.66667 2.66683 7.33333 1.3335 5.33333 1.3335C3.33333 1.3335 2.66667 2.00016 2.66667 2.00016V10.0002Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M2.66667 14.6667V10" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>

                                                        <span>
                                                            Report
                                                        </span>
                                                    </a>
                                                    <a className="card-options__link" href="#">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2 4H14" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66667C4 14.6667 3.33333 14 3.33333 13.3333V4" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M5.33333 4.00016V2.66683C5.33333 2.00016 6 1.3335 6.66667 1.3335H9.33333C10 1.3335 10.6667 2.00016 10.6667 2.66683V4.00016" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M6.66667 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M9.33333 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>


                                                        <span>
                                                            Delete
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="comments-item__img">
                                                <img className="comments-item__image" src="/images/member-icon-28.png" alt="img"/>
                                            </div>
                                            <div className="comments-item__inner">
                                                <p className="comments-item__name">
                                                    Philippa Bush
                                                </p>
                                                <p className="comments-item__date">
                                                    a year ago
                                                </p>
                                                <p className="comments-item__text">
                                                    Where is that? Looks beautiful.
                                                </p>
                                                <a className="comments-item__link" href="#">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.99935 11.3332L2.66602 7.99984L5.99935 4.6665" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M13.3327 12V10.6667C13.3327 9.95942 13.0517 9.28115 12.5516 8.78105C12.0515 8.28095 11.3733 8 10.666 8H2.66602" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                    <span>
                                                        Reply
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comments__wrapper">
                                        <div className="comments__item comments-item">
                                            <div className="comments-item__options card-options">
                                                <div className="card-options__btn">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div className="card-options__inner">
                                                    <a className="card-options__link" href="#">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="icons">
                                                                <path id="Vector" d="M8 11.3335V14.6668" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path id="Vector_2" d="M3.33333 11.3335H12.6667V10.1602C12.6665 9.91211 12.5972 9.66901 12.4665 9.45819C12.3358 9.24738 12.1488 9.07721 11.9267 8.96683L10.74 8.36683C10.5179 8.25644 10.3309 8.08628 10.2002 7.87547C10.0695 7.66465 10.0001 7.42155 10 7.1735V4.00016H10.6667C11.0203 4.00016 11.3594 3.85969 11.6095 3.60964C11.8595 3.35959 12 3.02045 12 2.66683C12 2.31321 11.8595 1.97407 11.6095 1.72402C11.3594 1.47397 11.0203 1.3335 10.6667 1.3335H5.33333C4.97971 1.3335 4.64057 1.47397 4.39052 1.72402C4.14048 1.97407 4 2.31321 4 2.66683C4 3.02045 4.14048 3.35959 4.39052 3.60964C4.64057 3.85969 4.97971 4.00016 5.33333 4.00016H6V7.1735C5.99987 7.42155 5.93054 7.66465 5.79981 7.87547C5.66909 8.08628 5.48214 8.25644 5.26 8.36683L4.07333 8.96683C3.85119 9.07721 3.66425 9.24738 3.53352 9.45819C3.40279 9.66901 3.33347 9.91211 3.33333 10.1602V11.3335Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </g>
                                                        </svg>

                                                        <span>
                                                            Pin to Top
                                                        </span>
                                                    </a>
                                                    <a className="card-options__link" href="#">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.66667 10.0002C2.66667 10.0002 3.33333 9.3335 5.33333 9.3335C7.33333 9.3335 8.66667 10.6668 10.6667 10.6668C12.6667 10.6668 13.3333 10.0002 13.3333 10.0002V2.00016C13.3333 2.00016 12.6667 2.66683 10.6667 2.66683C8.66667 2.66683 7.33333 1.3335 5.33333 1.3335C3.33333 1.3335 2.66667 2.00016 2.66667 2.00016V10.0002Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M2.66667 14.6667V10" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>

                                                        <span>
                                                            Report
                                                        </span>
                                                    </a>
                                                    <a className="card-options__link" href="#">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2 4H14" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66667C4 14.6667 3.33333 14 3.33333 13.3333V4" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M5.33333 4.00016V2.66683C5.33333 2.00016 6 1.3335 6.66667 1.3335H9.33333C10 1.3335 10.6667 2.00016 10.6667 2.66683V4.00016" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M6.66667 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M9.33333 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>


                                                        <span>
                                                            Delete
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="comments-item__img">
                                                <img className="comments-item__image" src="/images/member-icon-10.png" alt="img"/>
                                            </div>
                                            <div className="comments-item__inner">
                                                <p className="comments-item__name">
                                                    Tina Alvarez
                                                </p>
                                                <p className="comments-item__date">
                                                    a year ago
                                                </p>
                                                <p className="comments-item__text">
                                                    Looks delicious
                                                </p>
                                                <a className="comments-item__link" href="#">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.99935 11.3332L2.66602 7.99984L5.99935 4.6665" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M13.3327 12V10.6667C13.3327 9.95942 13.0517 9.28115 12.5516 8.78105C12.0515 8.28095 11.3733 8 10.666 8H2.66602" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                    <span>
                                                        Reply
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="comments__replyed comments-replied">
                                            <div className="comments-replied__item comments-item">
                                                <div className="comments-item__options card-options">
                                                    <div className="card-options__btn">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                    <div className="card-options__inner">
                                                        <a className="card-options__link" href="#">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="icons">
                                                                    <path id="Vector" d="M8 11.3335V14.6668" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path id="Vector_2" d="M3.33333 11.3335H12.6667V10.1602C12.6665 9.91211 12.5972 9.66901 12.4665 9.45819C12.3358 9.24738 12.1488 9.07721 11.9267 8.96683L10.74 8.36683C10.5179 8.25644 10.3309 8.08628 10.2002 7.87547C10.0695 7.66465 10.0001 7.42155 10 7.1735V4.00016H10.6667C11.0203 4.00016 11.3594 3.85969 11.6095 3.60964C11.8595 3.35959 12 3.02045 12 2.66683C12 2.31321 11.8595 1.97407 11.6095 1.72402C11.3594 1.47397 11.0203 1.3335 10.6667 1.3335H5.33333C4.97971 1.3335 4.64057 1.47397 4.39052 1.72402C4.14048 1.97407 4 2.31321 4 2.66683C4 3.02045 4.14048 3.35959 4.39052 3.60964C4.64057 3.85969 4.97971 4.00016 5.33333 4.00016H6V7.1735C5.99987 7.42155 5.93054 7.66465 5.79981 7.87547C5.66909 8.08628 5.48214 8.25644 5.26 8.36683L4.07333 8.96683C3.85119 9.07721 3.66425 9.24738 3.53352 9.45819C3.40279 9.66901 3.33347 9.91211 3.33333 10.1602V11.3335Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                </g>
                                                            </svg>

                                                            <span>
                                                                Pin to Top
                                                            </span>
                                                        </a>
                                                        <a className="card-options__link" href="#">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2.66667 10.0002C2.66667 10.0002 3.33333 9.3335 5.33333 9.3335C7.33333 9.3335 8.66667 10.6668 10.6667 10.6668C12.6667 10.6668 13.3333 10.0002 13.3333 10.0002V2.00016C13.3333 2.00016 12.6667 2.66683 10.6667 2.66683C8.66667 2.66683 7.33333 1.3335 5.33333 1.3335C3.33333 1.3335 2.66667 2.00016 2.66667 2.00016V10.0002Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M2.66667 14.6667V10" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>

                                                            <span>
                                                                Report
                                                            </span>
                                                        </a>
                                                        <a className="card-options__link" href="#">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2 4H14" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66667C4 14.6667 3.33333 14 3.33333 13.3333V4" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M5.33333 4.00016V2.66683C5.33333 2.00016 6 1.3335 6.66667 1.3335H9.33333C10 1.3335 10.6667 2.00016 10.6667 2.66683V4.00016" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M6.66667 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M9.33333 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>


                                                            <span>
                                                                Delete
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="comments-item__img">
                                                    <img className="comments-item__image" src="/images/member-icon-3.png" alt="img"/>
                                                </div>
                                                <div className="comments-item__inner">
                                                    <p className="comments-item__name">
                                                        Timothy Stuart
                                                    </p>
                                                    <p className="comments-item__date">
                                                        a year ago
                                                    </p>
                                                    <p className="comments-item__text">
                                                        Nice work. Keep it going. I look forward to seeing more of your.
                                                    </p>
                                                    <a className="comments-item__link" href="#">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.99935 11.3332L2.66602 7.99984L5.99935 4.6665" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M13.3327 12V10.6667C13.3327 9.95942 13.0517 9.28115 12.5516 8.78105C12.0515 8.28095 11.3733 8 10.666 8H2.66602" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                        <span>
                                                            Reply
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="comments__link" href="#">
                                        Show all comments
                                        <span>
                                            (5)
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="group-profile-posts__post post">
                            <div className="post__body post-body">
                                <div className="post-body__top post-body-top">
                                    <a className="post-body-top__link" href="#">
                                        <img className="post-body-top__link-img" src="/images/member-icon-7.png" alt="img"/>
                                    </a>
                                    <div className="post-body-top__box">
                                        <p className="post-body-top__box-text">
                                            <a href="#">
                                                Valerie Ferguson
                                            </a>
                                            joined the group
                                            <span>
                                                Graphic Design
                                            </span>
                                        </p>
                                        <p className="post-body-top__box-subtext">
                                            a year ago
                                        </p>
                                    </div>
                                    <div className="post-body-top__options card-options">
                                        <div className="card-options__btn">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="card-options__inner">
                                            <a className="card-options__link" href="#">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="icons">
                                                        <path id="Vector" d="M8 11.3335V14.6668" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path id="Vector_2" d="M3.33333 11.3335H12.6667V10.1602C12.6665 9.91211 12.5972 9.66901 12.4665 9.45819C12.3358 9.24738 12.1488 9.07721 11.9267 8.96683L10.74 8.36683C10.5179 8.25644 10.3309 8.08628 10.2002 7.87547C10.0695 7.66465 10.0001 7.42155 10 7.1735V4.00016H10.6667C11.0203 4.00016 11.3594 3.85969 11.6095 3.60964C11.8595 3.35959 12 3.02045 12 2.66683C12 2.31321 11.8595 1.97407 11.6095 1.72402C11.3594 1.47397 11.0203 1.3335 10.6667 1.3335H5.33333C4.97971 1.3335 4.64057 1.47397 4.39052 1.72402C4.14048 1.97407 4 2.31321 4 2.66683C4 3.02045 4.14048 3.35959 4.39052 3.60964C4.64057 3.85969 4.97971 4.00016 5.33333 4.00016H6V7.1735C5.99987 7.42155 5.93054 7.66465 5.79981 7.87547C5.66909 8.08628 5.48214 8.25644 5.26 8.36683L4.07333 8.96683C3.85119 9.07721 3.66425 9.24738 3.53352 9.45819C3.40279 9.66901 3.33347 9.91211 3.33333 10.1602V11.3335Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </g>
                                                </svg>

                                                <span>
                                                    Pin to Top
                                                </span>
                                            </a>
                                            <a className="card-options__link" href="#">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.66667 10.0002C2.66667 10.0002 3.33333 9.3335 5.33333 9.3335C7.33333 9.3335 8.66667 10.6668 10.6667 10.6668C12.6667 10.6668 13.3333 10.0002 13.3333 10.0002V2.00016C13.3333 2.00016 12.6667 2.66683 10.6667 2.66683C8.66667 2.66683 7.33333 1.3335 5.33333 1.3335C3.33333 1.3335 2.66667 2.00016 2.66667 2.00016V10.0002Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M2.66667 14.6667V10" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>

                                                <span>
                                                    Report
                                                </span>
                                            </a>
                                            <a className="card-options__link" href="#">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 4H14" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66667C4 14.6667 3.33333 14 3.33333 13.3333V4" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M5.33333 4.00016V2.66683C5.33333 2.00016 6 1.3335 6.66667 1.3335H9.33333C10 1.3335 10.6667 2.00016 10.6667 2.66683V4.00016" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M6.66667 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M9.33333 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>


                                                <span>
                                                    Delete
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-body__user-card user-card">
                                    <a className="user-card__link" href="#">
                                        <img className="user-card__link-img" src="/images/member-icon-14.png" alt="img"/>
                                    </a>
                                    <div className="user-card__body">
                                        <p className="user-card__body-suptext">
                                            graphic designer
                                        </p>
                                        <p className="user-card__body-text">
                                            Valerie
                                            Ferguson
                                        </p>
                                        <a className="user-card__body-link" href="#">
                                            valeriedesign47
                                        </a>
                                    </div>
                                </div>
                                <div className="post-body__info post-body-info">
                                    <div className="post-body-info__box post-body-info-box">
                                        <p className="post-body-info-box__text">
                                            Be the first to like this!
                                        </p>
                                    </div>
                                    <p className="post-body-info__text">
                                        <span>
                                            0
                                        </span>
                                        Comments
                                    </p>
                                </div>
                                <form className="post-body__assessment post-body-assessment" action="#">
                                    <button className="post-body-assessment__btn post-body-assessment__btn--like" type="button">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="icons">
                                                <path id="Icon" d="M2.66675 7.61979L2.66675 12.2865M5.00008 7.34473V11.715C5.00008 12.4514 5.59704 13.0484 6.33341 13.0484H11.5936C12.2201 13.0484 12.7622 12.6121 12.8961 12L13.8231 7.76226C13.914 7.34649 13.5974 6.95312 13.1718 6.95312H10.6667C9.93037 6.95312 9.33341 6.35617 9.33341 5.61979V4.69799C9.33341 4.00763 9.05917 3.34555 8.57101 2.85739C8.2775 2.56388 7.78793 2.61648 7.56346 2.96564L5.21184 6.62372C5.07359 6.83878 5.00008 7.08906 5.00008 7.34473Z" stroke="white" strokeWidth="1.5" strokeLinecap="round"></path>
                                            </g>
                                        </svg>

                                        <span>
                                            Like
                                        </span>
                                    </button>
                                    <button className="post-body-assessment__btn" type="button">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_137_2244)">
                                                <path d="M9.33325 6.00016C9.33325 6.35378 9.19278 6.69292 8.94273 6.94297C8.69268 7.19302 8.35354 7.3335 7.99992 7.3335H3.99992L1.33325 10.0002V2.66683C1.33325 1.9335 1.93325 1.3335 2.66659 1.3335H7.99992C8.35354 1.3335 8.69268 1.47397 8.94273 1.72402C9.19278 1.97407 9.33325 2.31321 9.33325 2.66683V6.00016Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M12.0001 6H13.3334C13.687 6 14.0262 6.14048 14.2762 6.39052C14.5263 6.64057 14.6667 6.97971 14.6667 7.33333V14.6667L12.0001 12H8.00008C7.64646 12 7.30732 11.8595 7.05727 11.6095C6.80722 11.3594 6.66675 11.0203 6.66675 10.6667V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_137_2244">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>
                                            Comment
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="group-profile-posts__post post">
                            <div className="post__body post-body">
                                <div className="post-body__top post-body-top">
                                    <a className="post-body-top__link" href="#">
                                        <img className="post-body-top__link-img" src="/images/member-icon-24.png" alt="img"/>
                                    </a>
                                    <div className="post-body-top__box">
                                        <p className="post-body-top__box-text">
                                            <a href="#">
                                                Katie Campbell
                                            </a>
                                            posted an update in the group
                                            <span>
                                                Graphic Design
                                            </span>
                                        </p>
                                        <p className="post-body-top__box-subtext">
                                            4 months ago
                                        </p>
                                    </div>
                                    <div className="post-body-top__options card-options">
                                        <div className="card-options__btn">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="card-options__inner">
                                            <a className="card-options__link" href="#">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="icons">
                                                        <path id="Vector" d="M8 11.3335V14.6668" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path id="Vector_2" d="M3.33333 11.3335H12.6667V10.1602C12.6665 9.91211 12.5972 9.66901 12.4665 9.45819C12.3358 9.24738 12.1488 9.07721 11.9267 8.96683L10.74 8.36683C10.5179 8.25644 10.3309 8.08628 10.2002 7.87547C10.0695 7.66465 10.0001 7.42155 10 7.1735V4.00016H10.6667C11.0203 4.00016 11.3594 3.85969 11.6095 3.60964C11.8595 3.35959 12 3.02045 12 2.66683C12 2.31321 11.8595 1.97407 11.6095 1.72402C11.3594 1.47397 11.0203 1.3335 10.6667 1.3335H5.33333C4.97971 1.3335 4.64057 1.47397 4.39052 1.72402C4.14048 1.97407 4 2.31321 4 2.66683C4 3.02045 4.14048 3.35959 4.39052 3.60964C4.64057 3.85969 4.97971 4.00016 5.33333 4.00016H6V7.1735C5.99987 7.42155 5.93054 7.66465 5.79981 7.87547C5.66909 8.08628 5.48214 8.25644 5.26 8.36683L4.07333 8.96683C3.85119 9.07721 3.66425 9.24738 3.53352 9.45819C3.40279 9.66901 3.33347 9.91211 3.33333 10.1602V11.3335Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </g>
                                                </svg>

                                                <span>
                                                    Pin to Top
                                                </span>
                                            </a>
                                            <a className="card-options__link" href="#">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.66667 10.0002C2.66667 10.0002 3.33333 9.3335 5.33333 9.3335C7.33333 9.3335 8.66667 10.6668 10.6667 10.6668C12.6667 10.6668 13.3333 10.0002 13.3333 10.0002V2.00016C13.3333 2.00016 12.6667 2.66683 10.6667 2.66683C8.66667 2.66683 7.33333 1.3335 5.33333 1.3335C3.33333 1.3335 2.66667 2.00016 2.66667 2.00016V10.0002Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M2.66667 14.6667V10" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>

                                                <span>
                                                    Report
                                                </span>
                                            </a>
                                            <a className="card-options__link" href="#">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 4H14" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66667C4 14.6667 3.33333 14 3.33333 13.3333V4" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M5.33333 4.00016V2.66683C5.33333 2.00016 6 1.3335 6.66667 1.3335H9.33333C10 1.3335 10.6667 2.00016 10.6667 2.66683V4.00016" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M6.66667 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M9.33333 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>


                                                <span>
                                                    Delete
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-body__content post-body-content">
                                    <p className="post-body-content__text">
                                        I have great news to share with you all! I've been officially made a
                                        game streaming verified partner by Streamy. What does this mean? I'll be
                                        uploading new content every day, improving the quality and I'm gonna
                                        have access to games a month before the official release.
                                    </p>
                                </div>
                                <div className="post-body__info post-body-info">
                                    <div className="post-body-info__box post-body-info-box">
                                        <ul className="post-body-info-box__list post-body-info-box-list">
                                            <li className="post-body-info-box-list__item">
                                                <a className="post-body-info-box-list__link" href="#">
                                                    <img className="post-body-info-box-list__link-img" src="/images/member-icon-18.png" alt="img"/>
                                                </a>
                                            </li>
                                            <li className="post-body-info-box-list__item">
                                                <a className="post-body-info-box-list__link" href="#">
                                                    <img className="post-body-info-box-list__link-img" src="/images/member-icon-2.png" alt="img"/>
                                                </a>
                                            </li>
                                            <li className="post-body-info-box-list__item">
                                                <a className="post-body-info-box-list__link" href="#">
                                                    <img className="post-body-info-box-list__link-img" src="/images/member-icon-23.png" alt="img"/>
                                                </a>
                                            </li>
                                            <li className="post-body-info-box-list__item">
                                                <p className="post-body-info-box-list__text">
                                                    12+
                                                </p>
                                            </li>
                                        </ul>
                                        <p className="post-body-info-box__text">
                                            liked this post
                                        </p>
                                    </div>
                                    <p className="post-body-info__text">
                                        <span>
                                            0
                                        </span>
                                        Comments
                                    </p>
                                </div>
                                <form className="post-body__assessment post-body-assessment" action="#">
                                    <button className="post-body-assessment__btn post-body-assessment__btn--like" type="button">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="icons">
                                                <path id="Icon" d="M2.66675 7.61979L2.66675 12.2865M5.00008 7.34473V11.715C5.00008 12.4514 5.59704 13.0484 6.33341 13.0484H11.5936C12.2201 13.0484 12.7622 12.6121 12.8961 12L13.8231 7.76226C13.914 7.34649 13.5974 6.95312 13.1718 6.95312H10.6667C9.93037 6.95312 9.33341 6.35617 9.33341 5.61979V4.69799C9.33341 4.00763 9.05917 3.34555 8.57101 2.85739C8.2775 2.56388 7.78793 2.61648 7.56346 2.96564L5.21184 6.62372C5.07359 6.83878 5.00008 7.08906 5.00008 7.34473Z" stroke="white" strokeWidth="1.5" strokeLinecap="round"></path>
                                            </g>
                                        </svg>

                                        <span>
                                            Like
                                        </span>
                                    </button>
                                    <button className="post-body-assessment__btn" type="button">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_137_2244)">
                                                <path d="M9.33325 6.00016C9.33325 6.35378 9.19278 6.69292 8.94273 6.94297C8.69268 7.19302 8.35354 7.3335 7.99992 7.3335H3.99992L1.33325 10.0002V2.66683C1.33325 1.9335 1.93325 1.3335 2.66659 1.3335H7.99992C8.35354 1.3335 8.69268 1.47397 8.94273 1.72402C9.19278 1.97407 9.33325 2.31321 9.33325 2.66683V6.00016Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M12.0001 6H13.3334C13.687 6 14.0262 6.14048 14.2762 6.39052C14.5263 6.64057 14.6667 6.97971 14.6667 7.33333V14.6667L12.0001 12H8.00008C7.64646 12 7.30732 11.8595 7.05727 11.6095C6.80722 11.3594 6.66675 11.0203 6.66675 10.6667V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_137_2244">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>
                                            Comment
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="group-profile-posts__post post">
                            <div className="post__body post-body">
                                <div className="post-body__top post-body-top">
                                    <a className="post-body-top__link" href="#">
                                        <img className="post-body-top__link-img" src="/images/member-icon-19.png" alt="img"/>
                                    </a>
                                    <div className="post-body-top__box">
                                        <p className="post-body-top__box-text">
                                            <a href="#">
                                                Susan Foley
                                            </a>
                                            posted an update in the group
                                            <span>
                                                Graphic Design
                                            </span>
                                        </p>
                                        <p className="post-body-top__box-subtext">
                                            a year ago
                                        </p>
                                    </div>
                                    <div className="post-body-top__options card-options">
                                        <div className="card-options__btn">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="card-options__inner">
                                            <a className="card-options__link" href="#">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="icons">
                                                        <path id="Vector" d="M8 11.3335V14.6668" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path id="Vector_2" d="M3.33333 11.3335H12.6667V10.1602C12.6665 9.91211 12.5972 9.66901 12.4665 9.45819C12.3358 9.24738 12.1488 9.07721 11.9267 8.96683L10.74 8.36683C10.5179 8.25644 10.3309 8.08628 10.2002 7.87547C10.0695 7.66465 10.0001 7.42155 10 7.1735V4.00016H10.6667C11.0203 4.00016 11.3594 3.85969 11.6095 3.60964C11.8595 3.35959 12 3.02045 12 2.66683C12 2.31321 11.8595 1.97407 11.6095 1.72402C11.3594 1.47397 11.0203 1.3335 10.6667 1.3335H5.33333C4.97971 1.3335 4.64057 1.47397 4.39052 1.72402C4.14048 1.97407 4 2.31321 4 2.66683C4 3.02045 4.14048 3.35959 4.39052 3.60964C4.64057 3.85969 4.97971 4.00016 5.33333 4.00016H6V7.1735C5.99987 7.42155 5.93054 7.66465 5.79981 7.87547C5.66909 8.08628 5.48214 8.25644 5.26 8.36683L4.07333 8.96683C3.85119 9.07721 3.66425 9.24738 3.53352 9.45819C3.40279 9.66901 3.33347 9.91211 3.33333 10.1602V11.3335Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </g>
                                                </svg>

                                                <span>
                                                    Pin to Top
                                                </span>
                                            </a>
                                            <a className="card-options__link" href="#">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.66667 10.0002C2.66667 10.0002 3.33333 9.3335 5.33333 9.3335C7.33333 9.3335 8.66667 10.6668 10.6667 10.6668C12.6667 10.6668 13.3333 10.0002 13.3333 10.0002V2.00016C13.3333 2.00016 12.6667 2.66683 10.6667 2.66683C8.66667 2.66683 7.33333 1.3335 5.33333 1.3335C3.33333 1.3335 2.66667 2.00016 2.66667 2.00016V10.0002Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M2.66667 14.6667V10" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>

                                                <span>
                                                    Report
                                                </span>
                                            </a>
                                            <a className="card-options__link" href="#">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 4H14" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66667C4 14.6667 3.33333 14 3.33333 13.3333V4" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M5.33333 4.00016V2.66683C5.33333 2.00016 6 1.3335 6.66667 1.3335H9.33333C10 1.3335 10.6667 2.00016 10.6667 2.66683V4.00016" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M6.66667 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M9.33333 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>


                                                <span>
                                                    Delete
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-body-content">
                                    <p className="post-body-content__text">
                                        Top 5 books published in 2018 📚
                                    </p>
                                    <ol className="post-body-content__list">
                                        <li className="post-body-content__list-item">
                                            Educated – by Tara Westover
                                        </li>
                                        <li className="post-body-content__list-item">
                                            The
                                            Woman in the Window – by A.J. Finn
                                        </li>
                                        <li className="post-body-content__list-item">
                                            The Great Alone – by Kristin
                                            Hannah
                                        </li>
                                        <li className="post-body-content__list-item">
                                            Becoming – by Michelle Obama
                                        </li>
                                        <li className="post-body-content__list-item">
                                            An American Marriage – by
                                            Tayari Jones
                                        </li>
                                    </ol>
                                    <div className="post-body-content__videos videos videos--big">
                                        <a className="videos__item videos-item" data-fancybox="" href="images/course-img-7.jpg">
                                            <img className="videos-item__img" src="/images/course-img-7.jpg" alt="img"/>
                                            <div className="videos-item__icon">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.33301 2L12.6663 8L3.33301 14V2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </div>
                                            <p className="videos-item__text">
                                                0:28
                                            </p>
                                        </a>
                                        <a className="videos__item videos-item" data-fancybox="" href="images/group-img-37.jpg">
                                            <img className="videos-item__img" src="/images/group-img-37.jpg" alt="img"/>
                                            <div className="videos-item__icon">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.33301 2L12.6663 8L3.33301 14V2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </div>
                                            <p className="videos-item__text">
                                                0:28
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="post-body__info post-body-info">
                                    <div className="post-body-info__box post-body-info-box">
                                        <ul className="post-body-info-box__list post-body-info-box-list">
                                            <li className="post-body-info-box-list__item">
                                                <a className="post-body-info-box-list__link" href="#">
                                                    <img className="post-body-info-box-list__link-img" src="/images/member-icon-14.png" alt="img"/>
                                                </a>
                                            </li>
                                            <li className="post-body-info-box-list__item">
                                                <a className="post-body-info-box-list__link" href="#">
                                                    <img className="post-body-info-box-list__link-img" src="/images/member-icon-10.png" alt="img"/>
                                                </a>
                                            </li>
                                        </ul>
                                        <p className="post-body-info-box__text">
                                            liked this post
                                        </p>
                                    </div>
                                    <p className="post-body-info__text">
                                        <span>
                                            0
                                        </span>
                                        Comments
                                    </p>
                                </div>
                                <form className="post-body__assessment post-body-assessment" action="#">
                                    <button className="post-body-assessment__btn post-body-assessment__btn--like" type="button">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="icons">
                                                <path id="Icon" d="M2.66675 7.61979L2.66675 12.2865M5.00008 7.34473V11.715C5.00008 12.4514 5.59704 13.0484 6.33341 13.0484H11.5936C12.2201 13.0484 12.7622 12.6121 12.8961 12L13.8231 7.76226C13.914 7.34649 13.5974 6.95312 13.1718 6.95312H10.6667C9.93037 6.95312 9.33341 6.35617 9.33341 5.61979V4.69799C9.33341 4.00763 9.05917 3.34555 8.57101 2.85739C8.2775 2.56388 7.78793 2.61648 7.56346 2.96564L5.21184 6.62372C5.07359 6.83878 5.00008 7.08906 5.00008 7.34473Z" stroke="white" strokeWidth="1.5" strokeLinecap="round"></path>
                                            </g>
                                        </svg>

                                        <span>
                                            Like
                                        </span>
                                    </button>
                                    <button className="post-body-assessment__btn" type="button">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_137_2244)">
                                                <path d="M9.33325 6.00016C9.33325 6.35378 9.19278 6.69292 8.94273 6.94297C8.69268 7.19302 8.35354 7.3335 7.99992 7.3335H3.99992L1.33325 10.0002V2.66683C1.33325 1.9335 1.93325 1.3335 2.66659 1.3335H7.99992C8.35354 1.3335 8.69268 1.47397 8.94273 1.72402C9.19278 1.97407 9.33325 2.31321 9.33325 2.66683V6.00016Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M12.0001 6H13.3334C13.687 6 14.0262 6.14048 14.2762 6.39052C14.5263 6.64057 14.6667 6.97971 14.6667 7.33333V14.6667L12.0001 12H8.00008C7.64646 12 7.30732 11.8595 7.05727 11.6095C6.80722 11.3594 6.66675 11.0203 6.66675 10.6667V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_137_2244">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>
                                            Comment
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="group-profile__aside group-profile-aside">
                    <div className="group-profile-aside__aside-block aside-block">
                        <h3 className="aside-block__title">
                            Group Administrators
                        </h3>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-11.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Lilly-Rose Holland
                                    </a>
                                </p>
                                <p className="aside-block-item-box__subtext">
                                    lillyrose.flower
                                </p>
                            </div>
                        </div>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-20.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Timothy Stuart
                                    </a>
                                </p>
                                <p className="aside-block-item-box__subtext">
                                    tim.stuart.3d
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group-profile-aside__aside-block aside-block">
                        <h3 className="aside-block__title">
                            Activity Feed
                        </h3>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-12.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Katie Campbell
                                    </a>
                                    posted an update in the group
                                    <span>
                                        Graphic Design
                                    </span>
                                </p>
                                <p className="aside-block-item-box__subtext">
                                    3 month ago
                                </p>
                            </div>
                        </div>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-25.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Leila Calderon
                                    </a>
                                    posted a photo
                                </p>
                                <p className="aside-block-item-box__subtext">
                                    4 month ago
                                </p>
                            </div>
                        </div>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-18.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Katie Campbell
                                    </a>
                                    and
                                    <a href="#">
                                        Farrell Villa
                                    </a>
                                    are now friends
                                </p>
                                <p className="aside-block-item-box__subtext">
                                    7 month ago
                                </p>
                            </div>
                        </div>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-22.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Katie Campbell
                                    </a>
                                    posted an update
                                </p>
                                <p className="aside-block-item-box__subtext">
                                    10 month ago
                                </p>
                            </div>
                        </div>
                        <a className="aside-block__link" href="#">
                            Show All
                        </a>
                    </div>
                    <div className="group-profile-aside__aside-block aside-block aside-block--medium-squeres">
                        <h3 className="aside-block__title">
                            Recent Posts
                        </h3>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/group-img-11.jpg"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Tackle Your closest Spring cleaning
                                    </a>
                                </p>
                                <p className="aside-block-item-box__subtext">
                                    May 14, 2023
                                </p>
                            </div>
                        </div>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/group-img-6.jpg"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        The Truth About Business Blogging
                                    </a>
                                </p>
                                <p className="aside-block-item-box__subtext">
                                    May 13, 2023
                                </p>
                            </div>
                        </div>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/group-img-4.jpg"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        OMA completes renovation of Sotheby’s New York galleries
                                    </a>
                                </p>
                                <p className="aside-block-item-box__subtext">
                                    May 5, 2023
                                </p>
                            </div>
                        </div>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/group-img-2.jpg"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Visiting Amsterdam on a Budget
                                    </a>
                                </p>
                                <p className="aside-block-item-box__subtext">
                                    May 2, 2023
                                </p>
                            </div>
                        </div>
                        <a className="aside-block__link" href="#">
                            Show All
                        </a>
                    </div>
                    <div className="group-profile-aside__aside-block aside-block">
                        <h3 className="aside-block__title">
                            Members
                        </h3>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-13.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Leila Calderon
                                    </a>
                                </p>
                                <a className="aside-block-item-box__link" href="mailto:">
                                    lcalderon.paralect
                                </a>
                            </div>
                        </div>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-6.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Susan Foley
                                    </a>
                                </p>
                                <a className="aside-block-item-box__link" href="mailto:">
                                    susan-foley
                                </a>
                            </div>
                        </div>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-7.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Lilly-Rose Holland
                                    </a>
                                </p>
                                <a className="aside-block-item-box__link" href="mailto:">
                                    lillyrose.flower
                                </a>
                            </div>
                        </div>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-23.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Timothy Stuart
                                    </a>
                                </p>
                                <a className="aside-block-item-box__link" href="mailto:">
                                    tim.stuart.3d
                                </a>
                            </div>
                        </div>
                        <a className="aside-block__link" href="#">
                            Show All
                        </a>
                    </div>
                    <div className="group-profile-aside__aside-block aside-block aside-block--grid">
                        <h3 className="aside-block__title">
                            Media
                        </h3>
                        <div className="aside-block__media aside-block-media">
                            <a className="aside-block-media__link" href="#">
                                <img className="aside-block-media__link-img" src="/images/group-img-32.jpg"
                                     alt="img"/>
                            </a>
                            <a className="aside-block-media__link" href="#">
                                <img className="aside-block-media__link-img" src="/images/group-img-1.jpg"
                                     alt="img"/>
                            </a>
                            <a className="aside-block-media__link" href="#">
                                <img className="aside-block-media__link-img" src="/images/course-img-2.jpg"
                                     alt="img"/>
                            </a>
                            <a className="aside-block-media__link" href="#">
                                <img className="aside-block-media__link-img" src="/images/course-img-4.jpg"
                                     alt="img"/>
                            </a>
                            <a className="aside-block-media__link" href="#">
                                <img className="aside-block-media__link-img" src="/images/group-img-2.jpg"
                                     alt="img"/>
                            </a>
                            <a className="aside-block-media__link" href="#">
                                <img className="aside-block-media__link-img" src="/images/group-img-37.jpg"
                                     alt="img"/>
                            </a>
                            <a className="aside-block-media__link" href="#">
                                <img className="aside-block-media__link-img" src="/images/group-img-27.jpg"
                                     alt="img"/>
                            </a>
                            <a className="aside-block-media__link" href="#">
                                <img className="aside-block-media__link-img" src="/images/group-img-4.jpg"
                                     alt="img"/>
                            </a>
                            <a className="aside-block-media__link" href="#">
                                <img className="aside-block-media__link-img" src="/images/group-img-39.jpg"
                                     alt="img"/>
                            </a>
                        </div>
                        <a className="aside-block__link" href="#">
                            Show All
                        </a>
                    </div>
                </aside>
            </div>
            <div className="group-profile__wrapper " id="1">
                    These days, we do just about everything online—and that includes shopping. Which is why there’s never been a better time to be in ecommerce.

                    Nowadays, if you’re selling anything—whether that’s sneakers, salad dressing, or something in between—you need to hop on board the ecommerce website train. An ecommerce site offers you the chance to build your brand, connect with more customers, and sell more products—but only if you’ve got the right website design.

                    Web design is critical when creating an ecommerce website. Good ecommerce web design is all about using the right colors, fonts, images, words and graphics to convince visitors to make a purchase. Your ecommerce website design should attract potential customers, provide great user experience and present your shop in the best light.
                    
                <div id="aboutEditor">

                </div>
            </div>
            <div className="group-profile__wrapper" id="2">
                <section className="group-profile__media group-profile-media">
                    <div className="group-profile-media__tags tags">
                        <a className="tags__tag tags__tag--active" href="#">
                            All
                            <span>
                                7
                            </span>
                        </a>
                        <a className="tags__tag tags__tag" href="#">
                            Photos
                            <span>
                                3
                            </span>
                        </a>
                        <a className="tags__tag tags__tag" href="#">
                            Videos
                            <span>
                                4
                            </span>
                        </a>
                        <a className="tags__tag tags__tag" href="#">
                            Audios
                            <span>
                                0
                            </span>
                        </a>
                        <a className="tags__tag tags__tag" href="#">
                            Files
                            <span>
                                0
                            </span>
                        </a>
                    </div>
                    <div className="group-profile-media__item group-profile-media-item group-profile-media-item--photos">
                        <div className="group-profile-media-item__top group-profile-media-item-top">
                            <h2 className="group-profile-media-item-top__title">
                                Photos
                            </h2>
                            <div className="group-profile-media-item-top__buttons group-profile-media-item-top-buttons">
                                <div className="group-profile-media-item-top-buttons__btn">
                                    <input className="group-profile-media-item-top-buttons__btn-input"
                                           type="file"/>
                                    <p className="group-profile-media-item-top-buttons__btn-text">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="icons" clipPath="url(#clip0_123_19284)">
                                                <path id="Vector"
                                                      d="M10.5 7.5V9.5C10.5 9.76522 10.3946 10.0196 10.2071 10.2071C10.0196 10.3946 9.76522 10.5 9.5 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76522 1.5 9.5V7.5"
                                                      stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                      strokeLinejoin="round" />
                                                <path id="Vector_2" d="M8.5 4L6 1.5L3.5 4" stroke="white"
                                                      strokeWidth="1.5" strokeLinecap="round"
                                                      strokeLinejoin="round" />
                                                <path id="Vector_3" d="M6 1.5V7.5" stroke="white"
                                                      strokeWidth="1.5" strokeLinecap="round"
                                                      strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_123_19284">
                                                    <rect width="12" height="12" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>
                                            Upload
                                        </span>
                                    </p>
                                </div>
                                <a className="group-profile-media-item-top-buttons__link" href="#">
                                    Show All
                                </a>
                            </div>
                        </div>
                        <div className="group-profile-media-item__inner">
                            <a className="group-profile-media-item__box group-profile-media-item-box"
                               data-fancybox="" href="images/group-img-39.jpg">
                                <img className="group-profile-media-item-box__img"
                                     src="/images/new/m1.jpg" alt="img"/>
                            </a>
                            <a className="group-profile-media-item__box group-profile-media-item-box"
                               data-fancybox="" href="images/group-img-40.jpg">
                                <img className="group-profile-media-item-box__img"
                                     src="/images/new/m2.jpg" alt="img"/>
                            </a>
                            <a className="group-profile-media-item__box group-profile-media-item-box"
                               data-fancybox="" href="images/group-img-41.jpg">
                                <img className="group-profile-media-item-box__img"
                                     src="/images/new/m3.jpg" alt="img"/>
                            </a>
                        </div>
                    </div>
                    <div className="group-profile-media__item group-profile-media-item group-profile-media-item--videos">
                        <div className="group-profile-media-item__top group-profile-media-item-top">
                            <h2 className="group-profile-media-item-top__title">
                                Videos
                            </h2>
                            <div className="group-profile-media-item-top__buttons group-profile-media-item-top-buttons">
                                <div className="group-profile-media-item-top-buttons__btn">
                                    <input className="group-profile-media-item-top-buttons__btn-input"
                                           type="file"/>
                                    <p className="group-profile-media-item-top-buttons__btn-text">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="icons" clipPath="url(#clip0_123_19284)">
                                                <path id="Vector"
                                                      d="M10.5 7.5V9.5C10.5 9.76522 10.3946 10.0196 10.2071 10.2071C10.0196 10.3946 9.76522 10.5 9.5 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76522 1.5 9.5V7.5"
                                                      stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                      strokeLinejoin="round" />
                                                <path id="Vector_2" d="M8.5 4L6 1.5L3.5 4" stroke="white"
                                                      strokeWidth="1.5" strokeLinecap="round"
                                                      strokeLinejoin="round" />
                                                <path id="Vector_3" d="M6 1.5V7.5" stroke="white"
                                                      strokeWidth="1.5" strokeLinecap="round"
                                                      strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_123_19284">
                                                    <rect width="12" height="12" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>
                                            Upload
                                        </span>
                                    </p>
                                </div>
                                <a className="group-profile-media-item-top-buttons__link" href="#">
                                    Show All
                                </a>
                            </div>
                        </div>
                        <div className="group-profile-media-item__inner">
                            <div className="group-profile-media-item__videos videos">
                                <a className="videos__item videos-item" data-fancybox="" href="images/group-img-42.jpg">
                                    <img className="videos-item__img" src="/images/group-img-42.jpg"
                                         alt="img"/>
                                    <div className="videos-item__icon">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.33301 2L12.6663 8L3.33301 14V2Z" stroke="white"
                                                  strokeWidth="1.5" strokeLinecap="round"
                                                  strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="videos-item__text">
                                        0:28
                                    </p>
                                </a>
                                <a className="videos__item videos-item" data-fancybox="" href="images/group-img-43.jpg">
                                    <img className="videos-item__img" src="/images/group-img-43.jpg"
                                         alt="img"/>
                                    <div className="videos-item__icon">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.33301 2L12.6663 8L3.33301 14V2Z" stroke="white"
                                                  strokeWidth="1.5" strokeLinecap="round"
                                                  strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="videos-item__text">
                                        0:28
                                    </p>
                                </a>
                                <a className="videos__item videos-item" data-fancybox="" href="images/group-img-37.jpg">
                                    <img className="videos-item__img" src="/images/group-img-37.jpg"
                                         alt="img"/>
                                    <div className="videos-item__icon">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.33301 2L12.6663 8L3.33301 14V2Z" stroke="white"
                                                  strokeWidth="1.5" strokeLinecap="round"
                                                  strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="videos-item__text">
                                        0:28
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="group-profile-media__item group-profile-media-item group-profile-media-item--audios">
                        <div className="group-profile-media-item__top group-profile-media-item-top">
                            <h2 className="group-profile-media-item-top__title">
                                Audios
                            </h2>
                            <div className="group-profile-media-item-top__buttons group-profile-media-item-top-buttons">
                                <a className="group-profile-media-item-top-buttons__link group-profile-media-item-top-buttons__link--purple"
                                   href="#">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3.3335V12.6668" stroke="white" strokeWidth="1.5"
                                              strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.3335 8H12.6668" stroke="white" strokeWidth="1.5"
                                              strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>
                                        Create
                                    </span>
                                </a>
                            </div>
                        </div>
                        <p className="group-profile-media-item__text">
                            There are no galleries available!
                        </p>
                    </div>
                    <div className="group-profile-media__item group-profile-media-item group-profile-media-item--audios">
                        <div className="group-profile-media-item__top group-profile-media-item-top">
                            <h2 className="group-profile-media-item-top__title">
                                Files
                            </h2>
                            <div className="group-profile-media-item-top__buttons group-profile-media-item-top-buttons">
                                <a className="group-profile-media-item-top-buttons__link group-profile-media-item-top-buttons__link--purple"
                                   href="#">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3.3335V12.6668" stroke="white" strokeWidth="1.5"
                                              strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.3335 8H12.6668" stroke="white" strokeWidth="1.5"
                                              strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>
                                        Create
                                    </span>
                                </a>
                            </div>
                        </div>
                        <p className="group-profile-media-item__text">
                            There are no galleries available!
                        </p>
                    </div>
                </section>
                <aside className="group-profile__aside group-profile-aside">
                    <div className="group-profile-aside__aside-block aside-block">
                        <h3 className="aside-block__title">
                            Activity Feed
                        </h3>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-26.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Katie Campbell
                                    </a>
                                    posted an update in the group
                                    <span>
                                        Graphic Design
                                    </span>
                                </p>
                                <p className="aside-block-item-box__subtext">
                                    3 month ago
                                </p>
                            </div>
                        </div>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-23.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Leila Calderon
                                    </a>
                                    posted a photo
                                </p>
                                <p className="aside-block-item-box__subtext">
                                    4 month ago
                                </p>
                            </div>
                        </div>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-22.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Katie Campbell
                                    </a>
                                    and
                                    <a href="#">
                                        Farrell Villa
                                    </a>
                                    are now friends
                                </p>
                                <p className="aside-block-item-box__subtext">
                                    7 month ago
                                </p>
                            </div>
                        </div>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-28.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Katie Campbell
                                    </a>
                                    posted an update
                                </p>
                                <p className="aside-block-item-box__subtext">
                                    10 month ago
                                </p>
                            </div>
                        </div>
                        <a className="aside-block__link" href="#">
                            Show All
                        </a>
                    </div>
                    <div className="group-profile-aside__aside-block aside-block">
                        <h3 className="aside-block__title">
                            Members
                        </h3>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-21.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Leila Calderon
                                    </a>
                                </p>
                                <a className="aside-block-item-box__link" href="mailto:">
                                    lcalderon.paralect
                                </a>
                            </div>
                        </div>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-3.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Susan Foley
                                    </a>
                                </p>
                                <a className="aside-block-item-box__link" href="mailto:">
                                    susan-foley
                                </a>
                            </div>
                        </div>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-11.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Lilly-Rose Holland
                                    </a>
                                </p>
                                <a className="aside-block-item-box__link" href="mailto:">
                                    lillyrose.flower
                                </a>
                            </div>
                        </div>
                        <div className="aside-block__item aside-block-item">
                            <a className="aside-block-item__img" href="#">
                                <img className="aside-block-item__img-image" src="/images/member-icon-28.png"
                                     alt="img"/>
                            </a>
                            <div className="aside-block-item__box aside-block-item-box">
                                <p className="aside-block-item-box__text">
                                    <a href="#">
                                        Timothy Stuart
                                    </a>
                                </p>
                                <a className="aside-block-item-box__link" href="mailto:">
                                    tim.stuart.3d
                                </a>
                            </div>
                        </div>
                        <a className="aside-block__link" href="#">
                            Show All
                        </a>
                    </div>
                </aside>
            </div>
            <div className="group-profile__wrapper" id="3">
                These days, we do just about everything online—and that includes shopping. Which is why there’s never been a better time to be in ecommerce.

                Nowadays, if you’re selling anything—whether that’s sneakers, salad dressing, or something in between—you need to hop on board the ecommerce website train. An ecommerce site offers you the chance to build your brand, connect with more customers, and sell more products—but only if you’ve got the right website design.

                Web design is critical when creating an ecommerce website. Good ecommerce web design is all about using the right colors, fonts, images, words and graphics to convince visitors to make a purchase. Your ecommerce website design should attract potential customers, provide great user experience and present your shop in the best light.
            </div>
            <div className="group-profile__wrapper" id="4">
                These days, we do just about everything online—and that includes shopping. Which is why there’s never been a better time to be in ecommerce.

                Nowadays, if you’re selling anything—whether that’s sneakers, salad dressing, or something in between—you need to hop on board the ecommerce website train. An ecommerce site offers you the chance to build your brand, connect with more customers, and sell more products—but only if you’ve got the right website design.

                Web design is critical when creating an ecommerce website. Good ecommerce web design is all about using the right colors, fonts, images, words and graphics to convince visitors to make a purchase. Your ecommerce website design should attract potential customers, provide great user experience and present your shop in the best light.
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default BasicSettings