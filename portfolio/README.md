# 🚀 Showcase Portofolio Mini

Proyek halaman portofolio interaktif yang dibangun dengan **React** (frontend) dan **Node.js + Express** (backend API).

## 📁 Struktur Proyek

```
PrakWeb2026_C_243040095/
├── praktikum 1/
│   └── app.jsx          ← Komponen React utama (JSX)
└── portfolio/
    ├── server.js         ← Node.js + Express server
    ├── package.json
    └── public/
        └── index.html    ← Frontend (React via CDN + Babel)
```

## ✨ Fitur

- **6 Kartu Proyek** dengan kategori: Full Stack, Frontend, Backend, AI/ML
- Setiap kartu menampilkan:
  - 📌 **Judul Proyek**
  - 📝 **Ringkasan Deskripsi**
  - 🏷️ **Tagar Teknologi** (`#React`, `#Node.js`, dst.)
  - 🐙 **Tombol Tautan Repositori GitHub**
  - ↗ Tombol Live Demo
- **Filter kategori** proyek
- **REST API** endpoint `/api/projects`
- **Dark theme** modern dengan animasi halus
- **Responsive** untuk semua ukuran layar

## 🚀 Cara Menjalankan

```bash
# Masuk ke folder portfolio
cd portfolio

# Install dependencies (hanya pertama kali)
npm install

# Jalankan server
npm start
```

Buka browser: **http://localhost:3000**

## 🔌 API Endpoints

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/projects` | Ambil semua proyek |
| GET | `/api/projects/:id` | Ambil proyek berdasarkan ID |

## 🛠️ Teknologi

- **Frontend**: React 18, Babel (CDN), CSS Custom Properties
- **Backend**: Node.js, Express.js, CORS
- **Font**: Inter, Space Grotesk (Google Fonts)
