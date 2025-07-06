/// <reference path="../../qrcode.d.ts" />
import QRCode from 'qrcode';
import { Asset } from '../models/asset';

export class QRService {
    async createQRCode(asset: Asset): Promise<string> {
        try {
            // Create a JSON string with asset details for the QR code
            const assetData = JSON.stringify(asset.getAssetDetails());
            const qrCodeUrl = await QRCode.toDataURL(assetData);
            return qrCodeUrl;
        } catch (error: any) {
            throw new Error('Failed to generate QR code: ' + error.message);
        }
    }

    async createQRCodeFromString(data: string): Promise<string> {
        try {
            const qrCodeUrl = await QRCode.toDataURL(data);
            return qrCodeUrl;
        } catch (error: any) {
            throw new Error('Failed to generate QR code: ' + error.message);
        }
    }
}