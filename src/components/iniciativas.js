import Link from "next/link";
import IniciativasCard from "./cards/cardIniciativas";

export default function Iniciativas() {
  return (
    <>
      <section className="bg-white ">
        <div className="p-4 pl-12 flex gap-4">
          <h1 className="font-bold text-3xl ">
            Conecte-se com as iniciativas do CIEE
          </h1>
        </div>
        <div className="p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <IniciativasCard
            src="/images/focus.svg"
            title="CIEE SABER VIRTUAL"
            content="Tem curso novo para você no CIEE Saber Virtual!"
            bgColor="bg-orange"
          ></IniciativasCard>
          <IniciativasCard
            src="/images/hair.png"
            title="CIEE SABER VIRTUAL"
            content="Tem curso novo para você no CIEE Saber Virtual!"
            bgColor="bg-orange"
          ></IniciativasCard>
          <IniciativasCard
            src="/images/podcast.svg"
            title="CIEE SABER VIRTUAL"
            content="Tem curso novo para você no CIEE Saber Virtual!"
            bgColor="bg-orange"
          ></IniciativasCard>
          <IniciativasCard
            src="/images/site.svg"
            title="CIEE SABER VIRTUAL"
            content="Tem curso novo para você no CIEE Saber Virtual!"
            bgColor="bg-orange"
          ></IniciativasCard>
        </div>
      </section>
    </>
  );
}
