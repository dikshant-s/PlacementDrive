import React from 'react'
import './Login.css'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()
    const nav = useNavigate()
    const handleSubmit = (e)=> {
        e.preventDefault()
    
    axios.post('http://localhost:3002/login',{email,password})
    .then(result=> {
        
        console.log('Got reponse from backend..',result)
        if(result.data==="Success"){
            nav('/dashboard')
        }
           
        })
    .catch(err=>console.log(err))
    }
    return (
        <div>
            <div className="navbar">
            </div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 shadow-cyan-500/50 containr">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="-mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="-mt-13 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e)=> setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e)=> setPassword(e.target.value)}
                                />
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="/Studentlogin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Click here to Register!
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
