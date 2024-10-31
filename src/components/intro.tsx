"use client"
import React from "react";
import Image from "next/image";
import pic from "../public/OIP-removebg-preview.png";
import Link from "next/link";
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Intro = ()=> {
    return(
       <section className="mb-28 max-w-[75rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
            <div className="relative">
                <div className="transform hover:scale-110 hover:rotate-6 transition-transform duration-300 ease-in-out">
                    <Image 
                    src= {pic} 
                    width={480} 
                    height={480}
                    alt="portrait"
                    quality={100}
                    priority ={true}
                    className="rounded-full shadow-xl object-cover"
                    />
                </div>
               
            </div>
        </div>
        <h1 className="mb-10 mt-4 text-2xl sm:text-4xl">
            <span className="font-medium !leading-[1.5]">Hi! I am Syeda Areeba</span>{" "}
            <p className="text-[14px]">
                frontend is a full-service creative studio creating beautiful digital experiences and prducts.
            </p>
        </h1>
        <div className="flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium">
            <Link href="#" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
            outline-none focus:scale-110 hover:scale-y-110 hover:bg-gray-950 dark:bg-white/10 
             active:scale-105 transition">
            Connect <IoMdMail  color={"#9ca3af"}/>
            </Link>
            <a
            className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full
             focus:scale-[1.15]  hover:scale-[1.15] active:scale-105 transition cursor-pointer
             borderBlack dark:bg-white/10 dark:text-white/60"
            href="#"
            target="_blank">
                <BsLinkedin />
            </a>

            <a
            className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full
             focus:scale-[1.15]  hover:scale-[1.15] active:scale-105 transition cursor-pointer
             borderBlack dark:bg-white/10 dark:text-white/60"
            href="#"
            target="_blank">
                <FaGithubSquare />
            </a>
        </div>
       </section>
    )
};

export default Intro 