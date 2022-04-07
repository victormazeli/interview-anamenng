import { Router } from 'express';
import OccupantController from '../controllers/occupant.controller';

const router = Router();
const module = "occupant";

router.get(
    '/',
    OccupantController.index
);

router.get(
    '/:id',
    OccupantController.get
);

router.get(
    '/total',
    OccupantController.getTotalOccupant
);

router.get(
    '/unit/:id',
    OccupantController.getOccupantByBuilding
);



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