import nodemailer from "nodemailer";

export async function POST (req: Request) {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.NEXT_APP_USER_EMAIL!,
            pass: process.env.NEXT_APP_USER_PASSWORD!,
        },
    });

    const mailOption = {
        from: `"${name}" <${process.env.NEXT_APP_USER_EMAIL}>`,
        replyTo: email,
        to: process.env.NEXT_APP_USER_EMAIL,
        subject: `New message from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOption);
        return Response.json({ success: true });
    } catch (error) {
        console.log(error);
        return Response.json({ success: false }, {status: 500});
    }
};


