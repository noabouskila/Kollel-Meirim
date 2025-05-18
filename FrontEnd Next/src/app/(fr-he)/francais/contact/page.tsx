
import ContactForm from '@/app/components/ContactForm';


export default function Contact() {
 

    return (
        <main
            className="p-6 mx-auto mt-20 bg-center bg-cover mifull n-h-screen w-max-w-xl "
            style={{ backgroundImage: "url('/KOLLEL5.jpeg')" }}
        >
            <h1 className="mb-10 text-6xl font-extrabold text-center text-white drop-shadow-lg">
                Contactez-nous
            </h1>

            <ContactForm />
            

        
        </main>
    );
}
