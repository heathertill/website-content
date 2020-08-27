import * as express from 'express';

import { checkToken } from '../../utils/routerMiddleware';

import helloRouter from './hello';
import userRouter from './users';
import clientInfoRouter from './clientInfo';
import siteInfoRouter from './siteInfo';
import brandInfoRouter from './brandInfo';
import styleInfoRouter from './styleInfo';
import landingInfoRouter from './landingInfo';
import aboutInfoRouter from './aboutInfo';
import seoContentInfoRouter from './seoContentInfo';
import contactInfoRouter from './contactInfo';

const router = express.Router();

router.use('/hello', helloRouter);
router.use('/users', userRouter);
router.use('/clientInfo', clientInfoRouter);
router.use('/siteInfo', siteInfoRouter);
router.use('/brandInfo', brandInfoRouter);
router.use('/styleInfo', styleInfoRouter);
router.use('/landingInfo', landingInfoRouter);
router.use('/aboutInfo', aboutInfoRouter);
router.use('/seoContentInfo', seoContentInfoRouter);
router.use('/contactInfo', contactInfoRouter);

export default router;