import CarouselImage from "./ui/carousel";
import Hero from './ui/hero';




export default function Home() {
  return (
    <main className="min-h-screen bg-sky-50 ">

      <Hero />
    

      <div id="definition"  className="max-w-screen-xl px-6 py-16 mx-auto space-y-6 text-center text-gray-800  md:px-12 lg:px-24">

        <h2 className="text-2xl text-blue-900 ">
        Un <strong className="italic">Nouveau Kollel francophone  </strong> de haut niveau  <br/> s’installe à Kyriat Yovel, où de jeunes Avré’hims
        étudient chaque jour  <br/> sous la direction de Rabbanim et Talmidé ‘Ha’hamim,   <br/> autour de
        sujets en profondeur : <strong>Iyoun</strong> et <strong>Hala’ha</strong>.
        </h2>

      </div>


      <CarouselImage  /> 

      <section className="px-6 mx-auto space-y-6 text-xl text-center text-blue-900 py-14 md:px-12 lg:px-24">
      <h3  className="text-3xl"> Mais Le Kollel Meïrim, c’est aussi <strong>une mission</strong> : <br/> <br/></h3>
        <p>
          Faire rayonner la Torah au-delà des murs du Collel !<br/><br/>
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