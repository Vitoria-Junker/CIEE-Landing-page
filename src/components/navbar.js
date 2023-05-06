import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="flex justify-between">
        {isMobile ? null : (
          <div className="p-4">
            <img src="/logo-ciee.svg " className="w-16 h-10 " />
          </div>
        )}
        <div className="p-4 flex gap-12">
          {isMobile ? (
            <button onClick={toggleMenu} className="text-base flex text-grey gap-2 hover:underline">
              <img src="/images/icon-menu.svg" className="w-5 h-5 mt-4" />
            </button>
          ) : (
            <ul className="flex mt-2 gap-12 text-lg font-sans ">
              <li className="text-sun bg-off-white w-28 text-center rounded-md hover:underline">
                <a href="#">Para você</a>
              </li>
              <li className="hover:underline">
                <a href="#">Para empresas</a>
              </li>
              <li className="hover:underline">
                <a href="#">Para instituições de ensino</a>
              </li>
            </ul>
          )}
        </div>
        <div className="flex gap-12 p-4 pr-12 mt-2">
          <button className="text-base flex text-grey gap-2 hover:underline">
            <img src="/search-icon.svg" className="w-5 h-5 mt-1" />
            Busca
          </button>
          <button className="text-sm text-sun w-28 border-solid rounded-full border-2 border-[#d36633] hover:underline">
            Entrar
          </button>
        </div>
      </div>
      {showMenu && isMobile && (
        <div className="flex flex-col items-center text-center mt-2">
          <a href="#" className="text-sun bg-off-white w-28 text-center rounded-md hover:underline py-2">
            Para você
          </a>
          <a href="#" className="hover:underline py-2">
            Para empresas
          </a>
          <a href="#" className="hover:underline py-2">
            Para instituições de ensino
          </a>
        </div>
      )}
    </>
  );
}

