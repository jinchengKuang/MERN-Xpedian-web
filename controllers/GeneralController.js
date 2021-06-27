const express = require('express');
const router = express.Router();
const ListingsModel = require("../models/ListingsModel.js");

router.get("/", (req, res) => {

    // const featuredProducts = ListingsModel.getFeaturedProducts();

    // res.render("home", {
    //     featuredProducts
    // });
    const propertyTypes = ListingsModel.getAllPropertyTypes();
    const locations = ListingsModel.getAllLocations();
    const contents = ListingsModel.getAllContents();
    res.render("home", { propertyTypes, locations, contents });
})

router.get("/about-us", (req, res) => {
    res.render("about");
})

module.exports = router;