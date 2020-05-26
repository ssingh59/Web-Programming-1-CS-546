const usersData = require('./users');

let usersRoutes = (app) => {
    app.use("/", usersData);
};
module.exports = {
    users: require("./users")
};