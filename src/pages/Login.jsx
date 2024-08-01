import { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';

const LoginPage = () => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', {
        fullName,
        password,
      });

      console.log(response.data);
      localStorage.setItem('token', response.data); 
      navigate('/'); 
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        setError(error.response.data.message || 'Invalid credentials');
      } else if (error.request) {
        // Request was made but no response received
        setError('No response from the server. Please try again.');
      } else {
        // Something else caused the error
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 p-6">
          <div className="flex items-center justify-center h-full">
            <div>
              <img src="https://img.freepik.com/premium-vector/adventure-tour-theme-climbing-vacation-with-forest-mountain-views-illustration_2175-3840.jpg?w=740" alt="Illustration" />
            </div>
          </div>
        </div>

        <div className="w-1/2 p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">Trippy</h2>
            <p className="text-lg text-gray-600 mt-8">Welcome to Trippy</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="username">
                Username
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="text"
                id="username"
                placeholder="David Brooks"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <div className="mb-4 flex items-center justify-between">
              <a href="#" className="text-sm text-gray-600 hover:underline">Forgot password?</a>
            </div>

            <div className="mb-4">
              <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-lg">
                Sign in
              </button>
            </div>

            <div className="flex items-center justify-center">
              <button className="flex items-center justify-center w-full py-2 text-gray-700 border rounded-lg">
                <FaGoogle className="w-6 h-4 mr-2" />
                Sign in with Google
              </button>
            </div>

            <div className="mt-4 text-center">
              <Link to="/signup" className="text-sm text-gray-600 hover:underline">New to Trippy? Create Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
