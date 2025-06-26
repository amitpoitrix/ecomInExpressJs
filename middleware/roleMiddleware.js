const { roles } = require("../utils/roles");

/* Here we're using currying which helps in dynamic generation of middleware to check role based permissions */
const authorise = (permission) => {
    return (req, res, next) => {
        const userRole = req.user.role; // this comes from previous authMiddleware
        const isAllowed = roles[userRole].includes(permission);

        if(!isAllowed) {
            return res.status(403).json({message: "Access Denied"});
        }

        next();
    }
}

module.exports = authorise;