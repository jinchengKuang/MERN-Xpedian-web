const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const middleware1 = require('./middleware/Validation.js')

const generalController = require("./controllers/GeneralController.js");
const listingController = require("./controllers/ListingController.js");
const userController = require("./controllers/UserController.js");

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }))

app.use(middleware1.validateRegForm);
app.use(middleware1.validateLoginForm);
app.use(middleware1.validateAdminForm);

app.use("/", generalController);
app.use("/listings", listingController);
app.use("/user", userController);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
})