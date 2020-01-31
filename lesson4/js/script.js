var LastModif = new Date(document.lastModified);
    document.getElementById("lastModified").textContent=LastModif;

function toggleMenu(){
    
    document.getElementById("nav").classList.toggle("hide");
}