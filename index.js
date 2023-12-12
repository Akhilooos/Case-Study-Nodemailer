require('dotenv').config(); 
const nodemailer = require('nodemailer');

const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

const message = {
    from: process.env.EMAIL_USER,
    to: process.env.TO_EMAIL,
    subject: "Nodemailer Testing",
    text: "Hi from Satheesan"
};
mailTransporter.sendMail(message, (err, info) => {
    if (err) {
        console.error(`Error Occurred: ${err.message}`);
    } else {
        console.log("Email has been sent");
        console.log("Message ID:", info.messageId);
        console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
        res.status(200).json({ message: "Email sent successfully" }); 
    }
});