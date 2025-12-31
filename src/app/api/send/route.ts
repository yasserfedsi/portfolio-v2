import { Resend } from "resend";

export async function POST(req: Request) {
  if (!process.env.NEXT_PUBLIC_RESEND_API_KEY) {
    return Response.json({ error: "NEXT_PUBLIC_RESEND_API_KEY is missing" }, { status: 500 });
  }

  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["fedsi.yasser@gmail.com"],
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: String(err) }, { status: 500 });
  }
}
