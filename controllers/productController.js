const createProduct = (req, res) => {
    return res.status(201).json({message: "Product created successfully"});
}

const deleteProduct = (req, res) => {
    return res.status(200).json({message: "Product deleted successfully"});
}

module.exports = {
    createProduct,
    deleteProduct
}