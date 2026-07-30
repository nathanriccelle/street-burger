import { Plus } from 'lucide-react';
import { hamburgueres } from '@/data/menuData';

export default function Menu() {

    return (
        <section className="py-6 sm:py-12" id="menu">
            <div className="container mx-auto px-6">

                <div className="flex flex-col items-center mb-6 md:mb-12">
                    <h2 data-aos="flip-left" className="font-title text-h2 underline underline-offset-12 decoration-8 sm:decoration-12 decoration-laranja">
                        Menu Brutal
                    </h2>
                </div>

                <div className="relative">

                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pb-4 md:pb-0">
                    {hamburgueres.map((item, index) => (
                        <article 
                            key={item.id}
                            className='min-w-70 md:min-w-0 snap-center flex flex-col bg-creme border-4 border-preto flex-1 md:flex-1'
                        >
                            <div className="w-full h-52 bg-vermelho border-b-[3px] border-preto relative overflow-hidden shrink-0">
                                <img 
                                    src={item.imagem} 
                                    alt={item.nome}
                                    className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-5 flex flex-col h-full">
                                <div className="flex-1">
                                    <h3 className="font-title text-vermelho text-2xl mb-2">
                                        {item.nome}
                                    </h3>
                                    <p className="text-preto text-sm leading-snug font-body line-clamp-3">
                                        {item.descricao}
                                    </p>
                                </div>
                                
                                <div className="flex mt-4 justify-between items-center">
                                    <div>
                                        <span className="font-title text-xl text-preto tracking-wide">
                                            {item.preco}
                                        </span>
                                        <div className="w-full border-b-3 border-dashed border-vermelho mt-1"></div>
                                    </div>
                                    
                                    <button className="bg-preto text-creme size-10 border-2 border-preto flex items-center
                                     justify-center hover:bg-vermelho hover:text-preto transition-colors
                                      shadow-[2px_2px_0px_0px_var(--color-preto)] mt-4">
                                        <Plus size={24} strokeWidth={3} />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-4 md:hidden">
                    {hamburgueres.map((_, index) => (
                        <div 
                            key={index}
                            className="w-2 h-2 rounded-full bg-vermelho/30 transition-all"
                        />
                    ))}
                </div>
            </div>

            </div>
        </section>
    )
}