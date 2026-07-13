import Image from "next/image";
import Header from "@/components/Header";
import HeroBurger from "@/components/HeroBurger";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Combo from "@/components/Combo";
import Extras from "@/components/Extras";
import Delivery from "@/components/Delivery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <HeroBurger/>
        <About />
        <Menu />
        <Combo />
        <Extras />
        <Delivery />
      </main>
      <Footer />
    </>
  );
}
