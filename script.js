document.addEventListener("DOMContentLoaded", function () {

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
  const metode = document.getElementById("metode");
  const btnWA = document.getElementById("btnWA");
  const invoice = document.getElementById("invoice");
  const preview = document.getElementById("previewDesain");

  function updatePreview() {
    if (desain.value === "Minimalis") preview.src = "assets/minimalis.jpg";
    if (desain.value === "Elegan") preview.src = "assets/elegan.jpg";
    if (desain.value === "Modern") preview.src = "assets/modern.jpg";
  }

  function updateInvoice() {
    const total = (kategori.value && jumlah.value)
      ? harga[kategori.value] * jumlah.value
      : 0;

    invoice.innerHTML = `
      <b>Nama:</b> ${nama.value || "-"}<br>
      <b>WA:</b> ${wa.value || "-"}<br>
      <b>Kategori:</b> ${kategori.value || "-"}<br>
      <b>Desain:</b> ${desain.value || "-"}<br>
      <b>Jumlah:</b> ${jumlah.value || "-"}<br>
      <b>Total:</b> Rp ${total.toLocaleString()}<br>
      <b>Pembayaran:</b> ${metode.value || "-"}
    `;

    btnWA.disabled = !(nama.value && wa.value && kategori.value && desain.value && jumlah.value && metode.value);
  }

  [nama, wa, kategori, desain, jumlah, metode].forEach(el => {
    el.addEventListener("input", updateInvoice);
    el.addEventListener("change", () => {
      updatePreview();
      updateInvoice();
    });
  });

  btnWA.addEventListener("click", function () {
    const total = harga[kategori.value] * jumlah.value;

    const pesan = `ORDER MARKAS CETAK CUSTOM

Nama: ${nama.value}
WA: ${wa.value}
Kategori: ${kategori.value}
Desain: ${desain.value}
Jumlah: ${jumlah.value}
Total: Rp ${total.toLocaleString()}
Pembayaran: ${metode.value}

Mohon info pembayaran.`;

    window.open(
      "https://wa.me/6285175272990?text=" + encodeURIComponent(pesan),
      "_blank"
    );
  });

});
