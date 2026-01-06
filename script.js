// HARGA DASAR
const harga = {
  Nikahan: 5000,
  Kantor: 8000,
  Custom: 10000
};

// UPDATE INVOICE
function updateInvoice() {
  let nama = document.getElementById("nama")?.value || "";
  let wa = document.getElementById("wa")?.value || "";
  let jenis = document.getElementById("jenis")?.value || "";
  let jumlah = document.getElementById("jumlah")?.value || "";
  let metode = document.getElementById("metode")?.value || "";

  let total = 0;
  if (jenis && jumlah && harga[jenis]) {
    total = harga[jenis] * jumlah;
  }

  let invoiceBox = document.getElementById("invoice");
  if (!invoiceBox) return;

  invoiceBox.innerHTML = `
    <b>Nama:</b> ${nama || "-"}<br>
    <b>No WA:</b> ${wa || "-"}<br>
    <b>Jenis Souvenir:</b> ${jenis || "-"}<br>
    <b>Jumlah:</b> ${jumlah || "-"}<br>
    <b>Total Estimasi:</b> Rp ${total.toLocaleString()}<br>
    <b>Metode Pembayaran:</b> ${metode || "-"}<br>
    <b>Status:</b> <span style="color:#facc15">Menunggu Konfirmasi</span>
  `;
}

// DETAIL PEMBAYARAN
function pilihPembayaran() {
  let metode = document.getElementById("metode").value;
  let box = document.getElementById("detailPembayaran");

  if (metode === "VA") {
    box.innerHTML = "VA BCA<br><b>1234567890</b><br>A/N Markas Cetak Custom";
  } else if (metode === "BANK") {
    box.innerHTML = "BCA: <b>1234567890</b><br>BRI: <b>9876543210</b>";
  } else if (metode === "DANA") {
    box.innerHTML = "DANA: <b>081234567890</b>";
  } else if (metode === "QRIS") {
    box.innerHTML = "Scan QRIS:<br><img src='https://via.placeholder.com/180'>";
  } else {
    box.innerHTML = "";
  }
}

// KIRIM WA
function kirimWA() {
  let nama = document.getElementById("nama").value;
  let wa = document.getElementById("wa").value;
  let jenis = document.getElementById("jenis").value;
  let jumlah = document.getElementById("jumlah").value;
  let metode = document.getElementById("metode").value;

  if (!nama || !wa || !jenis || !jumlah || !metode) {
    alert("Lengkapi semua data!");
    return;
  }

  let total = harga[jenis] * jumlah;

  let pesan = `*ORDER BARU – MARKAS CETAK CUSTOM*

Nama : ${nama}
No WA : ${wa}
Jenis : ${jenis}
Jumlah : ${jumlah}
Total : Rp ${total.toLocaleString()}
Pembayaran : ${metode}

Status : Menunggu Konfirmasi
(Bukti pembayaran menyusul)`;

  let admin = "628XXXXXXXXXX"; // GANTI NOMOR ADMIN
  window.open(
    `https://wa.me/${6281215693502}?text=${encodeURIComponent(pesan)}`,
    "_blank"
  );
}
