/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"




// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
const NAMA_KEDAI = "Kopi PSTI UPI";

// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
let NAMA_KASIR = "Kak Puput";
let SHIFT_KERJA = "Pagi";

// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().
console.log("Kedai :" + NAMA_KEDAI);
console.log("Kasir :" + NAMA_KASIR);
console.log("Shift :" + SHIFT_KERJA);


// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
NAMA_KASIR ="Kak Futri";
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.
console.log("Kasir :" + NAMA_KASIR);


// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
alert("Selamat Datang di Kopi PSTI UPI Semoga Harimu Menyenangkan!!");

// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
let NAMA_PELANGGAN = prompt ("Hallo! masukkan namamu untuk melakukan pemesanan");

// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.
if (NAMA_PELANGGAN){
    alert("Hallo," + NAMA_PELANGGAN + "Selamat Datang Di Kopi PSTI UPI");
    console.log("Member Aktif:" + NAMA_PELANGGAN);
}else {
    alert("Kamu tidak memasukkan nama. Kamu akan dipanggil Pelanggan Setia");
    NAMA_PELANGGAN = "Pelanggan Setia";
    console.log("Member Aktif:" + NAMA_PELANGGAN);
}




// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
let POIN_KOPI = 45;
let POIN_MAKANAN = 35;
let POIN_MERCHANDISE = 20;

// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
let TOTAL_POIN = POIN_KOPI + POIN_MAKANAN + POIN_MERCHANDISE;

// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().
console.log("=== Rincian Poin" + NAMA_PELANGGAN + "===");
console.log("Kopi:" + POIN_KOPI);
console.log("Makanan:" + POIN_MAKANAN);
console.log("Merchandise:" + POIN_MERCHANDISE);
console.log("Total Poin:" + TOTAL_POIN);



