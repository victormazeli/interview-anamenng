import { Router } from 'express';
import OwnerController from '../controllers/owner.controller';

const router = Router();
const module = "owner";

router.get(
    '/',
    OwnerController.getAllOwners
);

router.get(
    '/getOwner/:id',
    OwnerController.getOwner
);

router.get(
    '/getParcelByOwner/:id',
    OwnerController.getParcelByOwner
);

router.get(
    '/countAllOwner',
    OwnerController.countAllOwner
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