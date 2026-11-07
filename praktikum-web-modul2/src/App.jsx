// src/App.jsx
import { useState } from "react";
import "./App.css";
import Kartu from "./Kartu";
import Penghitung from "./Penghitung";
import FormTugas from "./FormTugas";
import ItemTugas from "./ItemTugas";
import CatatanKeuangan from "./CatatanKeuangan"; // Impor Tugas 3

function App() {
  // State Navigasi Halaman ('tugas' atau 'keuangan')
  const [halamanAktif, setHalamanAktif] = useState("tugas");

  // State & Handler Tugas (Tugas 1 & 2)
  const [daftarTugas, setDaftarTugas] = useState([
    { id: 1, judul: "Install Node.js dan Vite", selesai: true },
    { id: 2, judul: "Pelajari useState", selesai: false },
  ]);
  const [filter, setFilter] = useState("semua");

  const tambahTugas = (judul) => {
    setDaftarTugas([...daftarTugas, { id: Date.now(), judul, selesai: false }]);
  };

  const ubahStatus = (id) => {
    setDaftarTugas(
      daftarTugas.map((tugas) =>
        tugas.id === id ? { ...tugas, selesai: !tugas.selesai } : tugas,
      ),
    );
  };

  const hapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  const hapusSemuaSelesai = () => {
    setDaftarTugas(daftarTugas.filter((tugas) => !tugas.selesai));
  };

  const tugasTersaring = daftarTugas.filter((tugas) => {
    if (filter === "selesai") return tugas.selesai;
    if (filter === "belum") return !tugas.selesai;
    return true;
  });

  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;
  const adaSelesai = daftarTugas.some((tugas) => tugas.selesai);

  return (
    <div className="wadah">
      {/* Tombol Navigasi Antar Halaman */}
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => setHalamanAktif("tugas")}
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: halamanAktif === "tugas" ? "#0d6efd" : "#e0e0e0",
            color: halamanAktif === "tugas" ? "#fff" : "#333",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Daftar Tugas (Tugas 1 & 2)
        </button>
        <button
          onClick={() => setHalamanAktif("keuangan")}
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor:
              halamanAktif === "keuangan" ? "#0d6efd" : "#e0e0e0",
            color: halamanAktif === "keuangan" ? "#fff" : "#333",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Catatan Keuangan (Tugas 3)
        </button>
      </nav>

      {/* Render Kondisional Berdasarkan Tombol yang Dipilih */}
      {halamanAktif === "tugas" ? (
        <>
          <h1 className="judul">Daftar Tugas Praktikum</h1>
          <p className="subjudul">
            Laboratorium Informatika - Modul 2: React Lanjutan
          </p>

          <Penghitung />

          <Kartu judul="Tambah Tugas Baru">
            <FormTugas onTambah={tambahTugas} />
          </Kartu>

          <Kartu judul="Daftar Tugas">
            <p className="ringkasan">
              {jumlahSelesai} dari {daftarTugas.length} tugas selesai
            </p>

            <div
              style={{
                display: "flex",
                gap: "8px",
                marginBottom: "15px",
                flexWrap: "wrap",
              }}
            >
              <button
                className={`btn-filter ${filter === "semua" ? "aktif" : ""}`}
                onClick={() => setFilter("semua")}
              >
                Semua
              </button>
              <button
                className={`btn-filter ${filter === "belum" ? "aktif" : ""}`}
                onClick={() => setFilter("belum")}
              >
                Belum Selesai
              </button>
              <button
                className={`btn-filter ${filter === "selesai" ? "aktif" : ""}`}
                onClick={() => setFilter("selesai")}
              >
                Selesai
              </button>

              {adaSelesai && (
                <button
                  onClick={hapusSemuaSelesai}
                  style={{
                    marginLeft: "auto",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    padding: "6px 12px",
                    cursor: "pointer",
                  }}
                >
                  Hapus Semua yang Selesai
                </button>
              )}
            </div>

            {tugasTersaring.length === 0 ? (
              <p className="kosong">Belum ada tugas pada kategori ini.</p>
            ) : (
              <ul className="daftar">
                {tugasTersaring.map((tugas) => (
                  <ItemTugas
                    key={tugas.id}
                    tugas={tugas}
                    onUbahStatus={ubahStatus}
                    onHapus={hapusTugas}
                  />
                ))}
              </ul>
            )}
          </Kartu>
        </>
      ) : (
        /* Menampilkan Komponen Catatan Keuangan Mini */
        <CatatanKeuangan />
      )}
    </div>
  );
}

export default App;
