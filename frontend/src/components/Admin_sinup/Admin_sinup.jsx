import React from 'react'

const Admin_sinup = () => {
  return (
    <>
      <div className="login-container">

        <div className="login-heading">Administrative login</div>

        <form>
            <div className="form-group">
                <label >Enter your Email</label>
                <input type="email" placeholder="abcd@gmail.com"  required/>
                <br/>
                <br/>
                <label>Enter your Password</label>
                <input type="password" placeholder="DIpa@34" required/>
            </div>

            <div className="form-group">
                <button type="submit">Login</button>
            </div>
            <p>New User!? click here to register ➤<a href="/registration.html">Register</a></p>
        </form>
    </div>
    </>
  )
}

export default Admin_sinup
