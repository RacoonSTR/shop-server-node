import CategoryController from '../controllers/category.controller';
import express from 'express';
const router: express.Router = express.Router();

router.post('/', async (req, res) => {
    await CategoryController
        .create({
            title: req.body.title,
            specs: req.body.specs
        }).then(category => {
            return res.send({ category });
        }).catch(error => {
            return res.status(500).send({ error });
        });
});

router.get('/', async (req, res) => {
    await CategoryController
        .getAll()
        .then(category => {
            return res.send({ category });
        }).catch(error => {
            return res.status(500).send({ error });
        });;

});

router.get('/:categoryId', async (req, res) => {
    await CategoryController
        .getById(req.params.categoryId)
        .then(category => {
            return res.send({ category });
        }).catch(error => {
            return res.status(500).send({ error });
        });
});

router.delete('/:categoryId', async (req, res) => {
    await CategoryController
        .deleteById(req.params.categoryId)
        .then(category => {
            return res.send({ category });
        }).catch(error => {
            return res.status(500).send({ error });
        });
});

export default router;