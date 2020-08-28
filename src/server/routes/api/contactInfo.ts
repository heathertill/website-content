import { Router } from 'express';
import queries from '../../db';

const router = Router();

router.get('/:id', async (req, res, next) => {
    let id = req.params.id;
    try {
        const [getContactInfo] = await queries.ContactInfo.getContactInfo(id);
        res.json(getContactInfo);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/', async (req, res, next) => {
    let body = req.body;
    try {
        const newContactInfo = await queries.ContactInfo.newContactInfo(body);
        res.json(newContactInfo);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res, next) => {
    let id = req.params.id;
    let body = req.body;
    try {
        let editContactInfo = await queries.ContactInfo.editContactInfo(body, id);
        res.json(editContactInfo);
    } catch (e) {
        console.log(e)
    }
});


export default router;