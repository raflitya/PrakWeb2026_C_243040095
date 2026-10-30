import React, { useState } from 'react';
import BadgeSkill from './BadgeSkill';
import ItemMatkul from './ItemMatkul';

export default function App() {
  const [activeTab, setActiveTab] = useState('portofolio');

  // Data Profil Mahasiswa
  const profil = {
    nama: 'Raflitya',
    nim: '243040095',
    kelas: 'C',
    programStudi: 'Teknik Informatika',
    github: 'https://github.com/raflitya'
  };

  // Tugas 1: Daftar Keahlian yang dikuasai (HTML, CSS, Java, PHP, MySQL)
  const daftarKeahlian = [
    { namaSkill: 'HTML', level: 'Mahir' },
    { namaSkill: 'CSS', level: 'Menengah' },
    { namaSkill: 'Java', level: 'Menengah' },
    { namaSkill: 'PHP', level: 'Menengah' },
    { namaSkill: 'MySQL', level: 'Menengah' }
  ];

  // Tugas 2: Pemisahan Modul Komponen Mata Kuliah
  const daftarMatkul = [
    { kode: 'IF2026', nama: 'Pemrograman Web', sks: 3, semester: 4, dosen: 'Tim Dosen Pemrograman Web' },
    { kode: 'IF2024', nama: 'Pemrograman Berorientasi Objek (Java)', sks: 3, semester: 4, dosen: 'Dosen PBO' },
    { kode: 'IF2025', nama: 'Basis Data', sks: 3, semester: 4, dosen: 'Dosen Basis Data' },
    { kode: 'IF2027', nama: 'Algoritma & Struktur Data', sks: 3, semester: 3, dosen: 'Dosen ASD' }
  ];

  // Tugas 3: Showcase Portofolio Mini (4 Kartu Proyek Sesuai Tautan GitHub)
  const daftarProyek = [
    {
      id: 1,
      judul: 'Tugas Besar Pemrograman Web 2025',
      deskripsi: 'Aplikasi web dinamis tugas besar yang mengintegrasikan frontend responsif dengan PHP dan basis data MySQL, mendukung operasi CRUD, autentikasi pengguna, dan manajemen data komprehensif.',
      tagar: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/raflitya/pw2025_tubes_243040095-'
    },
    {
      id: 2,
      judul: 'Proyek 1 Pengantar Teknologi Web 2024',
      deskripsi: 'Pengembangan website dasar interaktif menggunakan semantic HTML5 dan styling CSS modern, mengimplementasikan prinsip Responsive Web Design, Flexbox, dan layout terstruktur.',
      tagar: ['HTML', 'CSS', 'Web Design', 'Responsive'],
      github: 'https://github.com/raflitya/itw2024_project1_243040095-'
    },
    {
      id: 3,
      judul: 'Praktikum Basis Data 2025 Kelas C',
      deskripsi: 'Perancangan dan implementasi basis data relasional komprehensif mencakup ERD, skema relasi, normalisasi data, manipulasi SQL (DDL/DML), serta optimasi query basis data.',
      tagar: ['SQL', 'MySQL', 'Database Design', 'ERD', 'Query Optimization'],
      github: 'https://github.com/raflitya/PBD2025_C_243040095'
    },
    {
      id: 4,
      judul: 'Praktikum Pemrograman Web 2026 Kelas C',
      deskripsi: 'Showcase Portofolio Mini dan modul praktikum web berbasis React dan Node.js Express, dilengkapi komponen modular BadgeSkill dinamis, ItemMatkul, dan integrasi REST API.',
      tagar: ['React', 'Node.js', 'Express', 'HTML', 'CSS', 'REST API'],
      github: 'https://github.com/raflitya/PrakWeb2026_C_243040095'
    }
  ];

  // Data Pengalaman Magang
  const pengalamanMagang = {
    instansi: 'Dinas Lingkungan Hidup',
    bidang: 'Administrasi',
    posisi: 'Staff Administrasi Magang (Internship)',
    deskripsi: 'Pernah melaksanakan magang di Dinas Lingkungan Hidup dengan penempatan pada bidang administrasi perkantoran. Berperan aktif dalam tata kelola dokumen persuratan, input rekapitulasi data lingkungan hidup, verifikasi berkas pelayanan, serta pengarsipan digital.',
    tanggungJawab: [
      'Pengelolaan dan pencatatan alur surat masuk dan surat keluar resmi dinas secara sistematis.',
      'Digitalisasi arsip dokumen perizinan lingkungan, berkas persampahan, dan pelaporan instansi.',
      'Rekapitulasi data kegiatan operasional lingkungan hidup ke dalam format spreadsheet terstruktur.',
      'Membantu administrasi pelayanan publik dan koordinasi berkas dengan seksi/bidang terkait.',
      'Pembuatan notulensi rapat dinas serta penyusunan draf berkas laporan kegiatan mingguan.'
    ],
    keahlian: [
      'Administrasi Perkantoran',
      'Manajemen Arsip & Persuratan',
      'Pengolahan Data (Excel / Spreadsheet)',
      'Komunikasi & Koordinasi Antar Bidang',
      'Ketelitian & Akurasi Data',
      'Pelayanan Publik Prima'
    ]
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', maxWidth: '1000px', margin: '0 auto', padding: '24px', color: '#1e293b' }}>
      {/* Header Profil */}
      <header style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px', marginBottom: '28px', textAlign: 'center' }}>
        <h1 style={{ margin: '0 0 8px 0', fontSize: '28px', color: '#0f172a' }}>Portofolio {profil.nama}</h1>
        <p style={{ margin: '0 0 16px 0', color: '#64748b', fontSize: '15px' }}>
          NIM: <strong>{profil.nim}</strong> | Kelas: <strong>{profil.kelas}</strong> | {profil.programStudi}
        </p>

        {/* Tab Navigasi */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '16px', marginBottom: '20px' }}>
          <button
            onClick={() => setActiveTab('portofolio')}
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              border: activeTab === 'portofolio' ? '2px solid #2563eb' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'portofolio' ? '#eff6ff' : '#ffffff',
              color: activeTab === 'portofolio' ? '#1d4ed8' : '#64748b',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            📂 Portofolio & Proyek
          </button>
          <button
            onClick={() => setActiveTab('magang')}
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              border: activeTab === 'magang' ? '2px solid #059669' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'magang' ? '#ecfdf5' : '#ffffff',
              color: activeTab === 'magang' ? '#047857' : '#64748b',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            🌿 Pengalaman Magang
          </button>
        </div>

        {/* Tugas 1: Daftar Keahlian dengan BadgeSkill */}
        <div style={{ marginTop: '16px' }}>
          <h3 style={{ fontSize: '15px', color: '#475569', marginBottom: '10px' }}>Keahlian yang Dikuasai:</h3>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
            {daftarKeahlian.map((item) => (
              <BadgeSkill key={item.namaSkill} namaSkill={item.namaSkill} level={item.level} />
            ))}
          </div>
        </div>

        <div style={{ marginTop: '18px' }}>
          <a
            href={profil.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              padding: '8px 18px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '600'
            }}
          >
            <span>🐙 GitHub: raflitya</span>
          </a>
        </div>
      </header>

      {/* Konten Halaman Pengalaman Magang */}
      {activeTab === 'magang' ? (
        <section style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px', marginBottom: '36px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'inline-block', backgroundColor: '#d1fae5', color: '#047857', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700', marginBottom: '12px' }}>
            🌱 Pengalaman Magang
          </div>
          <h2 style={{ fontSize: '24px', margin: '0 0 6px 0', color: '#0f172a' }}>
            {pengalamanMagang.instansi}
          </h2>
          <div style={{ fontSize: '16px', color: '#0284c7', fontWeight: '600', marginBottom: '14px' }}>
            Bidang: {pengalamanMagang.bidang} • {pengalamanMagang.posisi}
          </div>
          <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
            {pengalamanMagang.deskripsi}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '16px', color: '#0f172a', marginBottom: '12px' }}>📋 Tugas & Tanggung Jawab:</h3>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#475569', fontSize: '13px', lineHeight: 1.8 }}>
                {pengalamanMagang.tanggungJawab.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '16px', color: '#0f172a', marginBottom: '12px' }}>💼 Keahlian yang Diterapkan:</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {pengalamanMagang.keahlian.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '12px',
                      backgroundColor: '#e0f2fe',
                      color: '#0369a1',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontWeight: '600'
                    }}
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Tugas 2: Pemisahan Modul Komponen Mata Kuliah */}
          <section style={{ marginBottom: '36px' }}>
            <h2 style={{ fontSize: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '16px', color: '#1e293b' }}>
              📚 Daftar Mata Kuliah
            </h2>
            <div>
              {daftarMatkul.map((matkul) => (
                <ItemMatkul key={matkul.kode} {...matkul} />
              ))}
            </div>
          </section>

          {/* Tugas 3: Showcase Portofolio Mini (4 Kartu Proyek) */}
          <section>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '24px', margin: '0 0 6px 0', color: '#0f172a' }}>
                ✨ Showcase Portofolio Mini
              </h2>
              <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>
                Menampilkan 4 kartu proyek pilihan dengan judul, ringkasan deskripsi, tagar teknologi, dan tombol repositori GitHub
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}
            >
              {daftarProyek.map((proyek) => (
                <div
                  key={proyek.id}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '14px',
                    padding: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#0f172a', lineHeight: 1.3 }}>
                      {proyek.judul}
                    </h3>
                    <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#475569', lineHeight: 1.6 }}>
                      {proyek.deskripsi}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {proyek.tagar.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '11px',
                            backgroundColor: '#f1f5f9',
                            color: '#475569',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            fontWeight: '600'
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={proyek.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      backgroundColor: '#2563eb',
                      color: '#ffffff',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: '13px',
                      fontWeight: '600',
                      textAlign: 'center'
                    }}
                  >
                    <span>🐙 Tautan Repositori GitHub</span>
                  </a>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
