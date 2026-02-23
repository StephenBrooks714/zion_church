const ContactInfo = require("../models/ContactForm");
const nodemailer = require('nodemailer');
require("dotenv").config()

const newContactPage = async (req, res) => {
    const contactUser = await ContactInfo.find().sort({ _id: -1 }).limit(10);
    res.render("newContact", {
        title: "Contact Upload page",
        contactUser
    })
}

const storeContact = async (req, res) => {
    await ContactInfo.create({
        ...req.body,
        userid: req.session.userId
    })
    res.redirect('/')
}

const deleteContact = async (req, res) => {
    const id = req.params.id;
    await ContactInfo.findByIdAndDelete(id);
    res.redirect("/");
}

const sendEmail = async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        host: "smtp.gmail.com",
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        },
        tls : { rejectUnauthorized: false },
        secure: true,
    });

    const contact = await ContactInfo.find({}).limit(1).sort({ _id: -1 });

    const {from} = req.body
    const path = require("path");
    const mailDetails = {
        to: `${contact[0].email}`,
        from: from,
        envelope: {
            from: 'from', // used as MAIL FROM: address for SMTP
            to: `${contact[0].email}, Mailer <${contact[0].email}>`
        },
        replyTo: from,
        subject: "You got mail",
        headers: {
            'Web Express': 'high'
        },
        date: new Date('2000-01-01 00:00:00'),
        html: `<p>${req.body.message}</p> <p>${req.body.phones}</p> <h5>Sent From: ${req.body.name}, ${from}</h5>`,
    };
    await transporter.sendMail(mailDetails, function(err, info) {
        if(err) {
            console.log(err);
        } else {
            // send alert saying message sent in #response
            console.log(info);
            res.redirect("/");
        }
    });
}

module.exports = {
    sendEmail,
    deleteContact,
    storeContact,
    newContactPage
}