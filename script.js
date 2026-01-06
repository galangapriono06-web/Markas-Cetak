function kirimWA() {
  let nama = document.getElementById('nama').value;
  let wa = document.getElementById('wa').value;
  let jenis = document.getElementById('jenis').value;
  let jumlah = document.getElementById('jumlah').value;

  if (!nama || !wa || !jenis || !jumlah) {
    alert("Mohon lengkapi semua data!");
    return;
  }

  let pesan = `Halo Markas Cetak Custom,
Saya ingin memesan souvenir.

Nama : ${nama}
No WA : ${wa}
Jenis Souvenir : ${jenis}
Jumlah : ${jumlah}

Mohon info estimasi & konfirmasi.`;

  let admin = '628XXXXXXXXXX'; // GANTI nomor admin kamu
  window.open(
    `https://wa.me/${6281215693502}?text=${encodeURIComponent(pesan)}`,
    '_blank'
  );
}
