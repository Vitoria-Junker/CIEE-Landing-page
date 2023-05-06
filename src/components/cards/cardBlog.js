// export default function CardBlog({ src, title, content }) {
//   return (
//     <>
//       <div className="bg-white">
//         <div className="transition h-80 w-full max-w-full hover:scale-105 hover:underline  rounded-md shadow-md">
//           <img src={src} className="object-cover max-w-full" />
//           <h2 className="text-base p-4 text-sun">{title}</h2>
//           <p className="text-xl p-4 font-bold">{content}</p>
//         </div>
//       </div>
//     </>
//   );
// }

export default function CardBlog({ src, title, content }) {
  return (
    <>
      <div className="transition hover:scale-105 bg-white p-2 rounded shadow-md">
        <div className="rounded-md  ">
          <img src={src} className="h-72 max-w-full " />
          <h2 className="text-base p-4 text-sun">{title}</h2>
          <p className="text-xl p-4 font-bold">{content}</p>
        </div>
      </div>
    </>
  );
}

