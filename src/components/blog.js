import Link from "next/link"
import CardBlog from "./cards/cardBlog"

export default function Blog () {
    return( 
        <>
        <section className="bg-off-white">
            <div className=" p-4 pl-12 flex gap-4">
            <h1 className="font-bold text-3xl ">Blog</h1>
            <Link href='/' className="hover:underline mt-2"> Ver tudo</Link>
            </div>
            <div className="flex p-12 gap-8">
                <CardBlog src='/images/ciee.png' title='CIEE SABER VIRTUAL' content='Tem curso novo para você no CIEE Saber Virtual!'></CardBlog>
                <CardBlog src='/images/ciee.png' title='CIEE SABER VIRTUAL' content='Tem curso novo para você no CIEE Saber Virtual!'></CardBlog>
                <CardBlog src='/images/ciee.png' title='CIEE SABER VIRTUAL' content='Tem curso novo para você no CIEE Saber Virtual!'></CardBlog>
                    
               
            </div>         
        </section>
        </>
    )
}