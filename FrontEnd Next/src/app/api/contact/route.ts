import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmails } from '@/app/lib/sendMail';

export async function POST(req: NextRequest) {
  const { nom, email, message, token } = await req.json();

  // if (!nom || !email || !message || !token) {
    if (!nom || !email || !message ) {
    return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 });
  }



  
  //   // Vérification reCAPTCHA
  //   const recaptchaRes = await fetch(
  //     `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  //     { method: 'POST' }
  //   );
  //   const recaptchaData = await recaptchaRes.json();
  //   if (!recaptchaData.success) {
  //     return NextResponse.json({ error: 'Échec reCAPTCHA' }, { status: 400 });
  //   


  try {
    await sendContactEmails({ nom, email, message });
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}




