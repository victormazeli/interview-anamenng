import { Router } from 'express';
import FileUploadController from '../controllers/fileUpload.controller';
import upload from '../utils/multer'

const router = Router();
const module = "file";

router.post(
    '/',
    upload.single('file'),
    FileUploadController.uploadFile
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