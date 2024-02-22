import React from "react";

const Banner = () => {
    return(
        <div className="relative">
            <img className="w-full brightness-50 rounded-3xl h-28 md:h-56 relative object-fill " src="/assets/images/Homepage.png" alt="Banner image" />
            <p className="
            absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]
          text-white text-base md:text-3xl lg:text-4xl xl:text-5xl">Chez vous, partout et ailleurs</p>
        </div>
    )

}

export default Banner