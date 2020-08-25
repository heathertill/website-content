import { Router } from 'express';
import queries from '../../db';
import { json } from '../../../client/utils/api';

const router = Router();

router.get('/:id', async (req, res, next) => {
    let id = req.params.id;
    try {
        let [aboutInfo] = await queries.AboutInfo.getAboutInfo(id);
        res.json(aboutInfo);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/', async (req, res, next) => {
    let body = req.body;
    try {
        let newAboutInfo = await queries.AboutInfo.newAboutInfo(body);
        res.json(newAboutInfo);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})


export default router;