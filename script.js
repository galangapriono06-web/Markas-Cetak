document.addEventListener("DOMContentLoaded", function () {

  const nama = document.getElementById("nama");
  const wa = document.getElementById("wa");
  const kategori = document.getElementById("kategori");
  const desain = document.getElementById("desain");
  const jumlah = document.getElementById("jumlah");
  const btnWA = document.getElementById("btnWA");
  const invoice = document.getElementById("invoice");

  const harga = {
    Nikahan: 5000,
    Kantor: 8000,
    Custom: 10000
  };

  function updateInvoice() {
    const n = nama.value.trim();
    const w = wa.value.trim();
    const k = kategori.value;
    const d = desain.value;
    const j = jumlah.value;

    const total = (k && j) ? harga[k] * j : 0;

    invoice.innerHTML = `
      <b>Nama:</b> ${n || "-"}<br>
      <b>WA:</b> ${w || "-"}<br>
      <b>Kategori:</b> ${k || "-"}<br>
      <b>Desain:</b> ${d || "-"}<br>
      <b>Jumlah:</b> ${j || "-"}<br>
      <b>Total Estimasi:</b> Rp ${total.toLocaleString()}
    `;

    // Tombol aktif hanya jika data lengkap
    btnWA.disabled = !(n && w && k && d && j);
  }

  // Event listener semua input
  [nama, wa, kategori, desain, jumlah].forEach(el => {
    el.addEventListener("input", updateInvoice);
    el.addEventListener("change", updateInvoice);
  });

  // Klik tombol WA
  btnWA.addEventListener("click", function () {
    const pesan = `ORDER MARKAS CETAK CUSTOM

Nama: ${nama.value}
WA: ${wa.value}
Kategori: ${kategori.value}
Desain: ${desain.value}
Jumlah: ${jumlah.value}

Mohon konfirmasi & info pembayaran.`;

    window.open(
      "https://wa.me/6285175272990?text=" + encodeURIComponent(pesan),
      "_blank"
    );
  });

  // Jalankan pertama kali
  updateInvoice();
});
