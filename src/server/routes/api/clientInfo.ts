import { Router } from 'express';
import queries from '../../db';

const router = Router();

router.post('/', async (req, res, next) => {
    let body = req.body;
    try {
        let newClientInfo = await queries.ClientInfo.newClientInfo(body);
        console.log('info', newClientInfo)
        res.json(newClientInfo);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;