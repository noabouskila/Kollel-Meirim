import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";


export default function Hero() {
    return (
        <section  className= " relative w-full bg-gradient-to-b from-white to-sky-100 overflow-hidden">

        {/* Mobile : image en background */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/avreh.svg"
            alt="Avreh au Kollel"
            fill
            priority
            className="object-cover object-center opacity-20"
          />
        </div>

        <div className="relative flex flex-col md:flex-row items-center  px-6 md:px-12  z-10">
          {/* Texte à gauche */}
          <div className="w-full md:w-1/2 md:pr-8">
            <h1 className="text-7xl md:text-6xl font-bold  text-blue-900 mt-16">Kollel Meïrim</h1>
            <h2 className="italic text-4xl md:text-5xl font-bold  text-blue-700/50 mt-5">  Étudier et transmettre</h2> 
            <p className=" text-blue-900 mt-16 mb-6 italic  md:text-2xl text-3xl">
              <span className="font-semibold " >Meïrim</span>, c’est l’ambition d’un projet unique dédié aux Français d’Israël.
            </p>
          </div>


          {/* Image à droite (desktop uniquement) */}
          <div className="hidden md:block w-[40%] md:w-[60%]  mt-5 md:mt-0 lg:ml-50">
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

      <a href="#definition" className="flex justify-center animate-bounce pb-5">
        <ChevronDownIcon className="h-10 w-10 text-blue-900" />
      </a>
      
  </section>
    );
}