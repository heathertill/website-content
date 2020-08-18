import { Router } from 'express';
import queries from '../../db';

const router = Router();

router.get('/:id', async (req, res, next) => {
    let id = req.params.id;
    try {
        let [client] = await queries.ClientInfo.oneClient(id);
        res.json(client)
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

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

router.put('/:id', async (req, res, next) => {
    let id = req.params.id;
    let body = req.body
    try {
        let editClientInfo = await queries.ClientInfo.editClient(body, id)
        res.json(editClientInfo)
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

export default router;