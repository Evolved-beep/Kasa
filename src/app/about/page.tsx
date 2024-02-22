import React from "react";

interface IAbout {
    title:string,
    description:string
}

const aboutArray: IAbout[] = [{
    title:'About us',
    description: 'Nous aidons des gens à trouver leur location de rêve.'
},{
    title:"Fiabilité",
    description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
},{
    title:"Respect",
    description:"La bienveillance fait partie des valeurs fondatrices chez Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
},{
    title:"Service",
    description:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
},{
    title:"Sécurité",
    description:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos utilisateurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organiserons également des ateliers sur la sécurité domestiques pour nos hôtes"
}]

const About = () => {
    return(
        <section className="flex flex-col items-center pt-8">
            {aboutArray.map((abt:{title:string, description:string}, index:any) => {
                return(
                    <div className="text-center w-full odd:bg-[#F3F3F3] p-20" key={index}>
                        <h1 className="text-[#FF6060] text-xl md:text-2xl lg:text-3xl font-semibold mb-6">{abt.title}</h1>
                        <p className="text-base md:text-lg lg:text-xl text-[#4B4B4B]">{abt.description}</p>
                    </div>
                )
            })}
        </section>
    )

}

export default About