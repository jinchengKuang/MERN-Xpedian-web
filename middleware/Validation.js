exports.validateLoginForm = (req, res, next) => {
    const userInput = req.body;
    const errors = [];

    // validate login form
    if (req.body.email == "") {
        errors.push("Please enter your email");
    }
    if (req.body.password == "") {
        errors.push("Please enter your password");
    }

    if (errors.length > 0) {
        res.render("login", { errors, userInput })
    } else {
        next();
    }
};

exports.validateRegForm = (req, res, next) => {
    const userInput = req.body;
    const errors = [];

    if (req.body.firstName == "") {
        errors.push("Please enter a first name");
    }
    if (req.body.lastName == "") {
        errors.push("Please enter a last name");
    }
    if (req.body.email == "") {
        errors.push("Please enter a email");
    }
    if (req.body.password == "") {
        errors.push("Please enter a password");
    }

    if (req.body.confirmPassword == "") {
        errors.push("Please enter a confirm password");
    } else if (req.body.confirmPassword !== req.body.password) {
        errors.push("Confirm password does not match");
    }

    // validate email
    const regEmail = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
    if (!regEmail.test(req.body.email)) {
        errors.push("Please enter a correct email");
    }

    // validate password
    const passwordLength = req.body.confirmPassword.length;
    if (passwordLength < 6 || passwordLength > 12) {
        errors.push("Password length must between 6 and 12");
    }
    const regNum = /(?=.*\d)/;
    if (!regNum.test(req.body.confirmPassword)) {
        errors.push("Password must have numbers");
    }
    const regUpper = /(?=.*[A-Z])/;
    if (!regUpper.test(req.body.confirmPassword)) {
        errors.push("Password must have upper case characters");
    }
    const regLower = /(?=.*[a-z])/;
    if (!regLower.test(req.body.confirmPassword)) {
        errors.push("Password must have lower case characters");
    }

    if (errors.length > 0) {
        res.render("reg", { errors, userInput })
    } else {
        next();
    }
};