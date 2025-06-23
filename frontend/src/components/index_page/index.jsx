import React from 'react';
const index = () => {
  return (
    <>
        <div className="banner">
        <div className="navbar">
            <img src="./assets/logo.jpeg" alt="Logo" className="logo"/>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Student Login</a></li>
                <li><a href="/">Administrative Login</a></li>
            </ul>
        </div>
        <div className="contents">
            <h1>Placement Drive</h1>
            <p>Our greatest glory is not in never falling, but in rising every time we fall
            <br/>We will make a better future for you....</p>
            <div>
                <button type="button"><span></span>Current Drives</button>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default index
