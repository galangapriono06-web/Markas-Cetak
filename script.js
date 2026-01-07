const harga = {
  Nikahan: 5000,
  Kantor: 8000,
  Custom: 10000
};

// AUTO ISI DARI URL
const params = new URLSearchParams(window.location.search);
if (params.get("kategori")) {
  document.getElementById("kategori").value = params.get("kategori");
}
if (params.get("desain")) {
  document.getElementById("desain").value = params.get("desain");
}

["nama","wa","kategori","desain","jumlah"].forEach(id=>{
  document.getElementById(id)?.addEventListener("input", updateInvoice);
  document.getElementById(id)?.addEventListener("change", updateInvoice);
});

function updateInvoice() {
  let nama = namaEl().value;
  let wa = waEl().value;
  let kategori = kategoriEl().value;
  let desain = desainEl().value;
  let jumlah = jumlahEl().value;

  let total = kategori && jumlah ? harga[kategori]*jumlah : 0;

  document.getElementById("invoice").innerHTML = `
  <b>Nama:</b> ${nama||"-"}<br>
  <b>WA:</b> ${wa||"-"}<br>
  <b>Kategori:</b> ${kategori||"-"}<br>
  <b>Desain:</b> ${desain||"-"}<br>
  <b>Jumlah:</b> ${jumlah||"-"}<br>
  <b>Total:</b> Rp ${total.toLocaleString()}
  `;

  document.getElementById("btnWA").disabled =
    !(nama && wa && kategori && desain && jumlah);
}

function kirimWA() {
  let pesan = `ORDER MARKAS CETAK CUSTOM
Nama: ${namaEl().value}
WA: ${waEl().value}
Kategori: ${kategoriEl().value}
Desain: ${desainEl().value}
Jumlah: ${jumlahEl().value}`;

  window.open(
    "https://wa.me/6281215693502?text="+encodeURIComponent(pesan),
    "_blank"
  );
}

function namaEl(){return document.getElementById("nama")}
function waEl(){return document.getElementById("wa")}
function kategoriEl(){return document.getElementById("kategori")}
function desainEl(){return document.getElementById("desain")}
function jumlahEl(){return document.getElementById("jumlah")}
