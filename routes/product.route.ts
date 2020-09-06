import ProductController from '../controllers/product.controller';
import express from 'express';
const router: express.Router = express.Router();

router.post('/', async (req, res) => {
    await ProductController
        .create({
            categoryId: req.body.firstName,
            title: req.body.lastName,
            specs: req.body.email
        }).then(product => {
            return res.send({ product });
        }).catch(error => {
            return res.status(500).send({ error });
        });
});

router.get('/', async (req, res) => {
    await ProductController
        .getAll()
        .then(products => {
            return res.send({ products });
        }).catch(error => {
            return res.status(500).send({ error });
        });;

});

router.get('/:productId', async (req, res) => {
    await ProductController
        .getById(req.params.productId)
        .then(product => {
            return res.send({ product });
        }).catch(error => {
            return res.status(500).send({ error });
        });
});

router.delete('/:productId', async (req, res) => {
    await ProductController
        .deleteById(req.params.productId)
        .then(product => {
            return res.send({ product });
        }).catch(error => {
            return res.status(500).send({ error });
        });
});

export default router;