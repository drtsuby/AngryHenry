import { Router, Request, Response } from 'express';
import { QRController } from '../controllers/qrController';

const router = Router();
const qrController = new QRController();

router.post('/generate-qr', qrController.generateQRCode.bind(qrController));
router.post('/generate-qr-text', qrController.generateQRFromString.bind(qrController));
router.get('/export-assets', qrController.exportAssetReport.bind(qrController));
router.get('/export-texts', qrController.exportTextReport.bind(qrController));
router.get('/stats', qrController.getStats.bind(qrController));
router.get('/inventory', qrController.getInventory.bind(qrController));
router.post('/clear-inventory', qrController.clearInventory.bind(qrController));

export default router;
