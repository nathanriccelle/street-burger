import { bebidas, sobremesas } from '@/data/menuData'

export default function Extras() {
    return (
        <section className="py-6 md:py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="flex items-center justify-center gap-6 mb-10 md:mb-16">
          <div data-aos="flip-left" className="h-1 md:h-2 bg-vermelho grow max-w-20 md:max-w-50"></div>
          
          <h2 className="font-title text-vermelho text-h2 tracking-wider text-center">
            Não acabou ainda.
          </h2>
          
          <div data-aos="flip-left" className="h-1 md:h-2 bg-vermelho grow max-w-20 md:max-w-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          
          <div>
            <h3 className="font-title text-preto text-h3 mb-4">Bebidas</h3>
            
            <div className="flex flex-col gap-4">
              {bebidas.map((item, index) => (
                <div key={index}>
  
                  <div className="flex items-center gap-2 mb-1">
  
                    <div className="w-1.5 h-5 bg-vermelho"></div>
                    <h4 className="font-title text-xl text-preto">
                      {item.nome} <span className="text-vermelho ml-2">{item.preco}</span>
                    </h4>
                  </div>

                  <p className="font-body text-preto font-medium ml-3.5 leading-snug pr-4">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-title text-preto text-h3 mb-4">Sobremesas</h3>
            
            <div className="flex flex-col gap-4">
              {sobremesas.map((item, index) => (
                <div key={index}>
  
                  <div className="flex items-center gap-2 mb-1">

                    <div className="w-1.5 h-5 bg-[#f48c67]"></div>
                    <h4 className="font-title text-xl text-preto">
                      {item.nome} <span className="text-preto ml-2">{item.preco}</span>
                    </h4>
                  </div>

                  <p className="font-body text-preto font-medium ml-3.5 leading-snug pr-4">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
    )
}