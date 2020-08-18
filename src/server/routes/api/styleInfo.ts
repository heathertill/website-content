import { Router } from 'express';
import queries from '../../db';

const router = Router();

router.post('/', async (req, res, next) => {
    let body = req.body;
    try {
        let newStyleInfo = await queries.StyleInfo.newStyleInfo(body);
        console.log('test from style api')
        res.json(newStyleInfo)
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})



export default router