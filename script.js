document.addEventListener("DOMContentLoaded", () => {

  const harga = {
    Nikahan: 5000,
    Kantor: 8000,
    Custom: 10000
  };

  const nama = document.getElementById("nama");
  const wa = document.getElementById("wa");
  const kategori = document.getElementById("kategori");
  const desain = document.getElementById("desain");
  const jumlah = document.getElementById("jumlah");
  const btnWA = document.getElementById("btnWA");
  const invoice = document.getElementById("invoice");

  // Ambil URL parameter
  const params = new URLSearchParams(window.location.search);
  if (params.get("kategori")) kategori.value = params.get("kategori");
  if (params.get("desain")) desain.value = params.get("desain");

  // Listener semua input
  [nama, wa, kategori, desain, jumlah].forEach(el => {
    el.addEventListener("input", updateInvoice);
    el.addEventListener("change", updateInvoice);
  });

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
      <b>Total:</b> Rp ${total.toLocaleString()}
    `;

    // AKTIFKAN TOMBOL
    btnWA.disabled = !(n && w && k && d && j);
  }

  window.kirimWA = function () {
    const pesan = `ORDER MARKAS CETAK CUSTOM

Nama: ${nama.value}
WA: ${wa.value}
Kategori: ${kategori.value}
Desain: ${desain.value}
Jumlah: ${jumlah.value}

Mohon konfirmasi.`;

    window.open(
      "https://wa.me/6281215693502?text=" + encodeURIComponent(pesan),
      "_blank"
    );
  };

  // Panggil sekali saat load
  updateInvoice();
});
