
// src/app/[lang]/francais/don/page.tsx
'use client';

export default function Don() {
  return (
    <main className="min-h-screen p-6 mx-auto mt-20 "   style={{ backgroundImage: "url('/KOLLEL3.jpeg')" }}>

<section className=" w-full md:w-[80%] mx-auto" >

<section className="px-6 py-10 text-center bg-blue-100 rounded-lg shadow-xl">
            <h1 className="mb-4 font-semibold text-blue-900 md:text-5xl">Prenez part à ce projet pour le faire vivre !</h1>
            <hr className="w-1/2 mx-auto mb-4 border-blue-300" />
            <p className="mb-2 font-serif text-blue-800 md:text-4xl">לֹא־יָמוּשׁ סֵפֶר הַתּוֹרָה הַזֶּה מִפִּיךָ...</p>
            <p className="max-w-2xl mx-auto mt-5 italic text-gray-700 md:text-xl">
            &quot;Que ce livre de la Torah ne s’éloigne pas de ta bouche. Médite-le jour et nuit, afin de prendre garde
            d&apos;accomplir tout ce qui y est écrit ; car alors tu réussiras dans tes entreprises, alors tu réussiras.&quot;
            </p>
        </section>
      
    <section className="flex flex-col items-center justify-center px-6 py-10 mt-10 text-center bg-gray-100 rounded-lg shadow-xl">
        <h1 className="mb-6 text-4xl font-bold">Faire un don au Kollel Meïirim</h1>
        <p className="mb-4 text-lg">
            Votre soutien est essentiel pour maintenir et développer nos activités.
            Grâce à vos dons, nous pouvons financer les cours, soutenir les étudiants, et aider les personnes dans le besoin de notre communauté.
        </p>
        <p className="mb-6 text-lg">
            Vous pouvez faire un don sécurisé via notre plateforme en ligne.
        </p>
        <a
            href="https://www.allodons.fr/DIBOUK-HAVERIM"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
        >
            Faire un don
        </a>
    </section>
    
</section>
       
       
    </main>
  );
}
