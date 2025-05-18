import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";


export default function Hero() {
    return (
        <section  className= "relative w-full overflow-hidden bg-gradient-to-b from-white to-sky-100">

        {/* Mobile : image en background */}
        <div className="absolute inset-0 block md:hidden">
          <Image
            src="/avreh.svg"
            alt="Avreh au Kollel"
            fill
            priority
            className="object-cover object-center opacity-20"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 md:flex-row md:px-12">
          {/* Texte à gauche */}
          <div className="w-full md:w-1/2 md:pr-8">
            <h1 className="mt-16 font-bold text-blue-900 text-7xl md:text-9xl">Kollel Meïrim</h1>
            <h2 className="mt-5 text-4xl italic font-bold md:text-6xl text-blue-700/50">  Étudier et transmettre</h2> 
            <p className="mt-16 mb-6 text-3xl italic text-blue-900 md:text-4xl">
              <span className="font-semibold " >Meïrim</span>, c’est l’ambition d’un projet unique dédié aux Français d’Israël.
            </p>
          </div>


          {/* Image à droite (desktop uniquement) */}
          <div className="hidden md:block w-[40%] md:w-[40%]  mt-5 md:mt-0 lg:ml-40">
            <Image
              src="/avreh.svg"
              alt="Avreh au Kollel"
              width={1200}
              height={700}
              priority
              className="object-cover w-full h-auto"
            />
          </div>
         </div>

      <a href="#definition" className="flex justify-center pb-5 animate-bounce">
        <ChevronDownIcon className="w-10 h-10 text-blue-900" />
      </a>
      
  </section>
    );
}