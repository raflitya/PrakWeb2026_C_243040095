function ItemTransaksi({ item, onHapus }) {
  const isPemasukan = item.jenis === 'pemasukan';
  const warnaNominal = isPemasukan ? '#198754' : '#dc3545'; // Hijau jika Pemasukan, Merah jika Pengeluaran

  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #ddd',
        marginBottom: '5px'
      }}
    >
      <div>
        <strong>{item.keterangan}</strong>
        <span style={{ fontSize: '0.85em', color: '#6c757d', marginLeft: '8px' }}>
          ({item.jenis})
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ color: warnaNominal, fontWeight: 'bold' }}>
          {isPemasukan ? '+' : '-'} Rp {item.nominal.toLocaleString('id-ID')}
        </span>
        <button
          onClick={() => onHapus(item.id)}
          style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '3px', padding: '3px 8px', cursor: 'pointer' }}
        >
          Hapus
        </button>
      </div>
    </li>
  );
}

export default ItemTransaksi;