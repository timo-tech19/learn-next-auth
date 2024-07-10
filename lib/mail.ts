import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(email: string, token: string) {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verify your email address",
    text: `Please click the following link to verify your email: ${confirmLink}`,
    html: `<p>Please click the following link to verify your email:</p><a href="${confirmLink}">${confirmLink}</a>`,
  });
}
