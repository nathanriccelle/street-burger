"use client";

import Image from "next/image";
import Button from "./ui/Button";

export default function HeroBurger () {
    return (
        <section>
            <div className="container mx-auto px-6 py-6 md:py-12 flex flex-col-reverse text-center md:text-start md:flex-row items-center">

                <div>
                    <h1 className="font-title text-h2 mt-4 text-vermelho leading-none">
                        Street{' '}
                        <br className="hidden md:block" />
                        Burger
                    </h1>
                    <p className="font-body text-preto text-xl mt-2 mb-6 text-balance">Da rua pro seu prato. A receita que a concorrência tentou
                        descobrir e não conseguiu.
                    </p>
                    <Button>SAIBA MAIS</Button>
                </div>
                <div className="">
                    <div className="w-full flex justify-center sm:justify-end">
                        <img className="w-full h-auto lg:w-[90%]" src="/images/BattleBurger.avif" alt="burger"/>
                    </div>
                </div>
            </div>
        </section>
    )
}