import { Router } from 'express';
import BuildingController from '../controllers/building.controller';

const router = Router();
const module = "building";

router.get(
    '/',
    BuildingController.index
);

// router.get(
//     '/',
//     generalMiddleware.controllerWrapper(
//         TicketController.index,
//         "Error Fetching tickets"
//     )
// );

// router.get(
//     '/:id',
//     generalMiddleware.controllerWrapper(
//         TicketController.get,
//         "Error Fetching ticket"
//     )
// );

// router.put(
//     '/:id',
//     generalMiddleware.controllerWrapper(
//         TicketController.edit,
//         "Error Updating ticket"
//     )
// );

// router.delete(
//     '/:id',
//     generalMiddleware.controllerWrapper(
//         TicketController.edit,
//         "Error Deleting ticket"
//     )
// );



export { module, router }