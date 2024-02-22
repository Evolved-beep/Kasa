interface IEquipement {
    equipment: string[]
}

const LogementEquipement = ({equipment}: IEquipement) => {
    return(
        <div className="flex flex-col pt-2">
            {equipment?.map((el:string, index:any) =>{
                return(
                    <span key={index}>{el}</span>
                )
            })}
        </div>
    )
}

export default LogementEquipement