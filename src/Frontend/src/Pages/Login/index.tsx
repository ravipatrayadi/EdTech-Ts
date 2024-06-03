import { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
interface LoginProps {

}

const LoginPage = (props: LoginProps) => {
    const navigate = useNavigate() ; 
    const [formData, setFormData] = useState({
        uname: '' , 
        password: '' 
    })

    const handleSubmit = (e: { preventDefault: () => void; }) =>{
        e.preventDefault() ;
        localStorage.setItem('token' , 'jsonwebtoken') ;
        navigate('/home') ;  
    }

  return (
    <section className="main__login">
    <div className="login__inner">
        <h2 className="login__title">
            Log In
        </h2>
        <form className="login__form login-form" id="account" method="post" onSubmit={handleSubmit}>
            <div asp-validation-summary="ModelOnly" className="text-danger" role="alert"></div>
            <div className="login-form__box login-form-box">
                <label className="login-form-box__label" htmlFor="">
                    Username or Email
                </label>
                <div className="login-form-box__row">
                    <input asp-for="Input.Email" className="login-form-box__row-input" type="text" onChange={(event) => setFormData({...formData,uname: event.target.value})}/>
                </div>
                <span asp-validation-for="Input.Email" className="text-danger"></span>
            </div>
            <div className="login-form__box login-form-box">
                <label className="login-form-box__label" htmlFor="">
                    Password
                </label>
                <div className="login-form-box__row">
                    <input asp-for="Input.Password" className="login-form-box__row-input" type="password" onChange={(event) => setFormData({...formData,password: event.target.value})}/>
                    <button className="login-form-box__row-btn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="icons" clipPath="url(#clip0_215_18379)">
                                <path id="Vector" d="M6.58675 6.58667C6.39025 6.76977 6.23265 6.99057 6.12334 7.2359C6.01402 7.48123 5.95524 7.74607 5.95051 8.01461C5.94577 8.28315 5.99517 8.54989 6.09576 8.79893C6.19635 9.04796 6.34607 9.27419 6.53598 9.46411C6.7259 9.65402 6.95212 9.80374 7.20116 9.90433C7.45019 10.0049 7.71694 10.0543 7.98548 10.0496C8.25402 10.0448 8.51885 9.98606 8.76419 9.87675C9.00952 9.76744 9.23032 9.60983 9.41342 9.41334" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path id="Vector_2" d="M7.15332 3.38659C7.43419 3.35159 7.71694 3.33378 7.99999 3.33325C12.6667 3.33325 14.6667 7.99992 14.6667 7.99992C14.3686 8.638 13.9948 9.23787 13.5533 9.78659" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path id="Vector_3" d="M4.40659 4.40674C3.08075 5.30982 2.01983 6.55024 1.33325 8.00007C1.33325 8.00007 3.33325 12.6667 7.99992 12.6667C9.27719 12.6702 10.5271 12.2968 11.5933 11.5934" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path id="Vector_4" d="M1.33325 1.33325L14.6666 14.6666" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_215_18379">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="login-form__bottom">
                <label className="login-form__bottom-checkbox container">
                    Remember Me
                    <input type="checkbox" asp-for="Input.RememberMe"/>
                    <span className="checkmark"></span>
                </label>
                <a className="login-form__bottom-link" asp-page="./ForgotPassword">
                    Forgot Password?
                </a>
            </div>
            <button className="login-form__button" type="submit">
                Log In
            </button>
            <div className="login-form__socials login-form-socials">
                <p className="login-form-socials__or">
                    <span></span>
                    or
                    <span></span>
                </p>
                <ul className="login-form-socials__list socials">
                    <li className="socials__item">
                        <a className="socials__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="social_icons">
                                    <g id="Layer_x0020_1">
                                        <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M5.92126 15.7984C5.92126 15.9097 6.01157 16 6.12282 16H8.99563C9.10688 16 9.19688 15.9097 9.19688 15.7984V7.93687H11.2797C11.3841 7.93687 11.4713 7.85656 11.4803 7.7525L11.6806 5.38375C11.6903 5.26625 11.5978 5.16531 11.4797 5.16531H9.19688V3.485C9.19688 3.09094 9.51626 2.77156 9.91001 2.77156H11.515C11.6266 2.77156 11.7166 2.68125 11.7166 2.57V0.201562C11.7166 0.0903125 11.6266 0 11.515 0H8.80313C7.21157 0 5.92126 1.29 5.92126 2.88156V5.16531H4.48501C4.37376 5.16531 4.28345 5.25563 4.28345 5.36688V7.73531C4.28345 7.84688 4.37376 7.93687 4.48501 7.93687H5.92126V15.7984Z" fill="white" />
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li className="socials__item">
                        <a className="socials__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="social_icons" clipPath="url(#clip0_187_9402)">
                                    <g id="Layer_x0020_1">
                                        <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M15.94 2.91286C15.4315 3.14286 14.8722 3.28224 14.3237 3.37443C14.8062 3.29349 15.5215 2.14068 15.6597 1.68849C15.7009 1.60568 15.6412 1.5763 15.5706 1.61161C14.9584 1.93974 14.325 2.17755 13.6509 2.34599C13.5243 2.37755 13.4484 2.22036 13.3506 2.13943C10.9584 0.103801 7.39841 2.14505 7.8631 5.29818C7.87341 5.37536 7.86685 5.38568 7.79716 5.37536C5.16028 4.98255 2.97466 4.03943 1.20028 2.01724C1.12341 1.92943 1.08153 1.92974 1.01841 2.02411C0.0843455 3.42411 0.758408 5.37005 1.99403 6.33318C1.94153 6.3438 1.29622 6.2738 0.720908 5.97661C0.644033 5.92786 0.605283 5.95599 0.59872 6.04318C0.520595 7.41318 1.76903 9.0138 3.12716 9.24693C2.87216 9.30286 2.60966 9.34286 1.87872 9.28568C1.78778 9.26818 1.75278 9.31349 1.78778 9.40099C2.33716 10.8982 3.52278 11.3438 4.41091 11.5976C4.52966 11.6185 4.64872 11.6185 4.7681 11.6463C4.11903 12.611 1.31403 13.0713 0.234658 12.9651C0.15997 12.9541 -0.121592 12.9147 0.0599705 13.0629C6.46966 17.2885 14.4522 12.7663 14.4522 4.72818C14.4522 4.62443 14.5743 4.56755 14.6472 4.51286C14.9809 4.26193 16 3.34255 16 2.91286C16 2.87036 16.005 2.88349 15.94 2.91286Z" fill="white" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_187_9402">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </li>
                    <li className="socials__item">
                        <a className="socials__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="social_icons" clipPath="url(#clip0_187_9379)">
                                    <path id="Vector" d="M0 8C0 3.5888 3.5888 0 8 0C9.78156 0 11.4678 0.573181 12.8765 1.6576L11.0174 4.07253C10.1464 3.40206 9.10301 3.04762 8 3.04762C5.26926 3.04762 3.04762 5.26926 3.04762 8C3.04762 10.7307 5.26926 12.9524 8 12.9524C10.1994 12.9524 12.0684 11.5114 12.7125 9.52381H8V6.47619H16V8C16 12.4112 12.4112 16 8 16C3.5888 16 0 12.4112 0 8Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_187_9379">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </li>
                    <li className="socials__item">
                        <a className="socials__link" href="#">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="social_icons" clipPath="url(#clip0_187_9414)">
                                    <g id="Layer_x0020_1">
                                        <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M0.32085 16H3.62241V5.33313H0.32085V16ZM8.90054 10.4006C8.90054 8.90125 9.59085 8.0075 10.9124 8.0075C12.1265 8.0075 12.7096 8.86531 12.7096 10.4006V16H15.9962C15.9962 16 15.9962 12.1038 15.9962 9.24656C15.9962 6.38938 14.3765 5.00781 12.1149 5.00781C9.85241 5.0075 8.90054 6.77 8.90054 6.77V5.33313H5.73335V16H8.90054C8.90054 16 8.90054 12.0441 8.90054 10.4006ZM1.95616 3.93688C3.03429 3.93688 3.90866 3.05469 3.90866 1.96812C3.90866 0.88125 3.03429 0 1.95616 0C0.877412 0 0.00366211 0.88125 0.00366211 1.96812C0.00366211 3.05469 0.877412 3.93688 1.95616 3.93688Z" fill="white" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_187_9414">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </form>
    </div>
</section>
  )
}

export default LoginPage