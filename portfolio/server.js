const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const GITHUB_URL = "https://github.com/raflitya/PrakWeb2026_C_243040095";

// API endpoint - Tepat 4 proyek showcase portofolio mini
const projects = [
  {
    id: 1,
    title: "Sistem Manajemen Data Mahasiswa (Java GUI)",
    description: "Aplikasi desktop pengelolaan data akademik mahasiswa, mata kuliah, dan nilai menggunakan Java Swing, JDBC, dan basis data MySQL.",
    tags: ["Java", "Swing", "MySQL", "JDBC", "OOP"],
    github: GITHUB_URL,
    demo: GITHUB_URL,
    category: "Java"
  },
  {
    id: 2,
    title: "Web Portofolio & Landing Page Responsif",
    description: "Website modern responsif yang dirancang dengan semantic HTML5 dan CSS Grid/Flexbox dengan dark mode serta animasi interaktif.",
    tags: ["HTML", "CSS", "Flexbox", "Responsive Design"],
    github: GITHUB_URL,
    demo: GITHUB_URL,
    category: "HTML & CSS"
  },
  {
    id: 3,
    title: "Aplikasi Point of Sale (POS) Kasir Java",
    description: "Aplikasi pengolah transaksi kasir berbasis Java Object-Oriented Programming yang menghitung struk, diskon, dan rekapitulasi data penjualan.",
    tags: ["Java", "OOP", "Data Structures", "Console GUI"],
    github: GITHUB_URL,
    demo: GITHUB_URL,
    category: "Java"
  },
  {
    id: 4,
    title: "Showcase Portofolio Mini Web",
    description: "Halaman web showcase portofolio interaktif berbasis HTML, CSS, React, dan Node.js Express yang terintegrasi dengan REST API dan GitHub.",
    tags: ["HTML", "CSS", "React", "Node.js", "Express"],
    github: GITHUB_URL,
    demo: "http://localhost:3000",
    category: "Full Stack"
  }
];

// Route API
app.get('/api/projects', (req, res) => {
  res.json({
    success: true,
    total: projects.length,
    data: projects
  });
});

app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ success: false, message: 'Proyek tidak ditemukan' });
  }
  res.json({ success: true, data: project });
});

// Serve frontend untuk semua route lain
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🚀 Server berjalan di: http://localhost:${PORT}`);
  console.log(`📦 API Proyek: http://localhost:${PORT}/api/projects`);
  console.log(`🐙 GitHub: ${GITHUB_URL}`);
  console.log(`\nTekan CTRL+C untuk menghentikan server\n`);
});
