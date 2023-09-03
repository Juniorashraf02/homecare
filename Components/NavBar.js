import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHomeCareServicesOpen, setIsHomeCareServicesOpen] = useState(false);
    const [isTestimonialsOpen, setIsOption2Open] = useState(false);
    const [isFAQsOpen, setIsOption3Open] = useState(false);
    const [isAboutUsOpen, setIsOption4Open] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleHomeCareServices = () => {
        setIsHomeCareServicesOpen(!isHomeCareServicesOpen);
    };

    const toggleOption2 = () => {
        setIsOption2Open(!isTestimonialsOpen);
    };

    const toggleOption3 = () => {
        setIsOption3Open(!isFAQsOpen);
    };

    const toggleOption4 = () => {
        setIsOption4Open(!isAboutUsOpen);
    };

    return (
        <nav className={`bg-white text-white p-4 ${isMobileMenuOpen ? 'md:bg-gray-100' : ''}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <a href="#" className="">
                        <Image
                            src="/images/logo3.png"
                            alt="logo"
                            width={200}
                            height={75}
                        />
                    </a>
                </div>
                <div className="md:flex hidden space-x-4 items-center">
                    <div
                        className={`relative group`}
                        onMouseEnter={toggleHomeCareServices}
                        onMouseLeave={toggleHomeCareServices}
                    >
                        <a
                            href="#"
                            className={`text-xl text-sky-600 ${isHomeCareServicesOpen ? 'border-b-2 border-sky-600' : ''}`}
                        >
                            Home Care Services{' '}
                            {isHomeCareServicesOpen ? (
                                <TiArrowSortedUp className="inline-block" />
                            ) : (
                                <TiArrowSortedDown className="inline-block" />
                            )}
                        </a>
                        {isHomeCareServicesOpen && (
                            <div className="absolute left-0 top-full bg-blue-900 text-white p-4 overflow-y-auto">
                                <a href="#" className="text-xl block py-2">Suboption 1</a>
                                <a href="#" className="text-xl block py-2">Suboption 2</a>
                                <a href="#" className="text-xl block py-2">Suboption 3</a>
                            </div>
                        )}
                    </div>
                    <div
                        className={`relative group`}
                        onMouseEnter={toggleOption2}
                        onMouseLeave={toggleOption2}
                    >
                        <a
                            href="#"
                            className={`text-xl text-sky-600 ${isTestimonialsOpen ? 'border-b-2 border-sky-600' : ''}`}
                        >
                            Testimonials{' '}
                            {isTestimonialsOpen ? (
                                <TiArrowSortedUp className="inline-block" />
                            ) : (
                                <TiArrowSortedDown className="inline-block" />
                            )}
                        </a>
                        {isTestimonialsOpen && (
                            <div className="absolute left-0 top-full bg-blue-900 text-white p-4 overflow-y-auto">
                                {/* Sub-options content for Option 2 */}
                                <a href="#" className="text-xl block py-2">Suboption 1</a>
                                <a href="#" className="text-xl block py-2">Suboption 2</a>
                                <a href="#" className="text-xl block py-2">Suboption 3</a>
                            </div>
                        )}
                    </div>
                    <div
                        className={`relative group`}
                        onMouseEnter={toggleOption3}
                        onMouseLeave={toggleOption3}
                    >
                        <a
                            href="#"
                            className={`text-xl text-sky-600 ${isFAQsOpen ? 'border-b-2 border-sky-600' : ''}`}
                        >
                            FAQs{' '}
                            {isFAQsOpen ? (
                                <TiArrowSortedUp className="inline-block" />
                            ) : (
                                <TiArrowSortedDown className="inline-block" />
                            )}
                        </a>
                        {isFAQsOpen && (
                            <div className="absolute left-0 top-full bg-green-900 text-white p-4 overflow-y-auto">
                                <a href="#" className="text-xl block py-2">Suboption 1</a>
                                <a href="#" className="text-xl block py-2">Suboption 2</a>
                                <a href="#" className="text-xl block py-2">Suboption 3</a>
                            </div>
                        )}
                    </div>
                    <div
                        className={`relative group`}
                        onMouseEnter={toggleOption4}
                        onMouseLeave={toggleOption4}
                    >
                        <a
                            href="#"
                            className={`text-xl text-sky-600 ${isAboutUsOpen ? 'border-b-2 border-sky-600' : ''}`}
                        >
                            About Us{' '}
                            {isAboutUsOpen ? (
                                <TiArrowSortedUp className="inline-block" />
                            ) : (
                                <TiArrowSortedDown className="inline-block" />
                            )}
                        </a>
                        {isAboutUsOpen && (
                            <div className="absolute left-0 top-full bg-red-900 text-white p-4 overflow-y-auto">
                                <a href="#" className="text-xl block py-2">Suboption 1</a>
                                <a href="#" className="text-xl block py-2">Suboption 2</a>
                                <a href="#" className="text-xl block py-2">Suboption 3</a>
                            </div>
                        )}
                    </div>
                    <div className="border-l border-sky-600 h-6"></div>
                    <a href="tel:123-456-7890" className="text-xl text-sky-600 border-b-2 border-sky-600 font-bold">123-456-7890</a>
                    <a href="#" className="text-xl text-sky-600">
                        <button className="uppercase font-bold bg-sky-800 px-5 py-2.5 text-white  rounded-md text-xs">
                            request care
                        </button>
                    </a>
                    <a href="#" className="text-xl text-sky-600">
                    <button className="uppercase font-bold bg-rose-700 px-5 py-2.5 text-white  rounded-md text-xs">
                            careers
                        </button>
                    </a>
                </div>
                <div className="md:hidden">
                    <button className="text-xl" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? '✖' : <AiOutlineMenu className="text-sky-600" />}
                    </button>
                </div>
            </div>
            {/* Mobile Options */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col items-center space-y-4 p-4">
                        <a href="#" className="text-xl text-sky-600">Option 1</a>
                        <a href="#" className="text-xl text-sky-600">Option 2</a>
                        <a href="#" className="text-xl text-sky-600">Option 3</a>
                        <a href="#" className="text-xl text-sky-600">Option 4</a>
                        <a href="#" className="text-xl text-sky-600">Option 5</a>
                        <a href="#" className="text-xl text-sky-600">Option 6</a>
                        <a href="#" className="text-xl text-sky-600">Option 7</a>
                        <button className="text-xl" onClick={toggleMobileMenu}>
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
