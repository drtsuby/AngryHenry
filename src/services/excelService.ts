import ExcelJS from 'exceljs';
import { Asset } from '../models/asset';

export interface QRCodeEntry {
    id: string;
    name: string;
    manufacturer: string;
    size: string;
    description: string;
    qrCodeData: string;
    generatedAt: Date;
}

export class ExcelService {
    async generateInventoryReport(assets: QRCodeEntry[]): Promise<Buffer> {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Paint Inventory Report');

        // Set up headers
        worksheet.columns = [
            { header: 'Paint ID', key: 'id', width: 15 },
            { header: 'Paint Name', key: 'name', width: 25 },
            { header: 'Manufacturer', key: 'manufacturer', width: 20 },
            { header: 'Size', key: 'size', width: 18 },
            { header: 'Description', key: 'description', width: 35 },
            { header: 'QR Code Data', key: 'qrCodeData', width: 50 },
            { header: 'Added Date', key: 'generatedAt', width: 20 }
        ];

        // Style the header row
        const headerRow = worksheet.getRow(1);
        headerRow.font = { bold: true, color: { argb: 'FFFFFF' } };
        headerRow.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '4F46E5' }
        };

        // Add data rows
        assets.forEach(asset => {
            worksheet.addRow({
                id: asset.id,
                name: asset.name,
                manufacturer: asset.manufacturer,
                size: asset.size,
                description: asset.description,
                qrCodeData: asset.qrCodeData,
                generatedAt: asset.generatedAt.toLocaleDateString()
            });
        });

        // Add some styling
        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1) {
                row.alignment = { vertical: 'middle' };
                if (rowNumber % 2 === 0) {
                    row.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'F8FAFC' }
                    };
                }
            }
        });

        // Add a summary section
        worksheet.addRow([]); // Empty row
        const summaryRow = worksheet.addRow(['Summary', '', '', '', '', '', '']);
        summaryRow.font = { bold: true };
        worksheet.addRow(['Total Paints', assets.length, '', '', '', '', '']);
        worksheet.addRow(['Report Generated', new Date().toLocaleString(), '', '', '', '', '']);

        // Generate the Excel file
        const buffer = await workbook.xlsx.writeBuffer();
        return Buffer.from(buffer);
    }

    async generateQRCodeList(textEntries: { text: string; qrCodeData: string; generatedAt: Date }[]): Promise<Buffer> {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('QR Code List');

        // Set up headers
        worksheet.columns = [
            { header: 'Text Content', key: 'text', width: 50 },
            { header: 'QR Code Data', key: 'qrCodeData', width: 50 },
            { header: 'Generated Date', key: 'generatedAt', width: 20 }
        ];

        // Style the header row
        const headerRow = worksheet.getRow(1);
        headerRow.font = { bold: true, color: { argb: 'FFFFFF' } };
        headerRow.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '8B5CF6' }
        };

        // Add data rows
        textEntries.forEach(entry => {
            worksheet.addRow({
                text: entry.text,
                qrCodeData: entry.qrCodeData,
                generatedAt: entry.generatedAt.toLocaleDateString()
            });
        });

        // Add styling
        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1) {
                row.alignment = { vertical: 'middle' };
                if (rowNumber % 2 === 0) {
                    row.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'F8FAFC' }
                    };
                }
            }
        });

        // Add summary
        worksheet.addRow([]);
        const summaryRow = worksheet.addRow(['Summary', '', '']);
        summaryRow.font = { bold: true };
        worksheet.addRow(['Total QR Codes', textEntries.length, '']);
        worksheet.addRow(['Report Generated', new Date().toLocaleString(), '']);

        const buffer = await workbook.xlsx.writeBuffer();
        return Buffer.from(buffer);
    }
} 