import product from '../models/product.js';

export const createProduct=async(req,res)=>{
    try{
        const {name,price,category,description,qnty,image,userId}=req.body;
        await product.create({
            name,
            price,
            category,
            description,
            qnty,
            image,
            userId
        })
        return res.json({message:"Product added successfully"});
    }
    catch{
        return res.json({message:"Error Product adding"});
    }
}

// export const getProducts = async (req, res) => {
//  try {
//  const { userId } = req.query;
//  if (!userId) {
//  return res.status(400).json({
//  message: "userId is required"
//  });
//  }
//  const products = await Product.find({
//  userId
//  }).sort({ createdAt: -1 });
//  res.json(products);
//  } catch (error) {
//  res.status(500).json({
//  message: error.message
//  });
//  }
// };
// export const getProduct = async (req, res) => {
//  try {
//  const { userId } = req.query;
//  const product = await Product.findOne({
//  _id: req.params.id,
//  userId
//  });
//  if (!product) {
//  return res.status(404).json({
//  message: "Product not found"
//  });
//  }
//  res.json(product);
//  } catch (error) {
//  res.status(500).json({
//  message: error.message
//  });
//  }
// };
// export const updateProduct = async (req, res) => {
//  try {
//  const { userId } = req.body;
//  const product = await Product.findOne({
//  _id: req.params.id,
//  userId
//  });
//  if (!product) {
//  return res.status(404).json({
//  message: "Product not found"
//  });
//  }
//  product.name = req.body.name;
//  product.price = req.body.price;
//  product.category = req.body.category;
//  product.description = req.body.description;
//  product.quantity = req.body.quantity;
//  if (req.file) {
//  product.image = req.file.filename;
//  }
//  await product.save();
//  res.json({
//  message: "Product updated successfully",
//  product
//  });
//  } catch (error) {
//  res.status(500).json({
//  message: error.message
//  });
//  }
// };
// export const deleteProduct = async (req, res) => {
//  try {
//  const { userId } = req.query;
//  const product = await Product.findOne({
//  _id: req.params.id,
//  userId
//  });
//  if (!product) {
//  return res.status(404).json({
//  message: "Product not found"
//  });
//  }
//  await Product.findByIdAndDelete(req.params.id);
//  res.json({
//  message: "Product deleted successfully"
//  });
//  } catch (error) {
//  res.status(500).json({
//  message: error.message
//  });
//  }
// };

