import React from "react";
import { Clock, CigaretteOff, MegaphoneOff } from "lucide-react";

interface IRules {
    icon: React.ReactNode,
    title:string
}

const RulesArray: IRules[] = [{
    icon: <Clock />,
    title: 'Arrivée entre 10:00 et 14:00'
},{
    icon: <Clock />,
    title: 'Départ avant 10:00'
},{
    icon: <CigaretteOff />,
    title:"Non fumeur"
},{
    icon: <MegaphoneOff />,
    title: "Pas de fête"
},]


const Rules = () => {
    return(
        <>
            {RulesArray.map((rule:{icon:React.ReactNode, title:string},index:any) => {
                return(
                    <div className="flex pt-2 pb-2" key={index}>
                        {rule.icon}
                        <p className="pl-4">{rule.title}</p>
                    </div>
                )
            })}
        </>
    )

}

export default Rules