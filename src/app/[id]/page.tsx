"use client"
import React, {useEffect, useState} from "react";
import DetailsHeader from "./component/DetailsHeader";
import HighRatings from "./UI/HighRatings";
import Host from "./UI/Host";
import Equipement from "./component/Ablity";
import Tags from "./UI/Tags";
import LogementEquipement from "./component/LogementEquipement";
import Rules from "./component/Rules";
import Carousel from "../UI/Carousel";
import Error from "../Error";
import ImageDesktop from "./component/ImageDesktop";

const LocationDetails = ({params}: {
    params: {id: string}
}) => {
    const [logement, setLogement] = useState<any>("")

    useEffect(() => {
        async function getDataById(){
            const response = await fetch("/data/data.json")
            const data = await response.json()
            const dataId = data.find((logement:any) => logement.id === params.id)
            setLogement(dataId)
        }
        getDataById()
    },[params.id])

    console.log(logement);
    if(logement === undefined){
        return(
            <Error />
        )
    } if(logement){
        return (
            <section>
                <div className="border-b-2 pb-8">
                    <div className="block md:hidden">
                        <Carousel images={logement.pictures}/>
                    </div>
                    <div className="hidden md:flex md:justify-center">
                        <ImageDesktop images={logement.pictures} />
                    </div>
                    <DetailsHeader name={logement.title} location={logement.location} />
                    <HighRatings rating={logement.rating}/>
                    <div className="flex flex-row flex-wrap mt-4">
                        <Tags tag={logement.tags} />
                    </div>
                </div>
                <article className="border-b-2 py-4">
                    <Host owner={logement.host} />
                </article>
                <article className="border-b-2 py-4">
                    <Equipement />
                </article>
                <article className="border-b-2 py-4">
                    <h1 className="font-extrabold text-xl mb-2">Où ce situe le logement :</h1>
                    <h2 className="mb-2">{logement.location}</h2>
                    <p className="text-sm">{logement.description}</p>
                </article>
                <article className="border-b-2 py-4">
                    <h1 className="font-extrabold text-xl">Ce que ce logement vous propose : </h1>
                    <LogementEquipement equipment={logement.equipments} />
                </article>
                <article className="border-b-2 py-4">
                    <h1 className="font-extrabold text-xl mb-2">Réglement intérieur</h1>
                    <Rules />
                </article>
            </section>
        )
        
    }

}

export default LocationDetails