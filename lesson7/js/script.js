var lastModif = new Date(document.lastModified);
    document.getElementById("lastModified").textContent=lastModif;

function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}