export default function CardBlog ({ src, title, content }) {
    return (
        <>
        <div className="bg-white  transition hover:scale-105 hover:underline">
            <div className="h-96 rounded-md w-96 shadow-md">
            <img src={src} className=''/>
            <h2 className="text-base p-4 text-sun">{title}</h2>
            <p className='text-xl pl-4 font-bold'>{content}</p>
            </div>
        </div>
        </>
    )
}