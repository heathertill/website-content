import { Router } from 'express';
import queries from '../../db';

const router = Router();

router.post('/', async (req, res, next) => {
    console.log('siteInfo')
    let body = req.body;
    try {
        let newSiteInfo = await queries.SiteInfo.newSiteInfo(body);
        console.log('info', newSiteInfo)
        res.json(newSiteInfo);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;