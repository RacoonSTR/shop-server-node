import express from 'express';
import productsRouter from './product.route';

const router: express.Router = express.Router();

router.use('/products', productsRouter);

export default router;