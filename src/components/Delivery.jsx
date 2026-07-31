export default function Delivery() {
    return (
        <section id="entrega" className="w-full flex flex-col md:flex-row border-y-4 border-preto overflow-x-hidden">
      
            <div className="w-full md:w-1/2 bg-vermelho flex flex-col items-center justify-center p-12 md:p-24 border-b-4 md:border-b-0 md:border-r-4 border-preto">
                
                <img 
                src="/images/motoboy.avif" 
                alt="Hambúrguer motoboy" 
                className="w-64 md:w-80 h-auto mb-8 md:mb-12"
                />
                
                <h3 data-aos="fade-right" className="font-title text-creme text-h3 text-center leading-tight">
                Não é lanche.<br />É missão.
                </h3>
                
            </div>

            <div className="w-full md:w-1/2 bg-laranja flex flex-col items-center justify-center p-12 md:p-24">
                
                <img 
                src="/images/trofeu.avif" 
                alt="Troféu Hambúrguer" 
                className="w-48 md:w-64 h-auto mb-8 md:mb-12"
                />
                
                <div className="flex flex-col items-center">
                <h3 data-aos="fade-left" className="font-title text-preto text-h3 text-center mb-4 tracking-wide">
                    Cada pedido, uma vitória.
                </h3>
                <p data-aos="fade-left" className="font-body text-balance text-preto text-center max-w-md leading-snug">
                    Aqui não tem pedido ruim. Só combinações que ainda não foram testadas. E um time que leva cada burguer a sério demais pra deixar escapar um errado.
                </p>
                </div>

            </div>

    </section>
    )
}