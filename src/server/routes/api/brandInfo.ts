import { Router } from 'express';
import queries from '../../db';

const router = Router();

router.post('/', async (req, res, next) => {
    let body = req.body;
    try {
        let newBrandInfo = await queries.BrandInfo.newBrandInfo(body);
        console.log('info', newBrandInfo)
        res.json(newBrandInfo);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;