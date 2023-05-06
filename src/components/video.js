import Link from "next/link";
import CardVideo from "./cards/cardVideo";

export default function Video() {
  return (
    <>
      <section className="bg-grey">
        <div className='p-4 pl-12 flex gap-4'>
          <h1 className="font-bold text-3xl ">Video</h1>
          <Link href="/" className="hover:underline"> Ver tudo</Link>
        </div>
        <div className="flex p-12 gap-8">
        <CardVideo
          src="/images/video.png"
          content="
            Show do RASHID no Teatro CIEE? Essa foi a festa das Oficinas de Cri@atividades!"
        ></CardVideo>
        <CardVideo
          src="/images/video.png"
          content="
            Show do RASHID no Teatro CIEE? Essa foi a festa das Oficinas de Cri@atividades!"
        ></CardVideo>
        <CardVideo
          src="/images/video.png"
          content="
            Show do RASHID no Teatro CIEE? Essa foi a festa das Oficinas de Cri@atividades!"
        ></CardVideo>
        </div>
      </section>
    </>
  );
}
