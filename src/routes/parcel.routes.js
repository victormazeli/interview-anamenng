import { Router } from 'express';
import ParcelController from '../controllers/parcel.controller';

const router = Router();
const module = "parcel";

router.get(
    '/',
    ParcelController.getAllParcels
);

router.get(
    '/getParcel/:id',
    ParcelController.getParcel
);

router.get(
    '/countAllParcel',
    ParcelController.countAllParcel
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