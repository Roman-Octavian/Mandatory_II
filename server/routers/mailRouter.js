import nodemailer from "nodemailer"
import { Router } from "express"
import dotenv from 'dotenv'
dotenv.config(); 

const router = Router();

router.post('/contact', async (req, res) => {
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "school.octavian@gmail.com",
                pass: process.env.NODEMAILER_PASSWORD,
            }
        });
        
        let info = await transporter.sendMail({
            from: `${req.body.email}`,
            to: 'school.octavian@gmail.com',
            subject: `${req.body.subject}`,
            text: `${req.body.text}`, 
        });

        res.status(200).send({ message: `Email sent` });
    } catch (error) {
        res.status(500).send(`Error: ${error}`);
    }
});

export default router;