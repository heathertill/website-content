import { Router } from 'express';
import queries from '../../db';

const router = Router();

router.get('/:id', async (req, res, next) => {
    let id = req.params.id;
    try {
        let [brandInfo] = await queries.BrandInfo.getBrandInfo(id);
        res.json(brandInfo)
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.post('/', async (req, res, next) => {
    let body = req.body;
    try {
        let newBrandInfo = await queries.BrandInfo.newBrandInfo(body);
        res.json(newBrandInfo);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res, next) => {
    let id = req.params.id;
    let body = req.body;
    try {
        let editBrandInfo = await queries.BrandInfo.editBrandInfo(body, id);
        res.json(editBrandInfo)
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;