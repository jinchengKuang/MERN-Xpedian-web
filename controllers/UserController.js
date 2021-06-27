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

router.post("/registration", validationMiddleware.validateRegForm, (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: req.body.email, // Change to your recipient
        from: 'jinchengkuang@gmail.com', // Change to your verified sender
        subject: `Hi ${req.body.firstName}, welcome to Xpedian`,
        text: 'Thanks for registering your account on Xpedian',
        html: `<strong>Hi ${req.body.firstName}, <br>Thanks for registering your account on Xpedian</strong>`,
    }
    sgMail
        .send(msg)
        .then(() => {
            res.redirect("dashboard");
        })
        .catch((error) => {
            console.error(error)
        })
})

// router.post("/registration", (req, res) => {
//     const userInput = req.body;
//     const errors = [];

//     if (req.body.firstName == "") {
//         errors.push("Please enter a first name");
//     }
//     if (req.body.lastName == "") {
//         errors.push("Please enter a last name");
//     }
//     if (req.body.email == "") {
//         errors.push("Please enter a email");
//     }
//     if (req.body.password == "") {
//         errors.push("Please enter a password");
//     }
//     if (req.body.confirmPassword == "") {
//         errors.push("Please enter a confirm password");
//     } else if (req.body.confirmPassword !== req.body.password) {
//         errors.push("Confirm password does not match");
//     }

//     // validate email
//     const regEmail = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
//     if (!regEmail.test(req.body.email)) {
//         errors.push("Please enter a correct email");
//     }

//     // validate password
//     const passwordLength = req.body.confirmPassword.length;
//     if (passwordLength < 6 || passwordLength > 12) {
//         errors.push("Password length must between 6 and 12");
//     }
//     const regNum = /(?=.*\d)/;
//     if (!regNum.test(req.body.confirmPassword)) {
//         errors.push("Password must have numbers");
//     }
//     const regUpper = /(?=.*[A-Z])/;
//     if (!regUpper.test(req.body.confirmPassword)) {
//         errors.push("Password must have upper case characters");
//     }
//     const regLower = /(?=.*[a-z])/;
//     if (!regLower.test(req.body.confirmPassword)) {
//         errors.push("Password must have lower case characters");
//     }

//     if (errors.length > 0) {
//         res.render("reg", { errors, userInput })
//     } else {
//         sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//         const msg = {
//             to: req.body.email, // Change to your recipient
//             from: 'jinchengkuang@gmail.com', // Change to your verified sender
//             subject: 'Welcome to Xpedian',
//             text: 'Thanks for registering your account on Xpedian',
//             html: '<strong>Thanks for registering your account on Xpedian</strong>',
//         }
//         sgMail
//             .send(msg)
//             .then(() => {
//                 res.redirect("dashboard");
//             })
//             .catch((error) => {
//                 console.error(error)
//             })
//     }
// })

router.post("/login", validationMiddleware.validateLoginForm, (req, res) => {
    // const userInput = req.body;
    // const errors = [];
    // if (req.body.email == "") {
    //     errors.push("Please enter your email");
    // }
    // if (req.body.password == "") {
    //     errors.push("Please enter your password");
    // }
    // if (errors.length > 0) {
    //     res.render("login", { errors, userInput });
    // } else {
    //     res.redirect("dashboard");
    // }
    res.redirect("dashboard");
})

router.get("/registration", (req, res) => {
    res.render("reg");
})

router.get("/login", (req, res) => {
    res.render("login");
})

module.exports = router;