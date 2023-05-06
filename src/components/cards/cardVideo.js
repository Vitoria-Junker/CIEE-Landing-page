export default function CardVideo({ src, content }) {
  return (
    <>
      <div className="transition hover:scale-105 bg-grey-1/50 p-2 rounded shadow-md">
        <div className="rounded-md  ">
          <img src={src} className="w-full max-w-full " />
          <p className="text-lg p-4 text-white">{content}</p>
        </div>
      </div>
    </>
  );
}
