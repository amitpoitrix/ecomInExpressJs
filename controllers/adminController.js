const manageUsers = (req, res) => {
    return res.status(200).json({message: "Admin manages the user"});
}

module.exports = manageUsers;