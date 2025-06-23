import React from 'react'
import './login_sinup.css'
import img1 from './assets/img1.jpg'
const login_sinup = () => {
    return (
        <>
            <div className="registration-box">
                <div className="register-heading">Student Registration</div>

                <form action="">
                    <div className="registration-basic">

                        <label>Enter your Full Name</label>
                        <input type="text" placeholder="JOHN ROGERS" required />


                        <label>E-mail</label>
                        <input type="email" placeholder="johnrogers123@abc.in" required />


                        <label>Mobile Number</label>
                        <input type="number" placeholder="+91 9876543210" required />

                        <button id="send-otp">send OTP</button>

                        <label>OTP</label>
                        <input type="number" placeholder="3296" required />

                        <button id="verify">verify</button>



                    </div>

                    <div className="registration-clg-info">

                        <label>Enter Name Of Your Institute</label>
                        <input type="text" required />

                        <label>Enter Dept/Branch</label>
                        <input type="text" required />
                    </div>

                    <button id="submit-register">Register</button>
                    <br />
                    <p>Already have account! &nbps;<a href="/">Login</a></p>


                </form>

            </div>
        </>
    );
}

export default login_sinup
