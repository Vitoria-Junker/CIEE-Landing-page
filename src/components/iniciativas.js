import Link from "next/link"
import IniciativasCard from "./cards/cardIniciativas"

export default function Iniciativas () {
    return( 
        <>
        <section className="bg-white ">
            <div className="p-4 pl-12 flex gap-4">
            <h1 className="font-bold text-3xl ">Conecte-se com as iniciativas do CIEE</h1>
            <Link href='/' className="hover:underline mt-2"> Ver tudo</Link>
            </div>
            <div className="p-12 flex gap-12">
            <IniciativasCard src='/images/focus.svg' title='CIEE SABER VIRTUAL' content='Tem curso novo para você no CIEE Saber Virtual!' bgColor='bg-pink'></IniciativasCard >
                <IniciativasCard  src='/images/hair.png' title='CIEE SABER VIRTUAL' content='Tem curso novo para você no CIEE Saber Virtual!' bgColor='bg-brown'></IniciativasCard >
                <IniciativasCard  src='/images/podcast.svg' title='CIEE SABER VIRTUAL' content='Tem curso novo para você no CIEE Saber Virtual!' bgColor='bg-ocean'></IniciativasCard >
                <IniciativasCard  src='/images/site.svg' title='CIEE SABER VIRTUAL' content='Tem curso novo para você no CIEE Saber Virtual!' bgColor='bg-grey-1'></IniciativasCard >
               
            </div>         
        </section>
        </>
    )
}