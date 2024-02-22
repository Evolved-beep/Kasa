interface IArrayImage {
    images: string[]
}

const ImageDesktop = ({images}: IArrayImage) => {
    return(
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center">
            {images.map((el:string, index:any) => {
                return(
                    <img className="mb-4 mr-4 w-[425px] self-center h-[350px] xl:pr-2" src={el} key={index} />
                )
            })}

        </div>
    )

}

export default ImageDesktop