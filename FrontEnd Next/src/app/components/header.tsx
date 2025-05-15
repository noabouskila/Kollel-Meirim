'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'fr';

  const links = [
    { name: 'Le Kollel', href: `/${lang}/francais/kollel` },
    { name: 'Actions', href: `/${lang}/francais/actions` },
    { name: 'Faire un don', href: `/${lang}/francais/don` },
    { name: 'Contact', href: `/${lang}/francais/contact` },
  ];

  const isActive = (path: string) => pathname === path;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full p-4 text-blue-900 bg-blue-100 shadow sm:p-6">
      <nav className="flex items-center justify-between">
        <Link href={`/${lang}`} className="text-xl italic font-bold sm:text-2xl">
          Kollel Meïirim
        </Link>

        {/* Bouton Burger */}
        <div className="sm:hidden">
          <button
            className="p-2 text-blue-900 bg-blue-200 rounded"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden sm:flex sm:gap-4 sm:text-xl">
          {links.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={isActive(href) ? 'nav-link active' : 'nav-link'}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Volet latéral mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex flex-col w-full h-full p-6 bg-blue-100 sm:hidden"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold text-blue-900"
              >
                ✕
              </button>
            </div>
            <ul className="flex flex-col items-start justify-center flex-1 gap-6 text-xl">
              {links.map(({ name, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={isActive(href) ? 'nav-link active' : 'nav-link'}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
