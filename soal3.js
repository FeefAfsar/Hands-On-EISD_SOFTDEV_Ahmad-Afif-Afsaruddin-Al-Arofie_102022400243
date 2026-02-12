function cekStatusPendaftaran(kuota, terdaftar) {
    // Aturan pendaftaran sesuai panduan 
    if (terdaftar > kuota) {
        return "Pendaftaran ditolak";
    } else if (terdaftar === kuota) {
        return "Pendaftaran ditutup";
    } else if (terdaftar >= kuota - 3) {
        return "Hampir penuh";
    } else {
        return "Pendaftaran diterima";
    }
}

// Uji coba [cite: 54-57]
console.log(cekStatusPendaftaran(25, 20)); // Pendaftaran diterima
console.log(cekStatusPendaftaran(25, 23)); // Hampir penuh
console.log(cekStatusPendaftaran(25, 25)); // Pendaftaran ditutup
console.log(cekStatusPendaftaran(25, 26)); // Pendaftaran ditolak