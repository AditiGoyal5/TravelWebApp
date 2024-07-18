import { Link } from 'react-router-dom';
import { IoSettings } from "react-icons/io5";
import { RiCustomerServiceLine } from "react-icons/ri";
import { MdPrivacyTip } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { IoMdPricetag } from "react-icons/io";
import { RiFeedbackFill } from "react-icons/ri";
import Navbar from "../components/Navbar";
import illustration from "/public/young-2.jpg";
import dubai from "/public/dubai.jpg";

export default function Profile() {
    return (
        <div className="flex flex-col w-screen h-screen bg-gray-100">
            <Navbar />
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen h-44 flex items-center justify-center">
            </div>
            <header className="relative flex items-center justify-between mb-8 bg-white p-6 rounded-lg">
                <div className="flex items-center space-x-6">
                    
                    <img src={illustration} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white absolute" style={{ top: '-40px', left: '5' }} />
                    
                    <div className="text-dark ml-40"> {/* Adjust the margin-left to make room for the image */}
                        <h1 className="text-2xl font-bold ml-40">Candice Wu</h1>
                        <p className="text-lg ml-40">I'm a Product Designer based in Melbourne, Australia.</p>
                    </div>
                </div>
                <div className="absolute top-6 right-6">
                    <button className="bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold">Edit Profile</button>
                </div>
            </header>

            {/* Main content */}
            <main className="flex-1 px-8">
                <div className='flex'>
                    <div className='flex flex-col space-y-4 mr-8 bg-white rounded-xl p-6 h-min'>
                        <Link to="" className="text-gray-700 hover:text-purple-700"><IoSettings className='inline  mr-2'/>Settings</Link>
                        <Link to="" className="text-gray-700 hover:text-purple-700"><IoMdPricetag className='inline  mr-2'/>Coupon</Link>
                        <Link to="" className="text-gray-700 hover:text-purple-700"><RiCustomerServiceLine className='inline mr-2'/>Help and Support</Link>
                        <Link to="" className="text-gray-700 hover:text-purple-700"><MdPrivacyTip className='inline mr-2'/> Privacy</Link>
                        <Link to="" className="text-gray-700 hover:text-purple-700"><PiSignOutBold className='inline mr-2' />Signout</Link>
                        <Link to="" className="text-gray-700 hover:text-purple-700"><RiFeedbackFill className='inline mr-2' />Feedback</Link>
                    </div>

                    <div className="flex-1 space-y-8">
                        <section className="bg-white shadow rounded-lg p-6 flex items-start space-x-4">
                            <img src={dubai} alt="" className='w-20 h-20 object-cover rounded' />
                            <div>
                                <h2 className="text-2xl font-bold">Trip Title</h2>
                                <h4 className="text-lg font-medium text-gray-600">Destination: Hyderabad</h4>
                                <p className="text-gray-600">Utilities for controlling how an individual grid item is aligned along its inline axis.</p>
                            </div>
                        </section>

                        <section className="bg-white shadow rounded-lg p-6 flex items-start space-x-4">
                            <img src={dubai} alt="" className='w-20 h-20 object-cover rounded' />
                            <div>
                                <h2 className="text-2xl font-bold">Trip Title</h2>
                                <h4 className="text-lg font-medium text-gray-600">Destination: Hyderabad</h4>
                                <p className="text-gray-600">Utilities for controlling how an individual grid item is aligned along its inline axis.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
