const Product = require("./product.model");

const postProduct = async (req, res) => {
    try {
        const newProduct = await Product({...req.body});
        await newProduct.save();
        res.status(200).send({message: "Product posted successfully", product: newProduct})
    } catch (error) {
        console.error("Error creating Product", error);
        res.status(500).send({message: "Failed to create product"})
    }
}

// get all Products
const getAllProducts =  async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1});
        res.status(200).send(products)
        
    } catch (error) {
        console.error("Error fetching products", error);
        res.status(500).send({message: "Failed to fetch products"})
    }
}

const getSingleProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product =  await Product.findById(id);
        if(!product){
            res.status(404).send({message: "Product not Found!"})
        }
        res.status(200).send(product)
        
    } catch (error) {
        console.error("Error fetching product", error);
        res.status(500).send({message: "Failed to fetch product"})
    }

}

// update Product data
const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedProduct =  await Product.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatedProduct) {
            res.status(404).send({message: "Product not Found!"})
        }
        res.status(200).send({
            message: "Product updated successfully",
            product: updatedProduct
        })
    } catch (error) {
        console.error("Error updating product", error);
        res.status(500).send({message: "Failed to update product"})
    }
}

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedProduct =  await Product.findByIdAndDelete(id);
        if(!deletedProduct) {
            res.status(404).send({message: "Product not Found!"})
        }
        res.status(200).send({
            message: "Product deleted successfully",
            product: deletedProduct
        })
    } catch (error) {
        console.error("Error deleting product", error);
        res.status(500).send({message: "Failed to delete product"})
    }
};

module.exports = {
    postProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}