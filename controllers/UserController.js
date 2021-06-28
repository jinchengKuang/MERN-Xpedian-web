const express = require('express')
const router = express.Router()
const sgMail = require('@sendgrid/mail')
const validationMiddleware = require('../middleware/Validation.js')

router.get("/", (req, res) => {
    res.render("reg")
})

router.get("/dashboard", (req, res) => {
    res.render("dashboard")
})



router.get("/registration", (req, res) => {
    res.render("reg");
})

router.post("/registration", validationMiddleware.validateRegForm, (req, res) => {
    res.redirect("dashboard");

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: req.body.email, // Change to your recipient
        from: 'jinchengkuang@gmail.com', // Change to your verified sender
        subject: 'Welcome to Xpedian',
        text: 'Thanks for registering your account on Xpedian',
        html: '<strong>Thanks for registering your account on Xpedian</strong>',
    }
    sgMail
        .send(msg)
        .then(() => {
            res.redirect("dashboard");

        })
        .catch((error) => {
            res.redirect("error");
        })
})

router.get("error", (req, res) => {
    res.render("error");
})

router.get("/login", (req, res) => {
    res.render("login");
})

router.post("/login", validationMiddleware.validateLoginForm, (req, res) => {
    res.redirect("dashboard");
})

module.exports = router;