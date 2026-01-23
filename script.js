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
    div.onclick=()=>alert("Klik: "+p.nama);
    grid.appendChild(div);
  });
}

render(produk);

document.querySelectorAll(".tab").forEach(tab=>{
  tab.onclick=()=>{
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
    const cat=tab.innerText;
    if(cat=="Populer") render(produk);
    else render(produk.filter(p=>p.kategori==cat));
  };
});});
