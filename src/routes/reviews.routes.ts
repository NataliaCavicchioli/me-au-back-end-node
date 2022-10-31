import { authUser } from '../middlewares/authUser.middleware';
import { validateReviewCreate } from '../middlewares/validateReviewCreate.middleware';
import { Router } from 'express';
import reviewCreateController from '../controllers/reviews/reviewCreate.controller';
import reviewGetController from '../controllers/reviews/reviewGet.controller';

const routes = Router();

routes.post('', authUser, validateReviewCreate, reviewCreateController);

routes.get('', reviewGetController);

export default routes;
