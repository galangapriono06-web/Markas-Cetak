const produk = [
  {nama:"Souvenir Nikahan", kategori:"Nikahan", img:"assets/nikahan.jpg"},
  {nama:"Souvenir Kantor", kategori:"Kantor", img:"assets/kantor.jpg"},
  {nama:"Souvenir Custom", kategori:"Custom", img:"assets/custom.jpg"},
  {nama:"Mug Custom", kategori:"Nikahan", img:"assets/mug.jpg"},
  {nama:"Tumbler", kategori:"Kantor", img:"assets/tumbler.jpg"},
  {nama:"Gantungan", kategori:"Custom", img:"assets/gantungan.jpg"}
];

const grid = document.getElementById("grid");

function render(list){
  grid.innerHTML="";
  list.forEach(p=>{
    const div=document.createElement("div");
    div.className="card";
    div.innerHTML=`
      <img src="${p.img}">
      <div class="info">
        <h3>${p.nama}</h3>
        <p>${p.kategori}</p>
      </div>
    `;
    div.onclick = () => {
      window.location = "detail.html?produk=" + encodeURIComponent(p.nama);
    };
    grid.appendChild(div);
  });
}
