interface IOwner {
    owner:{name:string, picture:string}
}

const Host = ({owner}:IOwner) => {
    console.log(owner);
    return(
        <div className="flex items-center mt-4">
            <img className="rounded-full h-14 w-14 mr-4" src={owner.picture} alt="" />
            <h1 className="text-[#222222] font-semibold">Hôte: {owner.name}</h1>
            
        </div>
    )
}

export default Host