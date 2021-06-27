const express = require('express');
const router = express.Router();
const ListingsModel = require("../models/ListingsModel.js");
const authMiddleware = require('../middleware/Authentication.js')

router.get("/", (req, res) => {
    const listings = ListingsModel.getAllListings();
    const locations = ListingsModel.getAllLocations();
    res.render("listings", { listings, locations });
})

// router.get("/list", authMiddleware.isAuthenticated, authMiddleware.isAuthorized, (req, res) => {
//     const listingss = ListingsModel.getAlllistingss()
//     res.render("listingsListing", { listingss });
// })

// router.get("/description", (req, res) => {
//     res.render("listingsDescription");
// })

router.get("/list/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const listing = ListingsModel.getAListing(id);
    const smImages = ListingsModel.getSmImages(id);
    if (listing != undefined) {
        res.render("listingDetails", {
            listing: ListingsModel.getAListing(id),
            smImages: ListingsModel.getSmImages(id)
        })
    } else {
        res.send("404 Page");
    }
})

module.exports = router;