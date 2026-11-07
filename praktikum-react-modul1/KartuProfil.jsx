import React from 'react';
import BadgeSkill from './BadgeSkill';


export default function KartuProfil({
  nama = 'Raflitya',
  nim = '243040095',
  kelas = 'C',
  programStudi = 'Teknik Informatika',
  github = 'https://github.com/raflitya',
  daftarKeahlian = [],
  children
}) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '18px',
        padding: '32px 24px',
        marginBottom: '28px',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Aksen visual atas kartu */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981)'
        }}
      />

      {/* Avatar Inisial */}
      <div
        style={{
          width: '76px',
          height: '76px',
          borderRadius: '50%',
          margin: '0 auto 16px',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '30px',
          fontWeight: '700',
          boxShadow: '0 8px 16px -2px rgba(59, 130, 246, 0.35)'
        }}
      >
        {nama ? nama.charAt(0).toUpperCase() : 'R'}
      </div>

      {/* Nama & Identitas */}
      <h1 style={{ margin: '0 0 6px 0', fontSize: '26px', color: '#0f172a', fontWeight: '800' }}>
        {nama}
      </h1>
      <p style={{ margin: '0 0 16px 0', color: '#64748b', fontSize: '15px' }}>
        NIM: <strong style={{ color: '#1e293b' }}>{nim}</strong> • Kelas:{' '}
        <strong style={{ color: '#1e293b' }}>{kelas}</strong> • {programStudi}
      </p>

      {/* Tombol Tautan GitHub */}
      {github && (
        <div style={{ marginBottom: '20px' }}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              padding: '9px 20px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '600',
              transition: 'background-color 0.2s',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <span>🐙 GitHub: {github.replace('https://github.com/', '')}</span>
          </a>
        </div>
      )}

      {/* Daftar Keahlian (menggunakan komponen BadgeSkill) */}
      {daftarKeahlian && daftarKeahlian.length > 0 && (
        <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
          <h3 style={{ fontSize: '14px', color: '#475569', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Keahlian yang Dikuasai:
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
            {daftarKeahlian.map((item) => (
              <BadgeSkill key={item.namaSkill} namaSkill={item.namaSkill} level={item.level} />
            ))}
          </div>
        </div>
      )}

      {/* Slot Konten Tambahan (misal tombol tab navigasi) */}
      {children && <div style={{ marginTop: '20px' }}>{children}</div>}
    </div>
  );
}
