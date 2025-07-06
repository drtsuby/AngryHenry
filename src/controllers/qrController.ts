import { Request, Response } from 'express';
import { QRService } from '../services/qrService';
import { ExcelService } from '../services/excelService';
import { StorageService } from '../services/storageService';
import { Asset } from '../models/asset';

export class QRController {
    private qrService: QRService;
    private excelService: ExcelService;
    private storageService: StorageService;

    constructor() {
        this.qrService = new QRService();
        this.excelService = new ExcelService();
        this.storageService = new StorageService();
    }

    public async generateQRCode(req: Request, res: Response): Promise<void> {
        try {
            const assetData = req.body;
            const generatedId = this.storageService.generateAssetId();
            const asset = new Asset(generatedId, assetData.name, assetData.manufacturer, assetData.size, assetData.description);
            const qrCode = await this.qrService.createQRCode(asset);
            
            // Store the QR code data for Excel export
            this.storageService.addAssetQRCode({
                id: asset.id,
                name: asset.name,
                manufacturer: asset.manufacturer,
                size: asset.size,
                description: asset.description,
                qrCodeData: JSON.stringify(asset.getAssetDetails()),
                generatedAt: new Date()
            });
            
            res.json({ qrCode, asset: asset.getAssetDetails() });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    public async generateQRFromString(req: Request, res: Response): Promise<void> {
        try {
            const { text } = req.body;
            if (!text) {
                res.status(400).json({ error: 'Text is required' });
                return;
            }
            const qrCode = await this.qrService.createQRCodeFromString(text);
            
            // Store the QR code data for Excel export
            this.storageService.addTextQRCode({
                text,
                qrCodeData: text,
                generatedAt: new Date()
            });
            
            res.json({ qrCode, text });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    public async exportAssetReport(req: Request, res: Response): Promise<void> {
        try {
            const assets = this.storageService.getAllAssetQRCodes();
            
            if (assets.length === 0) {
                res.status(404).json({ error: 'No asset QR codes found to export' });
                return;
            }

            const buffer = await this.excelService.generateInventoryReport(assets);
            
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename="paint-inventory-report.xlsx"');
            res.send(buffer);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    public async exportTextReport(req: Request, res: Response): Promise<void> {
        try {
            const textEntries = this.storageService.getAllTextQRCodes();
            
            if (textEntries.length === 0) {
                res.status(404).json({ error: 'No text QR codes found to export' });
                return;
            }

            const buffer = await this.excelService.generateQRCodeList(textEntries);
            
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename="qr-text-report.xlsx"');
            res.send(buffer);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getStats(req: Request, res: Response): Promise<void> {
        try {
            const stats = {
                assetCount: this.storageService.getAssetCount(),
                textCount: this.storageService.getTextCount(),
                totalCount: this.storageService.getAssetCount() + this.storageService.getTextCount()
            };
            res.json(stats);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    public async getInventory(req: Request, res: Response): Promise<void> {
        try {
            const inventory = this.storageService.getAllAssetQRCodes();
            res.json(inventory);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    public async clearInventory(req: Request, res: Response): Promise<void> {
        try {
            this.storageService.clearAssetQRCodes();
            res.json({ message: 'Inventory cleared successfully' });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}