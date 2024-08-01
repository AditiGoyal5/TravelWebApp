import { Link , useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import axios from 'axios';
import { useState } from 'react';

export default function SignUp() {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/register', {
                fullName,
                email,
                password,
            });
            console.log('Registration successful:', response.data);
            // Redirect to login or another page after successful registration
            navigate('/login');
        } catch (error) {
            console.error('Error registering:', error);
        }
    };

    return (
        <div className="flex w-screen h-screen shadow-lg rounded-lg overflow-hidden">
            <div className="w-1/2 h-screen ">
                {/* <img src={plain} alt="" className='h-1/4 w-3/4 ml-10'/> */}
                <img src="https://img.freepik.com/premium-vector/adventure-tour-theme-climbing-vacation-with-forest-mountain-views-illustration_2175-3840.jpg?w=740" className='h-fit w-full mt-36' />
               
            </div>
            <div className="flex flex-col w-1/2 bg-white p-16 justify-center mx-auto">
                <h1 className="text-3xl font-bold mb-4">Create Account</h1>
                <div className="mt-4">
                    <div className="flex space-x-4 mt-2">
                        <button className="flex items-center border justify-center w-full bg-transparent text-[#000000] p-2 rounded hover:bg-[#e5e6e4] transition duration-200"><FaGoogle className="mr-2" /> Signup with Google</button>
                        <button className="flex items-center border justify-center w-full bg-trabsparent  p-2 rounded hover:bg-[#e5e6e4] transition duration-200"><FaFacebook className="mr-2" /> Sign up with Facebook</button>
                    </div>
                </div>
                <div className="flex items-center my-4">
                    <div className="w-full h-px bg-gray-300"></div>
                    <span className="px-3 text-gray-500">OR</span>
                    <div className="w-full h-px bg-gray-300"></div>
                </div>
                <form className="w-full" onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <input type="text" placeholder="Full Name" className="w-full p-2 border-b border-gray-300 mt-2 focus:outline-none focus:border-blue-500"  value={fullName}
                            onChange={(e) => setFullName(e.target.value)} required/>
                    </div>
                    <div className="mb-4">
                        <input type="email" placeholder="Email Address" className="w-full p-2 border-b border-gray-300 mt-2 focus:outline-none focus:border-blue-500"  value={email}
                            onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="mb-4">
                        <input type="password" placeholder="Password" className="w-full p-2 border-b border-gray-300 mt-2 focus:outline-none focus:border-blue-500" value={password}
                            onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div className="flex mb-4 content-center justify-between">
                        <div>
                            <input type="checkbox" className="mr-2" />
                            <label className="text-gray-700">Remember me</label>
                        </div>
                        <p className="text-blue-500 hover:text-blue-700 cursor-pointer">Forgot password?</p>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200">Create Account</button>
                </form>
                <p className="mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-700">Log in</Link></p>
            </div>
        </div>
    );
}
