import { Playfair_Display } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'], // ou selon tes besoins
  variable: '--font-playfair',
});
