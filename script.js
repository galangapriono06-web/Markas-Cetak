alert("SCRIPT AKTIF");
document.addEventListener("DOMContentLoaded", function () {

  const nama = document.getElementById("nama");
  const wa = document.getElementById("wa");
  const kategori = document.getElementById("kategori");
  const desain = document.getElementById("desain");
  const jumlah = document.getElementById("jumlah");
  const btnWA = document.getElementById("btnWA");
  const invoice = document.getElementById("invoice");

  function update() {
    const n = nama.value.trim();
    const w = wa.value.trim();
    const k = kategori.value;
    const d = desain.value;
    const j = jumlah.value;

    invoice.innerHTML = `
      Nama: ${n || "-"}<br>
      WA: ${w || "-"}<br>
      Kategori: ${k || "-"}<br>
      Desain: ${d || "-"}<br>
      Jumlah: ${j || "-"}
    `;

    // KUNCI UTAMA: AKTIF / NONAKTIF
    btnWA.disabled = !(n && w && k && d && j);
  }

  [nama, wa, kategori, desain, jumlah].forEach(el => {
    el.addEventListener("input", update);
    el.addEventListener("change", update);
  });

  btnWA.addEventListener("click", function () {
    const pesan = `ORDER MARKAS CETAK CUSTOM

Nama: ${nama.value}
WA: ${wa.value}
Kategori: ${kategori.value}
Desain: ${desain.value}
Jumlah: ${jumlah.value}`;

    window.open(
      "https://wa.me/6285175272990?text=" + encodeURIComponent(pesan),
      "_blank"
    );
  });

  // jalankan saat halaman pertama kali dibuka
  update();
});
