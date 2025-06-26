const getOrders = (req, res) => {
    return res.status(200).json({message: `Orders fetched successfully for user: ${req.user.name}`});
}

module.exports = getOrders;