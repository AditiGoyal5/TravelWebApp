import { Link } from 'react-router-dom';
import flight from "/public/flightImg.png";
import p1 from "/public/p1.jpg";
import place from "/public/moritious.avif";
import { FaHome, FaMapMarkerAlt, FaRegCalendarAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Profile() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-1/5 bg-[#a2d2ff] text-white p-5">
                <h1 className="text-3xl font-bold mb-8 text-[#2e3138]">Profile</h1>
                <nav>
                    <ul>
                        <li className="mb-5">
                            <Link to="/" className="flex items-center text-xl ">
                                <FaHome className="mr-2" /> Home
                            </Link>
                        </li>
                        <li className="mb-5">
                            <Link to="/" className="flex items-center text-xl">
                                <FaMapMarkerAlt className="mr-2" /> Flights
                            </Link>
                        </li>
                        <li className="mb-5">
                            <Link to="/" className="flex items-center text-xl">
                                <FaRegCalendarAlt className="mr-2" /> Hotels
                            </Link>
                        </li>
                        <li className="mb-5">
                            <Link to="/" className="flex items-center text-xl">
                                <FaEnvelope className="mr-2" /> Trains
                            </Link>
                        </li>
                        <li className="mb-5">
                            <Link to="/" className="flex items-center text-xl">
                                <FaEnvelope className="mr-2" /> Things to do
                            </Link>
                        </li>
                    </ul>
                    <img src={flight} alt="" className='self-end mt-72 h-full w-full'/>
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-10">
                <header className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Welcome Aditi</h1>
                </header>

                <section className="flex gap-8">
                    <div className="bg-white shadow rounded-lg p-6 flex-1">
                        <div className="flex items-center">
                            <img src={p1} alt="Profile" className="w-24 h-24 rounded-full mr-6" />
                            <div>
                                <h2 className="text-2xl font-bold">Aditi</h2>
                                <div className="text-gray-600">
                                    <p>Registration Date: January 15, 2023</p>
                                    <p>Date of Birth: April 8, 1993</p>
                                    <p>Email: aditi@example.com</p>
                                    <p>Phone: (+123) 456-7890</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="bg-white shadow rounded-lg p-6 w-1/4">
                        <h2 className="text-2xl font-bold mb-6">Settings</h2>
                        <ul className="space-y-4 text-lg">
                            <li>
                                <Link to="/" className="hover:underline">Credits</Link>
                            </li>
                            <li>
                                <Link to="/" className="hover:underline">Security and Settings</Link>
                            </li>
                            <li>
                                <Link to="/" className="hover:underline">Reviews</Link>
                            </li>
                            <li>
                                <Link to="/" className="hover:underline">Help and Support</Link>
                            </li>
                        </ul>
                    </section>
                </section>

                <section className="bg-white shadow rounded-lg p-6 mt-8">
                    <h2 className="text-2xl font-bold mb-6">My Trips</h2>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                            <img src={place} alt="Place 1" className="w-24 h-24 rounded-md object-cover" />
                            <div>
                                <h3 className="text-xl font-semibold">Trip Title</h3>
                                <p className="text-sm text-gray-600">Location: Hyderabad</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, qui.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <img src={place} alt="Place 2" className="w-24 h-24 rounded-md object-cover" />
                            <div>
                                <h3 className="text-xl font-semibold">Trip Title</h3>
                                <p className="text-sm text-gray-600">Location: Hyderabad</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, qui.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
