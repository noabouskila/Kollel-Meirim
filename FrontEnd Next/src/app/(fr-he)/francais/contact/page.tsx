// src/app/[lang]/francais/contact/page.tsx
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Ici tu peux appeler une API Next.js (route API) pour envoyer le message
      // Exemple: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

      // Simuler envoi réussi après 1.5s
      await new Promise((res) => setTimeout(res, 1500));
      setStatus('success');
      setFormData({ nom: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

return (
    <main
        className="p-6 mx-auto mt-20 bg-center bg-cover mifull n-h-screen w-max-w-xl "
        style={{ backgroundImage: "url('/KOLLEL5.jpeg')" }}
    >
        <h1 className="mb-10 text-6xl font-extrabold text-center text-white drop-shadow-lg">
            Contactez-nous
        </h1>

        <form
            onSubmit={handleSubmit}
            className="w-[80%] lg:w-[40%] mx-auto  gap-4 p-6 bg-white rounded-lg shadow-lg  lex-col wflex bg-opacity-90"
        >
            <label className="flex flex-col">
                <span className="mb-1 font-semibold">Nom</span>
                <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </label>

            <label className="flex flex-col">
                <span className="mb-1 font-semibold">Email</span>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </label>

            <label className="flex flex-col">
                <span className="mb-1 font-semibold">Message</span>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </label>

            <div className="flex justify-center">
                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="px-4 py-2 m-6 text-white rounded bg-blue-600/50 hover:bg-blue-300/50 disabled:opacity-50"
                >
                    {status === 'sending' ? 'Envoi...' : 'Envoyer'}
                </button>
            </div>

            {status === 'success' && (
                <p className="mt-2 text-green-600">Message envoyé avec succès !</p>
            )}
            {status === 'error' && (
                <p className="mt-2 text-red-600">Erreur lors de l'envoi. Veuillez réessayer.</p>
            )}
        </form>
    </main>
);
}
