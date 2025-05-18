'use client';

import { useState } from 'react';
// import Recaptcha from './Recaptcha';

export default function ContactForm() {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    
    try {
    //   const token = (window as any).grecaptcha.getResponse();
    //   if (!token) throw new Error('reCAPTCHA non validé');

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // 'Access-Control-Allow-Origin': '*',
        // body: JSON.stringify({ ...formData, token }),
        body: JSON.stringify({ ...formData }),
      });

      if (!res.ok) throw new Error('Erreur');
      setStatus('success');
      setFormData({ nom: '', email: '', message: '' });
    //   (window as any).grecaptcha.reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
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
            className="px-4 py-2 m-6 text-white bg-blue-600 rounded hover:bg-blue-300/50 disabled:opacity-50"
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
  );
}
