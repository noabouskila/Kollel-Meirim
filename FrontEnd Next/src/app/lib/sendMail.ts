import nodemailer from 'nodemailer';

export async function sendContactEmails({ nom, email, message }: { nom: string; email: string; message: string }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  });

  // Email reçu par toi
  await transporter.sendMail({
    from: `"${nom}" <${email}>`,
    to: process.env.EMAIL_TO!,
    subject: 'Nouveau message de contact',
    html: `
      <h2>Nouveau message</h2>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Message :</strong><br/>${message}</p>
    `,
  });

  // Réponse automatique à l'utilisateur
  await transporter.sendMail({
    from: `"Kollel Meïirim" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Votre message a bien été reçu',
    html: `
      <div style="font-family:Arial,sans-serif; background-color:#f9f9f9; padding:20px; border-radius:8px;">
        <h2 style="color:#2c3e50;">Shalom ${nom},</h2>
        <p>Nous avons bien reçu votre message :</p>
        <blockquote style="background:#fff; padding:15px; border-left:4px solid #3498db;">${message}</blockquote>
        <p>Notre équipe vous répondra rapidement.</p>
        <br/>
        <p style="color:#888;">– L’équipe de Kollel Meïirim</p>
      </div>
    `,
  });
}
