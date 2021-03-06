const express = require('express');
const router = express.Router();
const ListingsModel = require("../models/ListingsModel.js");

router.get("/", (req, res) => {
    const propertyTypes = ListingsModel.getAllPropertyTypes();
    const locations = ListingsModel.getAllLocations();
    const contents = ListingsModel.getAllContents();
    res.render("home", { propertyTypes, locations, contents });
})

module.exports = router;