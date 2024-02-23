import Link from "next/link"

const Error = () => {

    return(
        <div className="h-screen flex justify-center items-center flex-col text-[#FF6666] text-center">
            <h1 className="text-6xl mb-12 font-extrabold">404</h1>
            <h2 className="text-3xl mb-8">Oups la page que vous demandez n'existe pas !</h2>
            <Link href={"/"} className="underline p-2">
                <p className="text-xl">Retournez à la page principal</p>
            </Link>

        </div>
    )
}

export default Error