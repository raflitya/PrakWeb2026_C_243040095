import React from 'react';

/**
 * Komponen ItemMatkul
 * Menampilkan item informasi mata kuliah secara modular
 */
export default function ItemMatkul({ kode, nama, sks, semester, dosen }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 18px',
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '10px',
        marginBottom: '10px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: '700',
              padding: '2px 8px',
              borderRadius: '4px',
              backgroundColor: '#e0e7ff',
              color: '#3730a3'
            }}
          >
            {kode}
          </span>
          <span style={{ fontWeight: '600', fontSize: '15px', color: '#1e293b' }}>
            {nama}
          </span>
        </div>
        {dosen && (
          <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>
            Dosen: {dosen}
          </div>
        )}
      </div>

      <div style={{ textAlign: 'right' }}>
        <span
          style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#0f172a',
            backgroundColor: '#f1f5f9',
            padding: '4px 10px',
            borderRadius: '6px'
          }}
        >
          {sks} SKS
        </span>
        {semester && (
          <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>
            Semester {semester}
          </div>
        )}
      </div>
    </div>
  );
}
