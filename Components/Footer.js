import Image from "next/image";
import Link from "next/link";

import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return <div className="bg-slate-900">
        <div className="md:grid px-1 grid-cols-4 gap-10 justify-between md:px-12 py-10">
            <div>
                <Image
                    src='/images/logo4.png'
                    width={200}
                    height={50}
                    alt="logo"
                    className="mb-5"
                />
                <div>
                    <p>For over 4 years our focus on elevating the homecare experience has allowed our clients to receive all levels of medical care from the comfort of home, while providing peace of mind to clients and their loved ones.</p>
                </div>
            </div>
            <div className="md:pl-10">
                <p className="uppercase font-bold mb-8 mt-10 md:mt-0">Home care</p>
                <div>
                    <Link href="#" >
                        <p className="pb-3 font-semibold">Private  Duty Nursing</p>
                    </Link>
                    <Link href="#" >
                        <p  className="pb-3 font-semibold">
                            Home Health Aides
                        </p>
                    </Link>
                    <Link href="#" >
                        <p className="pb-3 font-semibold">Chronic  Care
                        </p>
                    </Link>
                    <Link href="#" >
                        <p className="pb-3 font-semibold">Senior  Care
                        </p>
                    </Link>
                    <Link href="#" >
                        <p className="pb-3 font-semibold">Pediatric Care</p>
                    </Link>
                </div>
            </div>
            <div>
                <p className="uppercase font-bold mb-8 mt-10 md:mt-0">COMPANY</p>
                <div>
                    <Link href="#">
                        <p className="font-semibold md:pb-3">Blog</p>
                    </Link>
                    <Link href="#">
                        <p className="font-semibold md:pb-3">Press</p>
                    </Link>
                    <Link href="#">
                        <p className="font-semibold md:pb-3">Career</p>
                    </Link>
                    <Link href="#">
                        <p className="font-semibold md:pb-3">Location</p>
                    </Link>
                    <Link href="#">
                        <p className="font-semibold md:pb-3">Contact us</p>
                    </Link>
                </div>
            </div>
            <div>
                <div className="flex gap-5 mt-10 md:mt-0">
                    <a href="#" className="text-xl text-sky-600">
                        <button className="uppercase font-bold bg-sky-800 px-5 py-2.5 text-white  rounded-md text-xs hover:bg-white hover:text-black duration-700">
                            request care
                        </button>
                    </a>
                    <a href="#" className="text-xl text-sky-600">
                        <button className="uppercase font-bold border-white border px-5 py-2.5 text-white  rounded-md text-xs hover:bg-white hover:text-black duration-700">
                            request care
                        </button>
                    </a>
                </div>
                <div className="flex gap-5 mt-5">
                    <div className="bg-blue-400 hover:bg-white px-4 py-1.5 rounded-md hover:text-slate-800 duration-700">
                        <FaFacebookF className="text-3xl" />
                    </div>
                    <div className="bg-blue-400 hover:bg-white px-4 py-1.5 rounded-md hover:text-slate-800 duration-700">
                        <FaInstagram className="text-3xl" />
                    </div>
                    <div className="bg-blue-400 hover:bg-white px-4 py-1.5 rounded-md hover:text-slate-800 duration-700">
                        <FaLinkedin className="text-3xl" />

                    </div>
                    <div className="bg-blue-400 hover:bg-white  px-4 py-1.5 rounded-md hover:text-slate-800 duration-700">
                        <FaYoutube className="text-3xl " />

                    </div>

                </div>
            </div>
        </div>

        <hr></hr>
        <div className="">
            <div className="">
                <p className="text-center ">Alliance Homecare is a fully licensed home care services agency (LHCSA) servicing New York, Kings, Queens, Bronx, Richmond, Nassau, Suffolk, Westchester and Rockland counties.</p>
            </div>
            <div className="flex justify-center">
                <p className="text-center">© 2023 Alliance Homecare. All Rights Reserved. &nbsp;</p>
                <Link href="#">
                    <p className="underline text-gray-400 ">Privacy Policy</p>
                </Link>

            </div>
        </div>
    </div>
};


export default Footer;