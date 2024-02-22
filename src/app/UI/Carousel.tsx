"use client"
import React, {useState} from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface IPictures {
  images:string
}


const Carousel = ({images}: IPictures) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [length] = useState<number>(images.length)
    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1 )
    }
    return (
      <>
        <div className="relative h-[400px] md:h-[350px] flex justify-center overflow-hidden">
          {length === 1 ? (
            <>
              <div className="w-full h-[400px] md:h-[350px] flex items-center justify-center">
                <img
                  className="rounded-lg h-[100%] object-cover"
                  src={images}
                  alt=""
                />
              </div>
            </>
          ) : (
            <>
              <div className="w-full relative h-[400px] md:h-[350px] mb-4 flex items-center justify-center">
                <img
                  className="rounded-lg h-[100%] w-full object-fill "
                  src={images[currentSlide]}
                  alt=""
                />
              </div>
              <div className="h-7 w-7 flex justify-center items-center rounded-full bg-slate-500 absolute top-1/2 right-0">
                <ChevronRight color="white" size={18} onClick={nextSlide}/>
              </div>
              <div className="h-7 w-7 flex justify-center items-center rounded-full  bg-slate-500 absolute top-1/2 left-0 ">
                <ChevronLeft color="white" size={18} onClick={prevSlide} />
              </div>
            </>
          )}
          <div className="absolute bottom-2 right-2 text-sm bg-[rgba(34,34,34,0.66)] py-1 px-2.5 rounded ">
            <p className=" text-white">{currentSlide + 1} / {length}</p>
          </div>
        </div>
      </>
    );


}

export default Carousel