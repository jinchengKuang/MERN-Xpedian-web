const ListingsModel = {
    listings: [{
            id: 1,
            title: "Ribeira Charming Duplex",
            location: "Toronto",
            star_rating: 1,
            property_type: "House",
            sm_image: {
                image1: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                image2: "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image3: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image4: "https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image5: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image6: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            lg_image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            price: "80.00",
            details: {
                bedroom: 3,
                living_room: 1,
                bathroom: 2,
                beds: {
                    twin: 1,
                    full: 1,
                    king: 1,
                    sofa_bed: 0
                }
            },
            summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
        }, {
            id: 2,
            title: "Horto flat with small garden",
            location: "Montreal",
            star_rating: 2,
            property_type: "Carbin",
            sm_image: {
                image1: "https://images.pexels.com/photos/279857/pexels-photo-279857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image2: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                image3: "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image4: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image5: "https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image6: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            lg_image: "https://images.pexels.com/photos/2294125/pexels-photo-2294125.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            price: "180.00",
            details: {
                bedroom: 3,
                living_room: 1,
                bathroom: 2,
                beds: {
                    twin: 1,
                    full: 1,
                    king: 1,
                    sofa_bed: 0
                }
            },
            summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
        },
        {
            id: 3,
            title: "Ocean View Waikiki Marina w/prkg",
            location: "Vancouver",
            star_rating: 3,
            property_type: "Cabin",
            sm_image: {
                image1: "https://images.pexels.com/photos/277672/pexels-photo-277672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image2: "https://images.pexels.com/photos/279857/pexels-photo-279857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image3: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                image4: "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image5: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image6: "https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            lg_image: "https://images.pexels.com/photos/673788/pexels-photo-673788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            price: "280.00",
            details: {
                bedroom: 3,
                living_room: 1,
                bathroom: 2,
                beds: {
                    twin: 1,
                    full: 1,
                    king: 1,
                    sofa_bed: 0
                }
            },
            summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
        },
        {
            id: 4,
            title: "Private Room in Bushwick",
            location: "Calgary",
            star_rating: 4,
            property_type: "Room",
            sm_image: {
                image1: "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image2: "https://images.pexels.com/photos/277672/pexels-photo-277672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image3: "https://images.pexels.com/photos/279857/pexels-photo-279857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image4: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                image5: "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image6: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            lg_image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            price: "50.00",
            details: {
                bedroom: 1,
                living_room: 1,
                bathroom: 1,
                beds: {
                    twin: 0,
                    full: 1,
                    king: 0,
                    sofa_bed: 0
                }
            },
            summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
        },
        {
            id: 5,
            title: "Apt Linda Vista Lagoa - Rio",
            location: "London",
            star_rating: 1,
            property_type: "Apartment",
            sm_image: {
                image1: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image2: "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image3: "https://images.pexels.com/photos/277672/pexels-photo-277672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image4: "https://images.pexels.com/photos/279857/pexels-photo-279857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image5: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                image6: "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            lg_image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            price: "380.00",
            details: {
                bedroom: 3,
                living_room: 1,
                bathroom: 2,
                beds: {
                    twin: 1,
                    full: 1,
                    king: 1,
                    sofa_bed: 0
                }
            },
            summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
        },
        {
            id: 6,
            title: "New York City - Upper West Side Apt",
            location: "New York",
            star_rating: 5,
            property_type: "Apartment",
            sm_image: {
                image1: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image2: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image3: "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image4: "https://images.pexels.com/photos/277672/pexels-photo-277672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image5: "https://images.pexels.com/photos/279857/pexels-photo-279857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image6: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            },
            lg_image: "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            price: "480.00",
            details: {
                bedroom: 3,
                living_room: 1,
                bathroom: 2,
                beds: {
                    twin: 1,
                    full: 1,
                    king: 1,
                    sofa_bed: 0
                }
            },
            summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
        },
        {
            id: 7,
            title: "Charming Flat in Downtown",
            location: "Waterloo",
            star_rating: 4,
            property_type: "House",
            sm_image: {
                image1: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image2: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image3: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image4: "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image5: "https://images.pexels.com/photos/277672/pexels-photo-277672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image6: "https://images.pexels.com/photos/279857/pexels-photo-279857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            lg_image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            price: "180.00",
            details: {
                bedroom: 3,
                living_room: 1,
                bathroom: 2,
                beds: {
                    twin: 1,
                    full: 1,
                    king: 1,
                    sofa_bed: 0
                }
            },
            summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
        },
        {
            id: 8,
            title: "Catete's Colonial Big Hause Room B",
            location: "Toronto",
            star_rating: 1,
            property_type: "Room",
            sm_image: {
                image1: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image2: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image3: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image4: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image5: "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image6: "https://images.pexels.com/photos/277672/pexels-photo-277672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            lg_image: "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            price: "80.00",
            details: {
                bedroom: 3,
                living_room: 1,
                bathroom: 2,
                beds: {
                    twin: 1,
                    full: 1,
                    king: 1,
                    sofa_bed: 0
                }
            },
            summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
        },
        {
            id: 9,
            title: "Modern Spacious 1 Bedroom Loft",
            location: "Markham",
            star_rating: 1,
            property_type: "Room",
            sm_image: {
                image1: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image2: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image3: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image4: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image5: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image6: "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            lg_image: "https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            price: "80.00",
            details: {
                bedroom: 3,
                living_room: 1,
                bathroom: 2,
                beds: {
                    twin: 1,
                    full: 1,
                    king: 1,
                    sofa_bed: 0
                }
            },
            summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
        },
        {
            id: 10,
            title: "Deluxe Loft Suite",
            location: "Windsor",
            star_rating: 1,
            property_type: "Room",
            sm_image: {
                image1: "https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image2: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image3: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image4: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image5: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image6: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            lg_image: "https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            price: "80.00",
            details: {
                bedroom: 3,
                living_room: 1,
                bathroom: 2,
                beds: {
                    twin: 1,
                    full: 1,
                    king: 1,
                    sofa_bed: 0
                }
            },
            summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
        },
        {
            id: 11,
            title: "Ligne verte - à 15 min de métro du centre ville",
            location: "Barcelona",
            star_rating: 5,
            property_type: "Apartment",
            sm_image: {
                image1: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image2: "https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image3: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image4: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image5: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image6: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            lg_image: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            price: "180.00",
            details: {
                bedroom: 3,
                living_room: 1,
                bathroom: 2,
                beds: {
                    twin: 1,
                    full: 1,
                    king: 1,
                    sofa_bed: 0
                }
            },
            summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
        },
        {
            id: 12,
            title: "Soho Cozy, Spacious and Convenient",
            location: "Washington",
            star_rating: 2,
            property_type: "Room",
            sm_image: {
                image1: "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image2: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image3: "https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image4: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image5: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                image6: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            lg_image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            price: "180.00",
            details: {
                bedroom: 2,
                living_room: 1,
                bathroom: 1,
                beds: {
                    twin: 0,
                    full: 0,
                    king: 2,
                    sofa_bed: 0
                }
            },
            summary: "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
        }
    ],

    property_types: [{
        property_type: "Room",
        image: "/img/property-type-img/room.jpg",
        numbers: 111
    }, {
        property_type: "House",
        image: "/img/property-type-img/house.jpg",
        numbers: 222
    }, {
        property_type: "Apartment",
        image: "/img/property-type-img/apartment.jpg",
        numbers: 333
    }, {
        property_type: "Cabin",
        image: "/img/property-type-img/cabin.jpg",
        numbers: 444
    }, {
        property_type: "Cottage",
        image: "/img/property-type-img/cottage.jpg",
        numbers: 555
    }, {
        property_type: "Hotel",
        image: "/img/property-type-img/hotel.jpg",
        numbers: 666
    }],

    locations: [{
        location: "Toronto",
        image: "/img/locations-img/toronto.jpg",
        numbers: 111
    }, {
        location: "Montreal",
        image: "/img/locations-img/montreal.jpg",
        numbers: 222
    }, {
        location: "New York",
        image: "/img/locations-img/new_york.jpg",
        numbers: 333
    }, {
        location: "Niagara Falls",
        image: "/img/locations-img/niagara_falls.jpg",
        numbers: 444
    }, {
        location: "London",
        image: "/img/locations-img/london.jpg",
        numbers: 555
    }, {
        location: "Vancouver",
        image: "/img/locations-img/vancouver.jpg",
        numbers: 666
    }],

    contents: [{
            title: "Travel",
            sub_title: "Travel in the world",
            image: "/img/content-img/bus.jpg"
        }, {
            title: "Culture",
            sub_title: "Experience cultures",
            image: "/img/content-img/culture.jpg"
        },
        {
            title: "Yes",
            sub_title: "Yes, we can",
            image: "/img/content-img/yes.jpg"
        }, {
            title: "Wild",
            sub_title: "Enjoy the wild life",
            image: "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }, {
            title: "Deal",
            sub_title: "Explore hot deals",
            image: "https://images.pexels.com/photos/814544/pexels-photo-814544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
    ],

    getAllListings() {
        return this.listings;
    },

    getAListing(id) {
        return this.listings.find(listing => listing.id === id);
    },

    getSmImages(id) {
        const obj = this.listings.find(listing => listing.id === id);
        return obj.sm_image;
    },

    getAllPropertyTypes() {
        return this.property_types;
    },

    getAllLocations() {
        return this.locations;
    },

    getAllContents() {
        return this.contents;
    }
}

module.exports = ListingsModel;