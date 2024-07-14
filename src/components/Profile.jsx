import { Link } from 'react-router-dom';
import { FaHome, FaMapMarkerAlt, FaRegCalendarAlt, FaEnvelope, FaPlane, FaCog, FaEye, FaStar } from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";
import { RiCustomerServiceLine } from "react-icons/ri";
import { MdPrivacyTip } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import flight from "/public/flightImg.png"; // Adjust with correct image path
import illustration from "/public/tourist2.png";
import Navbar from "../components/Navbar"; // Adjust with correct image path
import dubai from "/public/dubai.jpg"

export default function Profile() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen h-44 flex items-center justify-center">
            </div>

            {/* Main content */}
            <main className="flex-1 p-10">
                <header className="flex items-center justify-between mb-8 bg-purple-100 p-6 rounded-lg relative">
                    <div className="flex items-center space-x-6">
                        <img src={illustration} alt="Profile" className="w-24 h-24 rounded-full border-4 border-white" />
                        <div className="text-dark">
                            <h1 className="text-2xl font-bold">Candice Wu</h1>
                            <p className="text-lg">I'm a Product Designer based in Melbourne, Australia.</p>
                        </div>
                    </div>
                    <div className="absolute top-6 right-6">
                        <button className="bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold">+ Create Bucketlist</button>
                    </div>
                </header>

                <div className='flex'>
                    <div className='flex flex-col space-y-4 mr-8 bg-white rounded-xl p-6'>
                        <Link to="" className="text-gray-700 hover:text-purple-700"><IoSettings className='inline'/>Settings</Link>
                        <Link to="" className="text-gray-700 hover:text-purple-700"><RiCustomerServiceLine className='inline'/>Help and Support</Link>
                        <Link to="" className="text-gray-700 hover:text-purple-700"><MdPrivacyTip className='inline'/> Privacy</Link>
                        <Link to="" className="text-gray-700 hover:text-purple-700"><PiSignOutBold className='inline' />Signout</Link>
                    </div>

                    <div className="flex-1 space-y-8">
                        <section className="bg-white shadow rounded-lg p-6 flex items-start space-x-4">
                            <img src={dubai} alt="" className='w-20 h-20 object-cover rounded' />
                            <div>
                                <h2 className="text-2xl font-bold">Trip Title</h2>
                                <h4 className="text-lg font-medium text-gray-600">Location: Hyderabad</h4>
                                <p className="text-gray-600">Utilities for controlling how an individual grid item is aligned along its inline axis.</p>
                            </div>
                        </section>

                        <section className="bg-white shadow rounded-lg p-6 flex items-start space-x-4">
                            <img src={dubai} alt="" className='w-20 h-20 object-cover rounded' />
                            <div>
                                <h2 className="text-2xl font-bold">Trip Title</h2>
                                <h4 className="text-lg font-medium text-gray-600">Location: Hyderabad</h4>
                                <p className="text-gray-600">Utilities for controlling how an individual grid item is aligned along its inline axis.</p>
                            </div>
                        </section>
                    </div>
                </div>

                <section className="mb-8 grid grid-cols-4 gap-6 mt-8">
                    <div className="bg-yellow-200 p-6 rounded-lg flex flex-col items-center">
                        <FaEye className="text-4xl mb-2" />
                        <span className="text-2xl font-bold">83%</span>
                        <span>Open Rate</span>
                    </div>
                    <div className="bg-purple-200 p-6 rounded-lg flex flex-col items-center">
                        <FaCog className="text-4xl mb-2" />
                        <span className="text-2xl font-bold">77%</span>
                        <span>Complete</span>
                    </div>
                    <div className="bg-pink-200 p-6 rounded-lg flex flex-col items-center">
                        <FaStar className="text-4xl mb-2" />
                        <span className="text-2xl font-bold">91</span>
                        <span>Unique Views</span>
                    </div>
                    <div className="bg-blue-200 p-6 rounded-lg flex flex-col items-center">
                        <FaEye className="text-4xl mb-2" />
                        <span className="text-2xl font-bold">126</span>
                        <span>Total Views</span>
                    </div>
                </section>
            </main>
        </div>
    );
}
