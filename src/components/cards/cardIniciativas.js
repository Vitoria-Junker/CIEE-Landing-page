// import Link from "next/link";

// export default function IniciativasCard({ src, title, content, bgColor }) {
//   return (
//     <>
//       <div className="bg-white transition text-center">
//         <div
//           className={`h-96 rounded-md w-70 shadow-md ${bgColor} justify-center`}
//         >
//           <h2 className="text-base p-8 sm:p-4 md:p-8 text-white">{title}</h2>
//           <img src={src} className="h-28 w-28 mx-auto" />
//           <p className="text-base md:text-xl p-4 pb-8 font-bold">{content}</p>
//           <Link href="/" className="hover:underline">
//             Detalhes
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// import Link from "next/link";

// export default function IniciativasCard({ src, title, content, bgColor }) {
//   return (
//     <>
//       <div className=" transition h-screen text-center">
//         <div className={`h-96 rounded-md w-70 max-h-full shadow-md ${bgColor} justify-center`}>
//           <h2 className="text-base pb-16 p-16 md:p-8 text-white">{title}</h2>
//           <img src={src} className="h-28 w-28 mx-auto" />
//           <p className="text-base md:text-xl p-4 pb-8  font-bold break-words h-screen">{content}</p>
//           <Link href="/" className="hover:underline">
//             Detalhes
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }


import Link from "next/link";

export default function IniciativasCard({ src, title, content, bgColor }) {
  return (
    <>
      <div className="transition h-full md:h-screen flex justify-center items-center">
        <div className={`rounded-md w-70 max-h-full shadow-md ${bgColor} flex flex-col justify-center items-center p-8`}>
          <h2 className="text-base font-bold pb-8 text-white">{title}</h2>
          <img src={src} className="h-28 w-28 mx-auto" />
          <p className="text-base md:text-xl pt-8 pb-4 font-bold text-center break-words">{content}</p>
          <Link href="/" className="hover:underline text-">
            Detalhes
          </Link>
        </div>
      </div>
    </>
  );
}