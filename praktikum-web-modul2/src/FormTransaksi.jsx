import { useState } from 'react';

function FormTransaksi({ onTambah }) {
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState('pemasukan');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!keterangan.trim() || !nominal) return;

    // Mengubah nominal string menjadi angka sesuai petunjuk tugas
    onTambah({
      id: Date.now(),
      keterangan,
      nominal: Number(nominal),
      jenis
    });

    // Reset form
    setKeterangan('');
    setNominal('');
    setJenis('pemasukan');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Keterangan transaksi..."
        value={keterangan}
        onChange={(e) => setKeterangan(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Nominal (Rp)..."
        value={nominal}
        onChange={(e) => setNominal(e.target.value)}
        required
      />
      <select value={jenis} onChange={(e) => setJenis(e.target.value)}>
        <option value="pemasukan">Pemasukan</option>
        <option value="pengeluaran">Pengeluaran</option>
      </select>
      <button type="submit" style={{ backgroundColor: '#0d6efd', color: '#fff', border: 'none', padding: '8px', cursor: 'pointer' }}>
        Tambah Transaksi
      </button>
    </form>
  );
}

export default FormTransaksi;