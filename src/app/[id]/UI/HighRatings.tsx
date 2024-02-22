import React from "react";
import { Star } from "lucide-react";

interface test {
    rating: string
}

const HighRatings = ({rating}: test) => {
    return(
        <div className="py-5 border rounded-xl ">
            <div className="flex items-center">
                <div className="flex justify-center items-center border-r-2 gap-px px-5">
                    <span>{rating}</span>
                    <div className="flex">
                        <Star fill="black" size={20} />
                    </div>
                </div>
                <div className="px-12">
                    {rating >= "4"? (
                        <span>Coup de coeur</span>
                    ) : (
                        <span>Logement apprécié</span>
                    )}
                </div>
            </div>
        </div>
    )

}

export default HighRatings