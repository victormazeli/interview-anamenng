import { Router } from 'express';
import BuildingUnitController from '../controllers/buildingUnit.controller';

const router = Router();
const module = "unit";

router.get(
    '/',
    BuildingUnitController.index
);

router.get(
    '/:id',
    BuildingUnitController.get
);

router.get(
    '/total',
    BuildingUnitController.getTotalBuildingUnit
);

router.get(
    '/building/:id',
    BuildingUnitController.getAllBuildingUnitByBuilding
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