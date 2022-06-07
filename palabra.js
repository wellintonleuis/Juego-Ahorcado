
function agregarPalabra(){
    let dato = document.getElementById('inputTexto').value.toUpperCase();
    let palabrasLocal = JSON.parse(localStorage.getItem("palabras"));
    palabrasLocal.push(dato);
    let palabrasLocalNew = JSON.stringify(palabrasLocal);
    alert(palabrasLocalNew);
    localStorage.setItem('palabras', palabrasLocalNew);

    location.href = "juego.html";  
   
}


console.log(agregarPalabra);