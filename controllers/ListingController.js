const express = require('express');
const router = express.Router();
const ListingsModel = require("../models/ListingsModel.js");

router.get("/", (req, res) => {
    const listings = ListingsModel.getAllListings();
    const locations = ListingsModel.getAllLocations();
    res.render("listings", { listings, locations });
})

router.get("/list/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const listing = ListingsModel.getAListing(id);
    if (listing != undefined) {
        res.render("listingDetails", {
            listing,
            smImages: ListingsModel.getSmImages(id)
        })
    } else {
        res.render("error");
    }
})

module.exports = router;