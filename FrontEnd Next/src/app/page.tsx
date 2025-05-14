import CarouselImage from "./ui/carousel";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";




export default function Home() {
  return (
    <main className="bg-sky-50 min-h-screen ">


      <section  className="relative w-full bg-gradient-to-b from-white to-sky-100 overflow-hidden">

        {/* Mobile : image en background */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/avreh.svg"
            alt="Avreh au Kollel"
            fill
            className="object-cover object-center opacity-20"
          />
        </div>

        <div className="relative flex flex-col md:flex-row items-center py-12 px-6 md:px-12 lg:px-24 z-10">
          {/* Texte à gauche */}
          <div className="w-full md:w-1/2 md:pr-8">
            <h1 className="text-7xl md:text-6xl font-bold  text-blue-900 mt-16">Kollel Meïrim</h1>
            <h2 className="italic text-4xl md:text-5xl font-bold  text-blue-700 mt-5">  Étudier et transmettre</h2> 
            <p className="text-2xl text-blue-900 mt-16 mb-6 italic">
              <span className="font-semibold  text-3xl" >Meïrim</span>, c’est l’ambition d’un projet unique dédié aux Français d’Israël.
            </p>
          </div>


          {/* Image à droite (desktop uniquement) */}
          <div className="hidden md:block w-[40%]  mt-5 md:mt-0 ml-5">
            <Image
              src="/avreh.svg"
              alt="Avreh au Kollel"
              width={1200}
              height={700}
              className="object-cover w-full h-auto"
            />
          </div>
         </div>

      <a href="#hero" className="flex justify-center animate-bounce pb-5">
        <ChevronDownIcon className="h-10 w-10 text-blue-900" />
      </a>
      
  </section>



        <div id="hero"  className=" text-center px-6 py-16 md:px-12 lg:px-24 max-w-screen-xl mx-auto space-y-6  text-gray-800">

          <h2 className=" text-blue-900 text-2xl">
          Un Collel francophone de haut niveau s’installe à Kyriat Yovel, où de jeunes Avré’hims
          étudient chaque jour sous la direction de Rabbanim et Talmidé ‘Ha’hamim, autour de
          sujets en profondeur : <strong>Iyoun</strong> et <strong>Hala’ha</strong>.
          </h2>
        </div>


      <CarouselImage  /> 

      <section className="px-6 py-12 md:px-12 lg:px-24 max-w-screen-xl mx-auto space-y-6 text-xl text-blue-900 text-center">
        <p>
          Mais Meïrim, c’est aussi <strong>une mission</strong> : faire rayonner la Torah au-delà des murs du Collel.
          <strong> En soirée</strong>, ces Avré’him se répartissent dans différents quartiers de Jérusalem — Har ‘Homa,
          Talpiot, Baka, Re’havia, Kyriat Yovel (et bientôt dans d'autres villes d'Israël) — pour étudier en ‘Havrouta
          avec ceux qui, parfois, n’ont pas encore eu l’occasion de goûter pleinement à la douceur du limoud.
        </p>
        <p>
          Un programme pensé pour éveiller l’intérêt, <strong>former à l'étude approfondie du Talmud</strong>, et ouvrir les cœurs
          à la beauté de la Torah.
        </p>
        <p>
          Ce projet, porté par <strong>Rav Dan Bouskila</strong> est fortement encouragé et orienté par d’éminents Rabbanim :
          <strong> Rav Its'hak Ezra'hi</strong> (Roch Yéchiva de Mir), <strong>Rav David Cohen</strong> (Roch Yechiva de Hevron),
          <strong> Rav Guershon Cahen</strong>, <strong>Rav Yechaya Arouass</strong>.
        </p>
        <p>
          Meïrim aspire à toucher toujours plus de communautés francophones.
        </p>
      </section>

     
    </main>
  );
}