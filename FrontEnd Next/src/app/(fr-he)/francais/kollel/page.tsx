// src/app/[lang]/francais/kollel/page.tsx
import Image from 'next/image';

export default function Kollel() {
  return (
    <main className="w-[90%] min-h-screen p-6 mx-auto mt-20 space-y-8 ">
      <h1 className="mb-6 text-4xl font-bold">Présentation du Kollel Meïrim</h1>
      
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Kollel du soir</h2>
        <div className="relative w-full h-64 mb-6 overflow-hidden rounded shadow">
          <Image
            src="/KOLLEL6.jpeg"
            alt="Kollel soirée - étude de la Torah"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <p className="text-lg leading-relaxed">
          Le Kollel Meïrim organise un kollel du soir, offrant un cadre chaleureux et studieux pour les membres de la communauté désirant approfondir leurs connaissances de la Torah après leur journée de travail.
          Les sessions sont animées par des enseignants qualifiés et permettent d’étudier dans un esprit d’échange et de croissance spirituelle.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Objectifs du Kollel</h2>
        <div className="text-lg leading-relaxed">
          <ul className="space-y-2 list-disc list-inside">
            <li>Renforcer la connaissance de la Torah chez les adultes de la communauté francophone.</li>
            <li>Créer un lieu d’étude convivial et accessible.</li>
            <li>Encourager l’échange et le débat autour des textes sacrés.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
