import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/login', { email, password })
      .then((result) => {
        console.log('Got response from backend..', result);
        if (result.data === 'Success') {
          setIsLoggedIn(true);
          nav('/dashboard');
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    nav('/index');
  };

  return (
    <div>

      {isLoggedIn && (
        <div className="mt-4">
          <button
            onClick={handleLogout}
            className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
