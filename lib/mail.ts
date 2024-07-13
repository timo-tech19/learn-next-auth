import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

export async function sendVerificationEmail(email: string, token: string) {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verify your email address",
    text: `Please click the following link to verify your email: ${confirmLink}`,
    html: `<p>Please click the following link to verify your email:</p><a href="${confirmLink}">Verify Email</a>`,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    text: `Please click the following link to reset your password: ${resetLink}`,
    html: `<p>Please click the following link to reset your password:</p><a href="${resetLink}">Reset Email</a>`,
  });
}

export async function sendTwoFactorTokenEmail(email: string, token: string) {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "2FA Code",
    text: `Your 2FA code is: ${token}`,
    html: `<p>Your 2FA code is: ${token}</p>`,
  });
}
