import React from "react";
import Link from "next/link";

const Navbar = () => {
    return(
        <nav className="w-full my-12 flex items-center justify-between">
            <div>
                <img className="h-8 md:h-11" src="/assets/images/Logo.png" alt="Kasa Logo" />
            </div>
            <div className="text-lg md:text-xl lg:text-2xl text-[#FF6060]">
                <Link className="text-[#FF6060] mx-8" href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
            </div>
        </nav>
    )

}

export default Navbar