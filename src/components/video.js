import Link from "next/link";
import CardVideo from "./cards/cardVideo";

export default function Video() {
  return (
    <>
      <section className="bg-grey">
        <div className='p-12 flex gap-4 text-white'>
          <h1 className="font-bold text-3xl ">Video</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-12 gap-8">
        <CardVideo
          src="/images/video1.svg"
          content="
            Show do RASHID no Teatro CIEE? Essa foi a festa das Oficinas de Cri@atividades!"
        ></CardVideo>
        <CardVideo
          src="/images/video2.svg"
          content="
            Show do RASHID no Teatro CIEE? Essa foi a festa das Oficinas de Cri@atividades!"
        ></CardVideo>
        <CardVideo
          src="/images/video3.svg"
          content="
            Show do RASHID no Teatro CIEE? Essa foi a festa das Oficinas de Cri@atividades!"
        ></CardVideo>
        </div>
      </section>
    </>
  );
}
