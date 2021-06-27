exports.isAuthenticated = (req, res, next) => {
    const isAuthenticated = false;
    if (isAuthenticated) {
        next();
    } else {
        res.render("error");
    }
};

exports.isAuthorized = (req, res, next) => {
    const isAuthorized = false;
    if (isAuthorized) {
        console.log(`authorized`);
        next();
    } else {
        res.render("error");
    }
}