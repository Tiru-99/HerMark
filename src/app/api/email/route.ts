import { NextResponse , NextRequest } from "next/server";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "gmail", // Using Gmail as the service, but you can change it to others (e.g., SendGrid)
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address from .env
      pass: process.env.GMAIL_PASS, // Your Gmail app password from .env
    },
  });

  export async function POST(req: NextRequest){
    try{
        const body = await req.json(); 
        
        const{fullName , email, phoneNumber , manuscriptStatus} = body ; 

        let emailContent = ""
        let subject = ""

        subject = `Connection Request (HerMark) from ${fullName}`;
        emailContent = `
          <h2>HerMark Enquiry</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Manuscript Status:</strong> ${manuscriptStatus}</p>
        `;

        console.log(emailContent);

        const mailOptions = {
            from: `"HerMark Enquiry" <${process.env.GMAIL_USER}>`,
            to: "aayushtirmanwar1234@gmail.com",
            subject: subject,
            html: emailContent,
          };

          console.log("Sending email with options:", mailOptions);

          const info = await transporter.sendMail(mailOptions);
          console.log("Email sent:", info.messageId);
      
          return NextResponse.json({ message: "Email sent successfully", content: emailContent }, { status: 200 });
    }
        catch (error) {
        console.error("Error in API route:", error);
        
        return NextResponse.json({ error: "Failed to send email."}, { status: 500 });
      }
  }