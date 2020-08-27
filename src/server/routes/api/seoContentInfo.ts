import { Router } from 'express';
import queries from '../../db';

const router = Router();

router.get('/', async (req, res, next) => {
    let id = req.params.id;
    try {
        let [seoContent] = await queries.SeoContentInfo.getSeoContentInfo(id);
        res.json(seoContent);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/', async (req, res, next) => {
    let body = req.body;
    try {
        let newSeoContent = await queries.SeoContentInfo.newSeoContentInfo(body);
        res.json(newSeoContent);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.put('/:id', async (req, res, next) => {
    let id = req.params.id;
    let body = req.body;
    try {
        let editSeoContent = await queries.SeoContentInfo.editSeoContentInfo(body, id);
        res.json(editSeoContent);
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

export default router;