import { QRCodeEntry } from './excelService';

export interface TextQRCodeEntry {
    text: string;
    qrCodeData: string;
    generatedAt: Date;
}

export class StorageService {
    private assetQRCodes: QRCodeEntry[] = [];
    private textQRCodes: TextQRCodeEntry[] = [];
    private nextAssetId: number = 1;

    addAssetQRCode(asset: QRCodeEntry): void {
        this.assetQRCodes.push(asset);
    }

    generateAssetId(): string {
        const id = `PAINT-${this.nextAssetId.toString().padStart(3, '0')}`;
        this.nextAssetId++;
        return id;
    }

    addTextQRCode(entry: TextQRCodeEntry): void {
        this.textQRCodes.push(entry);
    }

    getAllAssetQRCodes(): QRCodeEntry[] {
        return [...this.assetQRCodes];
    }

    getAllTextQRCodes(): TextQRCodeEntry[] {
        return [...this.textQRCodes];
    }

    clearAssetQRCodes(): void {
        this.assetQRCodes = [];
    }

    clearTextQRCodes(): void {
        this.textQRCodes = [];
    }

    getAssetCount(): number {
        return this.assetQRCodes.length;
    }

    getTextCount(): number {
        return this.textQRCodes.length;
    }
} 