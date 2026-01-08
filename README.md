# QR Code Generator

A full-stack application to generate QR codes from URLs.

## Backend (Python Flask)

The backend is a Flask API that generates QR codes.

### Requirements

- Python 3.x
- qrcode[pil]
- flask
- flask-cors

### Running the Backend

```bash
python main.py
```

The API will run on http://localhost:5000

## Frontend (React)

The frontend is a React app built with Vite.

### Requirements

- Node.js
- npm

### Running the Frontend

```bash
cd frontend
npm run dev
```

The app will run on http://localhost:5173

## Usage

1. Start the backend server.
2. Start the frontend dev server.
3. Open the frontend in your browser.
4. Enter a URL, select format (PNG or JPEG), click Generate.
5. The QR code will be displayed, and you can download it.
