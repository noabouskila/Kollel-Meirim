'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'fr';

  return (
    <header className="bg-white shadow p-4">
      <nav className="flex justify-between items-center">
        <Link href={`/${lang}`} className="font-bold text-xl">
          Kollel Meïirim
        </Link>
        <ul className="flex gap-4">
          <li><Link href={`/${lang}/francais/kollel`}>Le Kollel</Link></li>
          <li><Link href={`/${lang}/actions`}>Actions</Link></li>
          <li><Link href={`/${lang}/don`}>Faire un don</Link></li>
          <li><Link href={`/${lang}/contact`}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
