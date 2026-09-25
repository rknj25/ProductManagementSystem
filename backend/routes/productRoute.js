import express from 'express';
import { createProduct} from '../controller/ProductController.js';
import upload from '../middleware/productMiddleware.js';

const router=express.Router();

router.post('/add',upload.single("image"),createProduct);
// router.get("/", getProducts);
// router.get("/:id", getProduct);
// router.put("/:id", upload.single("image"), updateProduct);
// router.delete("/:id", deleteProduct);

export default router;