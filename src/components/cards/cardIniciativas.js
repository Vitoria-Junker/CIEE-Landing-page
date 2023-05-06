import Link from "next/link"


export default function IniciativasCard ({ src, title, content, bgColor }) {
    return (
        <>
        <div className="bg-white transition text-center">
            <div className={`h-96 rounded-md w-70 shadow-md ${bgColor} justify-center`}>
            <h2 className="text-base p-8 text-sun">{title}</h2>
            <img src={src} className='h-28 w-28 mx-auto'/>
            <p className='text-xl pl-4 font-bold pb-16'>{content}</p>
            <Link href='/' className='hover:underline'>Detalhes</Link>
            </div>
            
        </div>
        </>
    )
}