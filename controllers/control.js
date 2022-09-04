const db = require("../models");

const Product = db.products;


// get all products
const getAllProducts = async (req, res) => {
    let products = await Product.findAll({
        attributes: ['id', 'title', 'data'],
    }
    );
    res.status(200).send(products);
}


// get product by id
const getProductById = async (req, res) => {
    let id = req.params.id;
    let product = await Product.findOne({
        attributes: ['id', 'title', 'data'],
        where: { id: id },
    });
    res.status(200).send(product);
}

//update product by id
const updateProductById = async (req, res) => {
    let id = req.params.id;
    let product = await Product.update({
        title: req.body.title,
        market: req.body.market,
        topic: req.body.topic,
    }, {
        where: { id: id },
    });
    res.status(200).send(product);
}

//delete product by id
const deleteProductById = async (req, res) => {
    let id = req.params.id;
    let product = await Product.destroy({
        where: { id: id },
    });
    res.status(200).send("product deleted");
}

//pick random id from db if is_annotated == 0 and get products by that id
const pickRandomId = async (req, res) => {
    let id = await Product.findAll({
        attributes: ['id'],
        where: { is_annotated: 0 },
    });
    let randomId = id[Math.floor(Math.random() * id.length)];
    let product = await Product.findOne({
        attributes: ['id', 'title', 'data'],
        where: { id: randomId.id },
    });
    res.status(200).send(product);
}



module.exports = {
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
    pickRandomId,
}