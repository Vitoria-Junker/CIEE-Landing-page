import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import SimpleSlider from "@/components/slider";
import Blog from "@/components/blog";
import Video from "@/components/video";
import Iniciativas from "@/components/iniciativas";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="text-dark">
      <Navbar />
      <Header />
      <SimpleSlider />
      <Blog />
      <Video />
      <Iniciativas />
    </main>
  );
}
