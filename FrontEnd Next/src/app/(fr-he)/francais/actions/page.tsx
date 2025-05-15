// src/app/[lang]/francais/actions/page.tsx
import Image from 'next/image';

export default function Actions() {
    return (
        <main className=" w-[85%] min-h-screen p-6 mx-auto mt-20 space-y-12">
            <h1 className="mb-32 text-4xl font-bold ">Nos actions pour la communauté francophone d'Israël</h1>
            
            <section className="flex flex-col-reverse items-center gap-6 bg-blue-200/50 md:flex-row">
                <div className="md:w-1/2">
                    <h2 className="mb-4 text-2xl font-semibold">Kollel</h2>
                    <p>
                        Nous proposons des cours réguliers et un kollel du soir permettant aux membres de la communauté d'étudier la Torah et de renforcer leurs connaissances.
                    </p>
                </div>
                <div className="relative w-full mb-4 overflow-hidden rounded shadow h-80 md:w-2/3 md:mb-0">
                    <Image
                        src="/KOLLEL5.jpeg"
                        alt="Kollel study session"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
            </section>

            <section className="flex flex-col items-center gap-6 md:flex-row">
                <div className="relative w-full mb-4 overflow-hidden rounded shadow h-80 md:w-2/3 md:mb-0">
                    <Image
                        src="https://images.unsplash.com/photo-1620109177100-fa8753a564c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Aide financière"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="mb-4 text-2xl font-semibold">Aides financières</h2>
                    <p>
                        Kollel Meïrim apporte un soutien financier aux personnes en difficulté au sein de la communauté francophone, afin d’alléger leurs charges et leur permettre de vivre dignement.
                    </p>
                </div>
            </section>

            <section className="flex flex-col-reverse items-center gap-6 md:flex-row bg-blue-200/50">
                <div className="md:w-1/2">
                    <h2 className="mb-4 text-2xl font-semibold">Aides alimentaires</h2>
                    <p>
                        Nous organisons des distributions alimentaires régulières pour venir en aide aux familles dans le besoin et soutenir leur bien-être.
                    </p>
                </div>
                <div className="relative w-full mb-4 overflow-hidden rounded shadow h-80 md:w-2/3 md:mb-0">
                    <Image
                        src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
                        alt="Distribution alimentaire"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </section>
        </main>
    );
}
