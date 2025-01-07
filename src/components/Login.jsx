"use client"

import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            // Handle successful login (e.g., redirect, show success message)
            const data = await response.json();
            console.log('Login successful:', data);
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        <div className='flex flex-col'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <input
                    type="text"
                    name='username'
                    id='username'
                    className='block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-400'
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required />
                <input type="password"
                    name='password'
                    id='password'
                    placeholder='password'
                    className='block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-400'
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                <span className="text-red-800 pb-2">{error && <p>{error}</p>}</span>
                <button
                    type="submit"
                    className='bg-purple-600 text-white py-3 px-6 rounded-md cursor-pointer transition-colors duration-30 hover:bg-purple-500'>
                    submit
                </button>
                <p className="mt-4">Have an account? <a href="#" className="text-blue-500 hover:underline">Proceed to login</a>
                </p>
            </form>
        </div>
    )
}

export default Login
