export default function CardBlog({ src, title, content }) {
  return (
    <>
      <div className="bg-white">
        <div className="transition w-full max-w-full hover:scale-105 hover:underline  rounded-md shadow-md">
          <img src={src} className="w-full" />
          <h2 className="text-base p-4 text-sun">{title}</h2>
          <p className="text-xl p-4 font-bold">{content}</p>
        </div>
      </div>
    </>
  );
}
