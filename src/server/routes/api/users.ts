import { Router } from 'express';
import queries from '../../db';

const router = Router();

router.post('/', async (req, res, next) => {
    let body = req.body;
    try {
        let newUser = await queries.Users.newUser(body);
        res.json(newUser);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res, next) => {
    console.log('user')
    let id = req.params.id;
    try {
        let [user] = await queries.Users.findOneById(id);
        res.json(user);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;