import React from 'react';

/**
 * Komponen BadgeSkill
 * Menerima props 'namaSkill' dan 'level' (Pemula, Menengah, Mahir)
 * Menampilkan badge dengan warna dinamis sesuai level keahlian.
 */
export default function BadgeSkill({ namaSkill, level }) {
  // Penentuan warna badge berdasarkan level
  const getBadgeStyle = (lvl) => {
    switch (lvl?.toLowerCase()) {
      case 'pemula':
        return {
          backgroundColor: '#fef3c7',
          color: '#b45309',
          border: '1px solid #fcd34d'
        };
      case 'menengah':
        return {
          backgroundColor: '#dbeafe',
          color: '#1d4ed8',
          border: '1px solid #93c5fd'
        };
      case 'mahir':
        return {
          backgroundColor: '#d1fae5',
          color: '#047857',
          border: '1px solid #6ee7b7'
        };
      default:
        return {
          backgroundColor: '#f3f4f6',
          color: '#374151',
          border: '1px solid #d1d5db'
        };
    }
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 14px',
    borderRadius: '9999px',
    fontSize: '13px',
    fontWeight: '600',
    margin: '4px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    ...getBadgeStyle(level)
  };

  const dotStyle = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  };

  return (
    <span style={badgeStyle} title={`${namaSkill} - Level: ${level}`}>
      <span style={dotStyle}></span>
      <strong>{namaSkill}</strong> • {level}
    </span>
  );
}
