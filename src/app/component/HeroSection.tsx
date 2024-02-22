"use client"
import React, { useEffect, useState } from "react";
import Carousel from "../UI/Carousel";
import { Star } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
    const [location, setLocation] = useState<Array<any>>()

    useEffect(() => {
        const getData = async() => {
            const response = await fetch("/data/data.json")
            const data = await response.json()
            setLocation(data)
        }
        getData()
    },[])

    return(
        <section className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {location?.map((loc) => {
                return(
                    <article className="mb-4 md:mx-2">
                            <Carousel images={loc.pictures}/>
                            <div className="flex flex-col my-3">
                            <Link href={`/${loc.id}`} key={loc.id}>
                                <div className="flex justify-between">
                                    <h1 className="font-semibold text-base">{loc.title}</h1>
                                    <div className="flex items-center text-base">
                                        <Star fill="black" size={14} />
                                        <p className="ml-1">{loc.rating}</p>
                                    </div>
                                </div>
                                <div className="text-[#717171] text-sm">
                                    <p>{loc.location}</p>
                                    <p>By {loc.host.name}</p>
                                </div>
                            </Link>
                            </div>
                        </article>
                )
            })}
        </section>
    )
}

export default HeroSection