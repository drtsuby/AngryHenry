# QR Inventory App

A simple web application for generating QR codes for inventory management. Built with Node.js, Express, TypeScript, and a beautiful HTML frontend.

## Features

- 🏷️ Generate QR codes for inventory assets with ID, name, and description
- 📝 Generate QR codes for any text content
- 💾 Download generated QR codes as PNG images
- 🎨 Beautiful, responsive web interface
- 🔧 RESTful API endpoints
- 📱 Mobile-friendly design

## Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the TypeScript code
- `npm start` - Start production server
- `npm run watch` - Start development server with nodemon

## API Endpoints

### Generate QR Code for Asset
- **POST** `/generate-qr`
- **Body:**
  ```json
  {
    "id": "INV-001",
    "name": "Laptop Dell XPS 13",
    "description": "13-inch laptop with 16GB RAM, 512GB SSD"
  }
  ```

### Generate QR Code for Text
- **POST** `/generate-qr-text`
- **Body:**
  ```json
  {
    "text": "Any text content you want to encode"
  }
  ```

### Health Check
- **GET** `/health`
- Returns server status

## Project Structure

```
src/
├── app.ts                 # Main application entry point
├── controllers/
│   └── qrController.ts    # Request handlers for QR operations
├── models/
│   └── asset.ts          # Asset data model
├── routes/
│   └── qrRoutes.ts       # API route definitions
├── services/
│   └── qrService.ts      # QR code generation logic
├── types/
│   └── index.ts          # TypeScript type definitions
└── public/
    └── index.html        # Web interface
```

## How to Use

1. **For Inventory Assets:**
   - Fill in the Asset ID, Name, and Description
   - Click "Generate QR Code"
   - The QR code will contain JSON data with all asset information

2. **For Text Content:**
   - Switch to the "Text QR" tab
   - Enter any text you want to encode
   - Click "Generate QR Code"

3. **Download QR Codes:**
   - After generating a QR code, click "Download QR Code"
   - The image will be saved as a PNG file

## Technology Stack

- **Backend:** Node.js, Express.js, TypeScript
- **QR Generation:** qrcode library
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Styling:** Custom CSS with modern design

## Development

The app uses TypeScript for type safety. The linter errors you see are because the dependencies haven't been installed yet. Once you run `npm install`, all the type definitions will be available.

## Next Steps

Some ideas to expand this app:
- Add database storage for assets
- Implement QR code scanning functionality
- Add user authentication
- Create asset categories and tags
- Add bulk QR code generation
- Implement asset tracking with location data

## License

This project is open source and available under the MIT License. 