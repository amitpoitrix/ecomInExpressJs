const { users } = require("../utils/roles");

const authenticate = (req, res, next) => {
    const userId = parseInt(req.header('x-user-id'));

    const user = users.find((user) => user.id === userId);

    if(!user) {
        return res.status(401).json({message: "Unauthorised"});
    }

    req.user = user;
    next();
}

module.exports = authenticate;