import Button from "./ui/Button";

export default function Combo() {
    return (
        <section  className="bg-preto py-6 sm:py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        <div data-aos="fade-down-right" className="w-full md:w-4/5 flex justify-center">

          <img 
            src="/images/BattleBurger2.avif" 
            alt="Combo Hambúrguer, Batata e Refrigerante" 
            className="w-full max-w-lg h-auto" 
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right gap-6">

          <div className="flex flex-col w-full">
            <h2 className="font-title text-vermelho text-h2 leading-none">
              Brigam.
            </h2>
            <h2 className="font-title text-creme text-h2 leading-none">
              Mas chegam juntos.
            </h2>
          </div>

          <p className="font-body text-creme text-balance md:text-xl max-w-md ">
            Hambúrguer, batata e uma Coca-Cola gelada. O bando completo para sua missão mais difícil.
          </p>
            <Button>Por apenas R$ 39,90</Button>
        </div>

      </div>
        </section>
    )
}