import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
  
    const [currState, setCurrState] =  useState("Login")
  
    return (
        <div className='login-popup'>
            <form action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img src={assets.cross_icon} onClick={() => setShowLogin(false)} alt="" />
                </div>

                <div className="login-popup-inputs">
                    {currState !== "Login" && (
                        <input type="text" placeholder='الاسم' required />
                    )}
                    <input type="email" placeholder='البريد الالكتروني' required />
                    <input type="password" placeholder='كلمة المرور' required />
                </div>

                <button>{currState === "Sign Up" ? "إنشاء حساب" : "تسجيل دخول"}</button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>بالاكمال هنا فأنت موافق على سياسة الخصوصية</p>
                </div>

                {currState === "Login" ? (
                    <p>إنشاء حساب جديد? <span onClick={() => setCurrState("Sign Up")}>اضغط هنا</span></p>
                ) : (
                    <p>هل تملك حساباً بالفعل? <span onClick={() => setCurrState("Login")}>تسجيل الدخول</span></p>
                )}

            </form>
        </div>
    )
}

export default LoginPopup
