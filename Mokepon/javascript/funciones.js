function cargaHTML(){
    let botonMascotaJugador = document.getElementById("boton-mascotas")
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}


function seleccionarMascotaJugador(){
    let botonMascota1 = document.getElementById("hipodoge")
    let botonMascota2 = document.getElementById("capipepo")
    let botonMascota3 = document.getElementById("ratigueya")
    let botonMascota4 = document.getElementById("langostelvis") 
    let botonMascota5 = document.getElementById("tucapalma")
    let botonMascota6 = document.getElementById("pydos")
    let spanMascotaJugador = document.getElementById("mascotaJugador")

    if(botonMascota1.checked){
        alert("Has seleccionado a Hipodoge")
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (botonMascota2.checked){
        alert("Has seleccionado Capipepo")
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (botonMascota3.checked){
        alert("Has seleccionado Ratigueya")
        spanMascotaJugador.innerHTML = "Ratigueya"
    }else if (botonMascota4.checked){
        alert("Has seleccionado Langostelvis")
        spanMascotaJugador.innerHTML = "langostelvis"
    }else if (botonMascota5.checked){
        alert("Has seleccionado Tucapalma")
        spanMascotaJugador.innerHTML = "Tucapalma"
    } else if(botonMascota6.checked){
        alert("Has seleccionado Pydos")
        spanMascotaJugador.innerHTML = "Pydos"
    } else alert("No has seleccionado a ninguna mascota. Por favor, seleccione una.")    
}


window.addEventListener("load", cargaHTML )