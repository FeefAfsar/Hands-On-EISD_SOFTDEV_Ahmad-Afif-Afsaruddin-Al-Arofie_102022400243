# Hands On EISD_SOFTDEV_Ruddi_102022400243

Repository ini berisi penyelesaian tugas seleksi Study Group EISD 2026 divisi Software Development. Seluruh pengerjaan hands on dikerjakan menggunakan **JavaScript**.

## Identitas Diri
- **Nama:** Ahmad 'Afif Afsaruddin Al 'Arofie
- **NIM:** 102022400243
- **Program Studi:** S1 Sistem Informasi, 2024

---

## Jawaban Soal 1: No Code(WAJIB)

### **Masalah yang Teridentifikasi**
1. **Data Duplikat:** Peserta menekan tombol daftar berkali-kali.
2. **Data Invalid:** Input asal-asalan (seperti nama "." atau email tanpa format).
3. **Over-Capacity:** Kuota kelas (25) terlampaui karena sistem terus menerima pendaftaran.

### **Prioritas Utama: Implementasi Server-Side Validation & Quota Control**
Jika saya hanya boleh memperbaiki satu hal dalam waktu terbatas, saya akan memprioritaskan perbaikan pada **Logika Validasi di Sisi Server (Backend)**.

### **Alasan Mengapa Ini Prioritas Utama:**

1. **Integritas Operasional (Paling Krusial)** Masalah kuota yang jebol (30+ pendaftar untuk 25 kursi) adalah masalah yang paling sulit diperbaiki secara manual. Secara administratif, membatalkan peserta yang sudah merasa "berhasil" daftar akan merusak kredibilitas dan reputasi Lab EISD. Dibandingkan data duplikat yang bisa dibersihkan di database, masalah kelebihan muatan berdampak langsung pada kekacauan operasional di hari pelaksanaan.

2. **Solusi "Satu untuk Semua"** Dengan memperketat validasi di backend, kita bisa menyelesaikan tiga masalah sekaligus secara sistematis:
   - **Unique Constraint:** Mengatur kolom email agar unik, sehingga sistem menolak pendaftaran kedua dari email yang sama (mengatasi duplikasi).
   - **Data Filtering:** Menolak input yang tidak memenuhi syarat minimal (mengatasi data invalid).
   - **Atomic Counter:** Mengecek jumlah pendaftar sebelum menyimpan data baru, sehingga sistem otomatis menolak jika kuota sudah mencapai 25 (mengatasi over-capacity).

3. **Keamanan Sistem** Validasi sisi server adalah "benteng terakhir". Validasi di sisi tampilan (frontend) mudah diakali oleh pengguna, sedangkan validasi backend menjamin integritas data yang masuk ke dalam sistem tetap bersih dan akurat.

---

## Daftar Pengerjaan Soal
Seluruh kode program dapat ditemukan pada file-file berikut:
1. **Soal 1:** Jawaban terdapat pada bagian atas file README ini (Mandatori).
2. **Soal 2:** `soal2.js` - Filter ketersediaan Study Group berdasarkan kuota.
3. **Soal 3:** `soal3.js` - Logika penentuan status pendaftaran (Accepted/Full/Rejected).
4. **Soal 4:** `soal4.js` - Validasi kelayakan input data pendaftar.
5. **Soal 5:** `soal5.js` - Perhitungan total dan rata-rata pendaftar menggunakan *accumulator*.
6. **Soal 6:** `soal6.js` - Deteksi data email duplikat pada sistem.

---
