import nodemailer from "nodemailer"

// Ensure Node.js runtime (Nodemailer is not supported on Edge runtime)
export const runtime = 'nodejs'

export async function POST(req: Request) {
  try {
    const { name, phone, message, email } = await req.json()

    if (!name || !phone || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      )
    }

    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const adminEmail = process.env.ADMIN_EMAIL || smtpUser

    if (!smtpUser || !smtpPass || !adminEmail) {
      return new Response(
        JSON.stringify({ success: false, error: "Email credentials not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      )
    }

    // Gmail transporter (requires App Password)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const html = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h3>New Contact Request</h3>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        ${email ? `<p><b>Email:</b> ${escapeHtml(email)}</p>` : ''}
        <p><b>Phone:</b> ${escapeHtml(phone)}</p>
        <p><b>Message:</b></p>
        <p style="background:#f8f9fa;padding:10px;border-radius:5px;white-space:pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `

    await transporter.sendMail({
      from: `Special Pumps <${smtpUser}>`,
      to: adminEmail,
      subject: `📩 New Message from ${name}`,
      html,
      replyTo: email || undefined,
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error: any) {
    console.error("Mail error:", error)
    return new Response(
      JSON.stringify({ success: false, error: error?.message || "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
}

// Basic HTML escaping to avoid accidental HTML injection in the email body
function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
