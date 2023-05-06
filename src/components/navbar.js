export default function Navbar () {
    return (
        <>
        <div className="flex justify-between">
            <div className="p-4 flex gap-12">
            <img src='/logo-ciee.svg' className="w-16 h-10"/>
            <ul className="flex gap-12 mt-2 text-lg font-sans">
                <li className="text-sun bg-off-white w-28 text-center rounded-md hover:underline">Para você</li>
                <li className="hover:underline">Para empresas</li>
                <li className="hover:underline">Para instituições de ensino</li>
            </ul>
            </div>
            <div className="flex gap-12 p-4 pr-12 mt-2">
            <button className="text-base flex text-grey gap-2 hover:underline">
            <img src='/search-icon.svg' className='w-5 h-5 mt-1'/>
                Busca</button>
            <button className="text-sm text-sun w-28 border-solid rounded-full border-2 border-[#d36633] hover:underline">Entrar</button>
            </div>
            
        </div>
        </>
    )
}