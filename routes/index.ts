import express from 'express';
import productsRouter from './product.route';
import categoryRouter from './category.route';

const router: express.Router = express.Router();

router.use('/products', productsRouter);
router.use('/category', categoryRouter);

export default router;