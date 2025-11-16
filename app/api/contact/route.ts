import nodemailer from "nodemailer";

export async function POST (req: Request) {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.USER_EMAIL!,
            pass: process.env.USER_PASSWORD!,
        },
    });

    const mailOption = {
        from: `"${name}" <${process.env.USER_EMAIL}>`,
        replyTo: email,
        to: process.env.USER_EMAIL,
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


