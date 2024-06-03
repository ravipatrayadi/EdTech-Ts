import React, { FormEventHandler } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface LogNavBarProps  {
    onLogout: FormEventHandler<HTMLFormElement> | undefined;
}

const LogNavBar = (props: LogNavBarProps) => {
    const navigate = useNavigate() ; 
    const handleLogOut = () => {
        navigate('/') ; 
    };

  return (
    <>
<header>
       <div className="container">
       <div className="header__inner">
           <button className="switch-button"></button>
           <Link to = '/' className="header__logo logo" >
               <img className="logo__img" src="/images/logocircle.svg" alt="img"/>
               <img className="caption" src="/images/captionwhite.svg" width={"160px"} alt="caption"/>
           </Link>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
           </button>
           <div className="header__wrapper" id="headerContent">
    <form className="header__search search" action="#">
        <button className="search__btn" type="button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4182 19 19 15.4183 19 11C19 6.58172 15.4182 3 11 3C6.58169 3 2.99997 6.58172 2.99997 11C2.99997 15.4183 6.58169 19 11 19Z"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
            </svg>
        </button>
        <input className="search__input" type="text" placeholder="Search..."/>
    </form>
    <div className="header__user-nav user-nav">
        <a className="user-nav__link" href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99997 10H16M7.99997 14H12M21 12C21 16.9706 16.9705 21 12 21C10.843 21 9.73698 20.7817 8.72092 20.384C8.33906 20.2345 7.92595 20.1704 7.52157 20.2385L3.69273 20.8833C3.35371 20.9404 3.05954 20.6463 3.11664 20.3072L3.76144 16.4784C3.82954 16.074 3.76544 15.6609 3.61598 15.279C3.21829 14.263 2.99997 13.157 2.99997 12C2.99997 7.02944 7.02941 3 12 3C16.9705 3 21 7.02944 21 12Z"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>
                1 
            </span>
        </a>
        <a className="user-nav__link" href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99997 8C5.99997 6.4087 6.63211 4.88258 7.75733 3.75736C8.88255 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3678 4.88258 18 6.4087 18 8C18 15 21 17 21 17H2.99997C2.99997 17 5.99997 15 5.99997 8Z"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.3 21C10.4673 21.3044 10.7134 21.5583 11.0124 21.7352C11.3115 21.912 11.6525 22.0053 12 22.0053C12.3474 22.0053 12.6884 21.912 12.9875 21.7352C13.2865 21.5583 13.5326 21.3044 13.7 21"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>
                    7 
            </span>
        </a>
        <a className="user-nav__link" href="#">
            <img src="/images/bookmarksnew.svg" height="24px" width="24px" alt="bookmarks"/>
            <span>
                    4
            </span>
        </a>
        
    </div>
        <div className="header-form__img">
            <input type="hidden" id="name" name="name" value="@name" />
            <div id="profileImage"></div>
        </div>
        <div className="header__lang lang" style={{ margin: '0 10px' }} >
            <div className="lang__top">
                <span>
                  UserName
                </span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.99997 4.5L5.99997 7.5L8.99997 4.5" stroke="white" strokeWidth="1.5"
                          strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="lang__box lang-box">
                <a className="lang-box__link" asp-controller="Home" asp-action="Profile" asp-route-name="@name">
                    <span>
                        Name
                    </span>
                </a>
            </div>
        </div>
        <form className="header__form header-form logout" asp-area="Identity"  onSubmit={props.onLogout}>
            <button type="submit" className="act-btn" onClick={handleLogOut}>Logout</button>
        </form>
</div>              
  </div> 
  </div>
    </header>
    </>
    )
}

export default LogNavBar