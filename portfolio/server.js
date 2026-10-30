const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 4 Kartu Proyek Portofolio Raflitya
const projects = [
  {
    id: 1,
    title: "Tugas Besar Pemrograman Web 2025",
    description: "Aplikasi web dinamis tugas besar yang mengintegrasikan frontend responsif dengan PHP dan basis data MySQL, mendukung operasi CRUD, autentikasi pengguna, dan manajemen data komprehensif.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/raflitya/pw2025_tubes_243040095-",
    demo: "https://github.com/raflitya/pw2025_tubes_243040095-",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Proyek 1 Pengantar Teknologi Web 2024",
    description: "Pengembangan website dasar interaktif menggunakan semantic HTML5 dan styling CSS modern, mengimplementasikan prinsip Responsive Web Design, Flexbox, dan layout terstruktur.",
    tags: ["HTML", "CSS", "Web Design", "Responsive"],
    github: "https://github.com/raflitya/itw2024_project1_243040095-",
    demo: "https://github.com/raflitya/itw2024_project1_243040095-",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Praktikum Basis Data 2025 Kelas C",
    description: "Perancangan dan implementasi basis data relasional komprehensif mencakup ERD, skema relasi, normalisasi data, manipulasi SQL (DDL/DML), serta optimasi query basis data.",
    tags: ["SQL", "MySQL", "Database Design", "ERD", "Query Optimization"],
    github: "https://github.com/raflitya/PBD2025_C_243040095",
    demo: "https://github.com/raflitya/PBD2025_C_243040095",
    category: "Database"
  },
  {
    id: 4,
    title: "Praktikum Pemrograman Web 2026 Kelas C",
    description: "Showcase Portofolio Mini dan modul praktikum web berbasis React dan Node.js Express, dilengkapi komponen modular BadgeSkill dinamis, ItemMatkul, dan integrasi REST API.",
    tags: ["React", "Node.js", "Express", "HTML", "CSS", "REST API"],
    github: "https://github.com/raflitya/PrakWeb2026_C_243040095",
    demo: "http://localhost:3000",
    category: "Full Stack"
  }
];

// Data Pengalaman Magang
const internship = {
  instansi: "Dinas Lingkungan Hidup",
  bidang: "Administrasi",
  posisi: "Staff Administrasi Magang (Internship)",
  periode: "Magang / Praktik Kerja Lapangan",
  lokasi: "Kantor Dinas Lingkungan Hidup",
  deskripsi: "Bertanggung jawab dalam pengelolaan administrasi perkantoran, digitalisasi arsip, penataan surat masuk/keluar, serta pendataan program kegiatan lingkungan hidup.",
  tanggungJawab: [
    "Mengelola tata kelola persuratan dinas (surat masuk, surat keluar, disposisi, dan pengarsipan digital).",
    "Melakukan entri data dan rekapitulasi laporan kegiatan operasional ke dalam spreadsheet dan sistem database.",
    "Membantu pelayanan administrasi masyarakat dan verifikasi kelengkapan berkas pelayanan lingkungan.",
    "Menyusun dokumentasi dan notulensi rapat koordinasi antar divisi di Dinas Lingkungan Hidup.",
    "Mengoptimalkan efisiensi pencarian dokumen dinas melalui sistem penomoran dan folderisasi terstruktur."
  ],
  keahlianDiterapkan: [
    "Administrasi Perkantoran",
    "Manajemen Dokumen & Kearsipan",
    "Microsoft Office & Google Workspace",
    "Rekapitulasi & Verifikasi Data",
    "Komunikasi Publik & Pelayanan Prima"
  ]
};

// Route API Projects
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

// Route API Pengalaman Magang
app.get('/api/internship', (req, res) => {
  res.json({
    success: true,
    data: internship
  });
});

// Serve frontend untuk semua route lain
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🚀 Server berjalan di: http://localhost:${PORT}`);
  console.log(`📦 API Proyek: http://localhost:${PORT}/api/projects`);
  console.log(`💼 API Magang: http://localhost:${PORT}/api/internship`);
  console.log(`\nTekan CTRL+C untuk menghentikan server\n`);
});
