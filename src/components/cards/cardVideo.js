export default function CardVideo ({ src, content }) {
    return (
        <>
        <div className="transition hover:scale-105">
            <div className="rounded-md w-96 ">
            <img src={src} className='shadow-md'/>
            <p className='text-lg pl-4 text-white'>{content}</p>
            </div>
        </div>
        </>
    )
}