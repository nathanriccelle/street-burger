import Button from "./ui/Button";

export default function About() {
    return (
        <section className="relative bg-preto text-creme" id="sobre">
            <div data-aos="flip-up" className="absolute z-10 border-2 border-preto top--20 right-40 translate-x-1/3 -translate-y-1/2 md:translate-x-1/2 bg-vermelho text-creme rounded-full size-28 hidden md:flex items-center justify-center font-title font-bold shadow-[4px_4px_0px_0px_var(--color-preto)] text-center text-1xl md:text-2xl leading-tight">
                DESDE<br/>1991
            </div>
            <div className="container mx-auto py-6 sm:py-12 flex flex-col items-center">
                <h2 className="font-title text-vermelho text-h2" >A turma do sabor</h2>
                <p className="text-center px-4 sm:px-8 font-body mb-5 sm:mb-10 text-balance sm:text-base">Aqui não tem frescura nem história comprida. 
                    O Street Burguer nasceu na calçada, 
                    foi criado na chapa e virou o rei do pedaço antes 
                    que alguém percebesse. Cada blend é montado com 
                    respeito — pelo sabor, pelo cliente e pela 
                    concorrência que entrou na briga e saiu no prejuízo. 
                    Garfo e faca são opcionais. A mordida, obrigatória.
                </p>
                <Button>Alerta: Risco de vício</Button>
            </div>
        </section>
    )
}