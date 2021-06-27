const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.render("reg")
})

router.post("/registration", (req, res) => {
    const errors = [];
    if (req.body.firstName == "") {
        errors.push("please enter a first name");
    }

    if (errors.length > 0) {
        res.render("reg", { errors })
    } else {
        res.redirect("/");
    }
})

router.post("/login", (req, res) => {
    if (req.body.email == "") {

    }
    if (req.body.password == "") {

    }
})

router.get("/registration", (req, res) => {
    res.render("reg");
})

router.get("/login", (req, res) => {
    res.render("login");
})

module.exports = router;