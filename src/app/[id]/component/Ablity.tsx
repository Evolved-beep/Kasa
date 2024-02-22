import { Wifi, DoorClosed, Calendar } from "lucide-react"

interface IArray {
    icon: React.ReactNode,
    title: string,
    description: string
}

const ArrayAbility: IArray[] = [{
    icon: <Wifi />,
    title: "Wi-fi",
    description:'Vous pourrez répondre à des appels vidéos et surfez sur le web'
},{
    icon: <DoorClosed />,
    title: 'Arrivée autonome',
    description: "Vous pouvez entrer dans les lieux avec une boîte à clé sécurisée."

},{
    icon: <Calendar size={16}/>,
    title: "Annulation gratuite",
    description: "Jusqu'à 48h avant votre arrivée"
}]


const Equipement = () => {
    return(
        <div className="flex flex-col">
            {ArrayAbility.map((el:{icon:React.ReactNode, title:string, description:string}, index:any) => (
                <div className="flex pb-2" key={index}>
                    {el.icon}
                    <div className="flex flex-col px-4">
                        <h1 className="">{el.title}</h1>
                        <p className="text-[#717171] text-sm">{el.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )

    
}

export default Equipement
