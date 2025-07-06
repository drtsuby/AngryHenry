# 🎨 Paint Inventory Management System

A modern web application for managing paint inventory with QR code generation and Excel export capabilities.

## ✨ Features

- **🎨 Paint Management**: Add, view, and manage paint inventory with automatic ID generation
- **📊 QR Code Generation**: Generate QR codes for paint items and custom text
- **📋 Excel Export**: Export inventory data to professional Excel spreadsheets
- **🔍 Search & Filter**: Real-time search across all paint attributes
- **📱 Responsive Design**: Modern UI that works on desktop and mobile
- **🏷️ Manufacturer Support**: Track paint manufacturers (Ronan, 1Shot, Alphanmel)
- **📏 Size Tracking**: Monitor paint sizes from 5oz bottles to quarts

## 🚀 Live Demo

Visit the live application: [Paint Inventory App](https://your-app-url.onrender.com)

## 🛠️ Technology Stack

- **Backend**: Node.js, Express, TypeScript
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **QR Generation**: qrcode library
- **Excel Export**: ExcelJS
- **Deployment**: Render

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/paint-inventory-app.git
cd paint-inventory-app
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Start the application:
```bash
npm start
```

The app will be available at `http://localhost:3000`

## 🎯 Usage

### Adding Paint Items
1. Navigate to the "Add Paint" tab
2. Enter paint name and color
3. Select manufacturer and size
4. Click "Add Paint" - ID is generated automatically

### Generating QR Codes
1. Use "Text QR" tab for custom QR codes
2. Paint items automatically get QR codes with their details

### Managing Inventory
1. View all paints in the "Paint Inventory" tab
2. Search and filter by any attribute
3. Reprint or download QR codes
4. Export data to Excel

## 🔧 Development

### Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run build-exe` - Create standalone executable

### Project Structure
```
src/
├── app.ts              # Main application entry
├── controllers/        # Request handlers
├── models/            # Data models
├── routes/            # API routes
├── services/          # Business logic
├── public/            # Static files
└── types/             # TypeScript definitions
```

## 🌐 Deployment

### Deploy to Render
1. Fork this repository
2. Connect to [Render](https://render.com)
3. Create a new Web Service
4. Connect your GitHub repository
5. Use these settings:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

### Environment Variables
No environment variables required for basic functionality.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For issues or questions, please open an issue on GitHub.

---

Made with ❤️ for paint inventory management