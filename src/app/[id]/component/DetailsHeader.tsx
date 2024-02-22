import React from "react";

interface Props {
    name: string,
    location: string
}

const DetailsHeader = ({name, location}: Props) => {
    return(
        <div className="py-6">
            <h1 className="font-semibold text-lg">{name}</h1>
            <span className="text-[#222222] text-sm">Logement entier : {location}</span>
        </div>
    )
}

export default DetailsHeader