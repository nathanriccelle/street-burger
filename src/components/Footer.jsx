import Link from 'next/link';

export default function Footer() {

    const anoAtual = new Date().getFullYear();

    return (
        <footer className="bg-preto py-10 md:py-14">
            <div className="container mx-auto px-6 flex flex-col items-center gap-6 md:gap-8">
                
                <nav>
                <ul className="flex items-center justify-center gap-8 md:gap-12 font-title text-laranja text-lg md:text-xl tracking-widest">
                    <li>
                    <Link href="https://www.behance.net/nathanriccelle" target="_blank" rel="noopener noreferrer" className="hover:text-creme transition-colors">
                        Behance
                    </Link>
                    </li>
                    <li>
                    <Link href="https://www.figma.com/design/PBlG33FpgCGXYmGmpUFggd/Burger-Comando?node-id=0-1&t=DQycIL2wReRimkqk-1" target="_blank" rel="noopener noreferrer" className="hover:text-creme transition-colors">
                        Figma
                    </Link>
                    </li>
                    <li>
                    <Link href="https://www.instagram.com/nathanriccelle/" target="_blank" rel="noopener noreferrer" className="hover:text-creme transition-colors">
                        Instagram
                    </Link>
                    </li>
                </ul>
                </nav>

                <p className="font-body text-xs md:text-sm text-creme uppercase tracking-wider text-center opacity-80">
                © {anoAtual} Street Burguer — Código, ilustração e sabor feitos na mesma cozinha. By Nathan Riccelle
                </p>

            </div>
        </footer>
    )
}