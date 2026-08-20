//Variables globales
let divContainer = document.querySelector(".container");
let btnUpload = document.querySelector(".btn-upload");

//Agregar evento al boton
btnUpload.addEventListener("click", () => {
    getImages();
})

//función para obtener imagenes
async function getImages() {
    try{
        let url = "https://jsonplaceholder.typicode.com/photos";
        let pic = await fetch(url);
        let show = await pic.json();
        //console.log(show);
        //primeras 20 imagenes
        let primeras20 = show.slice(0, 20);
        //Mostrar imagenenes con titulo
        let htmlCum="";

            primeras20.forEach((p) => {
                htmlCum +=`
                <h3>Titulo: ${p.title}</h3>
                <img src="${p.thumbnailUrl}" alt="${p.title}" width="50%">
                <hr>
                `
            });
            //Insertamos en el DOM
            divContainer.innerHTML=htmlCum;
    } catch (error) {
        console.log("Error al obtener los datos de la API: ",error)
    }
}