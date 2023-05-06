import Link from "next/link";
import CardBlog from "./cards/cardBlog";

export default function Blog() {
  return (
    <>
      <section className="bg-off-white pt-12">
        <div className=" p-4 pl-12 flex gap-4">
          <h1 className="font-bold text-3xl ">Blog</h1>
          <Link href="/" className="hover:underline mt-2">
            {" "}
            Ver tudo
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-12 gap-8">
          <CardBlog
            src="/images/ciee.png"
            title="CIEE SABER VIRTUAL"
            content="Tem curso novo para você no CIEE Saber Virtual!"
          ></CardBlog>
          <CardBlog
            src="/images/ciee.png"
            title="CIEE SABER VIRTUAL"
            content="Tem curso novo para você no CIEE Saber Virtual!"
          ></CardBlog>
          <CardBlog
            src="/images/ciee.png"
            title="CIEE SABER VIRTUAL"
            content="Tem curso novo para você no CIEE Saber Virtual!"
          ></CardBlog>
        </div>
      </section>
    </>
  );
}
