import { Router, Request, Response } from 'express';
import { QRController } from '../controllers/qrController';

const router = Router();
const qrController = new QRController();

export function setQRRoutes(app: Router) {
    app.post('/generate-qr', qrController.generateQRCode.bind(qrController));
    app.post('/generate-qr-text', qrController.generateQRFromString.bind(qrController));
    app.get('/export-assets', qrController.exportAssetReport.bind(qrController));
    app.get('/export-texts', qrController.exportTextReport.bind(qrController));
    app.get('/stats', qrController.getStats.bind(qrController));
    app.get('/inventory', qrController.getInventory.bind(qrController));
    app.post('/clear-inventory', qrController.clearInventory.bind(qrController));
    app.get('/health', (req: Request, res: Response) => {
        res.json({ status: 'OK', message: 'QR Inventory App is running!' });
    });
}