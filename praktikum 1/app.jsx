import React from 'react';
import BadgeSkill from './BadgeSkill';
import ItemMatkul from './ItemMatkul';

export default function App() {
  // Data Profil Mahasiswa
  const profil = {
    nama: 'Rafli Tya Rahman',
    nim: '243040095',
    kelas: 'C',
    programStudi: 'Teknik Informatika',
    github: 'https://github.com/raflitya/PrakWeb2026_C_243040095'
  };

  // Tugas 1: Daftar Keahlian yang dikuasai (HTML, CSS, Java)
  const daftarKeahlian = [
    { namaSkill: 'HTML', level: 'Mahir' },
    { namaSkill: 'CSS', level: 'Menengah' },
    { namaSkill: 'Java', level: 'Menengah' }
  ];

  // Tugas 2: Pemisahan Modul Komponen Mata Kuliah
  const daftarMatkul = [
    { kode: 'IF2026', nama: 'Pemrograman Web', sks: 3, semester: 4, dosen: 'Tim Dosen Pemrograman Web' },
    { kode: 'IF2024', nama: 'Pemrograman Berorientasi Objek (Java)', sks: 3, semester: 4, dosen: 'Dosen PBO' },
    { kode: 'IF2025', nama: 'Basis Data', sks: 3, semester: 4, dosen: 'Dosen Basis Data' },
    { kode: 'IF2027', nama: 'Algoritma & Struktur Data', sks: 3, semester: 3, dosen: 'Dosen ASD' }
  ];

  // Tugas 3: Showcase Portofolio Mini (Tepat 4 Kartu Proyek)
  const daftarProyek = [
    {
      id: 1,
      judul: 'Sistem Manajemen Data Mahasiswa (Java GUI)',
      deskripsi: 'Aplikasi desktop pengelolaan data akademik mahasiswa, mata kuliah, dan nilai menggunakan Java Swing, JDBC, dan basis data MySQL.',
      tagar: ['Java', 'Swing', 'MySQL', 'JDBC', 'OOP'],
      github: 'https://github.com/raflitya/PrakWeb2026_C_243040095'
    },
    {
      id: 2,
      judul: 'Web Portofolio & Landing Page Responsif',
      deskripsi: 'Website modern responsif yang dirancang dengan semantic HTML5 dan CSS Grid/Flexbox dengan dark mode serta animasi interaktif.',
      tagar: ['HTML', 'CSS', 'Flexbox', 'Responsive Design'],
      github: 'https://github.com/raflitya/PrakWeb2026_C_243040095'
    },
    {
      id: 3,
      judul: 'Aplikasi Point of Sale (POS) Kasir Java',
      deskripsi: 'Aplikasi pengolah transaksi kasir berbasis Java Object-Oriented Programming yang menghitung struk, diskon, dan rekapitulasi data penjualan.',
      tagar: ['Java', 'OOP', 'Data Structures', 'Console GUI'],
      github: 'https://github.com/raflitya/PrakWeb2026_C_243040095'
    },
    {
      id: 4,
      judul: 'Showcase Portofolio Mini Web',
      deskripsi: 'Halaman web showcase portofolio interaktif berbasis HTML, CSS, React, dan Node.js Express yang terintegrasi dengan REST API dan GitHub.',
      tagar: ['HTML', 'CSS', 'React', 'Node.js', 'Express'],
      github: 'https://github.com/raflitya/PrakWeb2026_C_243040095'
    }
  ];

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', maxWidth: '1000px', margin: '0 auto', padding: '24px', color: '#1e293b' }}>
      {/* Header Profil */}
      <header style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px', marginBottom: '28px', textAlign: 'center' }}>
        <h1 style={{ margin: '0 0 8px 0', fontSize: '28px', color: '#0f172a' }}>{profil.nama}</h1>
        <p style={{ margin: '0 0 16px 0', color: '#64748b', fontSize: '15px' }}>
          NIM: <strong>{profil.nim}</strong> | Kelas: <strong>{profil.kelas}</strong> | {profil.programStudi}
        </p>

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
            <span>🐙 GitHub: raflitya/PrakWeb2026_C_243040095</span>
          </a>
        </div>
      </header>

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
            Menampilkan 4 kartu proyek dengan teknologi HTML, CSS, dan Java
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
    </div>
  );
}
