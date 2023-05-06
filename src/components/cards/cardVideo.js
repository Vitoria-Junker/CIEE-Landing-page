export default function CardVideo({ src, content }) {
  return (
    <>
      <div className="transition hover:scale-105">
        <div className="rounded-md  ">
          <img src={src} className="shadow-md w-full max-w-full " />
          <p className="text-lg pl-4 text-white">{content}</p>
        </div>
      </div>
    </>
  );
}
