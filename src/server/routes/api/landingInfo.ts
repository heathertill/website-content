import { Router } from 'express';
import queries from '../../db';

const router = Router();

router.get('/:id', async (req, res, next) => {
    let id = req.params.id;
    try {
        let [landing] = await queries.LandingInfo.getLandingInfo(id);
        res.json(landing);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/', async (req, res, next) => {
    let body = req.body;
    try {
        let newLandingInfo = await queries.LandingInfo.newLandingInfo(body);
        res.json(newLandingInfo);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/id:', async (req, res, next) => {
    let id = req.params.id;
    let body = req.body;
    console.log('id', id, 'body', body)
    try {
        let editLandingInfo = await queries.LandingInfo.editLandingInfo(body, id);
        res.json(editLandingInfo);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// router.put('/:id', async (req, res, next) => {
//     let id = req.params.id;
//     let body = req.body;
//     try {
//         let editSiteInfo = await queries.SiteInfo.editSiteInfo(body, id)
//         res.json(editSiteInfo)
//     } catch (e) {
//         console.log(e);
//         res.sendStatus(500)
//     }
// })

export default router;