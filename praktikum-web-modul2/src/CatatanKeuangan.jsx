import { useState, useEffect } from 'react';
import FormTransaksi from './FormTransaksi';
import ItemTransaksi from './ItemTransaksi';

function CatatanKeuangan() {
  // (f) Memuat data awal dari localStorage
  const [transaksi, setTransaksi] = useState(() => {
    const saved = localStorage.getItem('catatan_keuangan');
    return saved ? JSON.parse(saved) : [];
  });

  // (f) Menyimpan data ke localStorage setiap kali state 'transaksi' berubah
  useEffect(() => {
    localStorage.setItem('catatan_keuangan', JSON.stringify(transaksi));
  }, [transaksi]);

  // (a & b) Tambah dan Hapus Transaksi
  const tambahTransaksi = (dataBaru) => {
    setTransaksi([dataBaru, ...transaksi]);
  };

  const hapusTransaksi = (id) => {
    setTransaksi(transaksi.filter((item) => item.id !== id));
  };

  // (c) Hitung total saldo otomatis
  const totalSaldo = transaksi.reduce((acc, curr) => {
    return curr.jenis === 'pemasukan' ? acc + curr.nominal : acc - curr.nominal;
  }, 0);

  return (
    <div style={{ maxWidth: '450px', margin: '30px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Catatan Keuangan Mini</h2>

      {/* (c) Display Total Saldo */}
      <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '5px', marginBottom: '20px', textAlign: 'center' }}>
        <h4 style={{ margin: 0, color: '#6c757d' }}>Total Saldo:</h4>
        <h2 style={{ margin: '5px 0 0 0', color: totalSaldo >= 0 ? '#198754' : '#dc3545' }}>
          Rp {totalSaldo.toLocaleString('id-ID')}
        </h2>
      </div>

      {/* (a) Form Input */}
      <FormTransaksi onTambah={tambahTransaksi} />

      <h3>Daftar Transaksi</h3>

      {/* (e) Pesan khusus jika belum ada transaksi */}
      {transaksi.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#6c757d', italic: 'true' }}>
          Belum ada transaksi recorded. Silakan tambah transaksi baru.
        </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {transaksi.map((item) => (
            <ItemTransaksi key={item.id} item={item} onHapus={hapusTransaksi} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default CatatanKeuangan;