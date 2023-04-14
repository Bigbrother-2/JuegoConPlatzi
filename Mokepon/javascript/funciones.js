//Carga las funciones, y con el el window.addEventListerner("load", cargaHTML). Que significa? Significa que primero carga el HTML y luego carga la funcion cargaHTML(). De esta manera, cuando apretamos el boton de seleccionar mascotas, llama a otra funcion llamada seleccionarMascotaJugador y ahi, carga las demas cosas que hace la funcion.


//Variables globales para usar en cualquier funcion 

let ataqueJugador = "" 

let ataqueDeLaPC =""
//Funcion para cargar el html y luego las funciones
function cargaHTML(){
        //Esto dice que traiga el boton de mascotas y luego este boton accedemos al escuchador de eventos y cuando se haga un click, cargue la funcion seleccionarMascotaJugador
        let botonMascotaJugador = document.getElementById("boton-mascotas")
        botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
        //Esto es para los botones de ataque. Misma logica que de arriba, carga el html y cuando escucha el click hace lo que se le dice. 
        let botonFuego = document.getElementById("boton-fuego")
        botonFuego.addEventListener("click", ataqueFuegoJugador)
        let botonAgua = document.getElementById("boton-agua")
        botonAgua.addEventListener("click", ataqueAguaJugador)
        let botonTierra = document.getElementById("boton-tierra")
        botonTierra.addEventListener("click", ataqueTierraJugador)
}

//Funcion para seleccion de mascota. 
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
        spanMascotaJugador.innerHTML = "Langostelvis"
    }else if (botonMascota5.checked){
        alert("Has seleccionado Tucapalma")
        spanMascotaJugador.innerHTML = "Tucapalma"
    } else if(botonMascota6.checked){
        alert("Has seleccionado Pydos")
        spanMascotaJugador.innerHTML = "Pydos"
    } else alert("No has seleccionado a ninguna mascota. Por favor, seleccione una.") 
    
    /* Se pone la funcion del enemigo aca para que despues de haber elegido nuestra mascota, la pc elija una. Entonces llamamos aqui la funcion */

    mascotaEnemigo()
}

//Funcion para seleccion mascota de la computadora

/*COMENTARIO SUPER IMPORTANTE. Si queremos que una funcion se ejecute detras de otra como en este caso que queremos que una vez terminada la seleccion de la mascota que elegimos, queremos ver que mascota selecciono la pc. Para eso, invocamos la funcion mascotaEnemigo en la funcion de arriba (seleccionarMascotaJugador). Para que seguido de haber elegido nostros, eliga la pc. 
Vamos a comentar lo que hicimos en la funcion mascotaEneniga. Primero que nada, para seleccionar una mascota enemiga debe hacerse de forma random, para eso hacemos una funcion aparte llamada mascotaEnemigaRandom. con parametros de min y max. Para despues invocarla en la funcion mascotaEnemiga, la guardamos en una variable e invocamos a la funcion con los parametros(En este caso 1 y 6 poque 6 son el total de las mascotas). Luego de ello, escribimos una variable para traer la etiqueta de span donde se escribira el nombre de la mascota enemiga. Luego de eso, como en el piedra, papel o tijeras ahcemos un condicional. En donde dice que si mascotaAleatoria == 1 pasa determinada cosa como mostrar la alerta y reescribir el nombre de la mascota escogida. 
*/

function mascotaEnemigo (){
    let mascotaAleatoria = numeroRandom(1,6)
    let spanMascotaEnemiga = document.getElementById("mascotaEnemigo")
    if (mascotaAleatoria == 1){
        alert("La mascota enemiga es Hipodoge")
        spanMascotaEnemiga.innerHTML = "Hipodoge"
    } else if (mascotaAleatoria == 2){
        alert("La mascota enemiga es Capipepo")
        spanMascotaEnemiga.innerHTML = "Capipepo"
    }else if (mascotaAleatoria == 3){
        alert("La mascota enemiga es Ratigueya")
        spanMascotaEnemiga.innerHTML = "Ratigueya"
    }else if (mascotaAleatoria == 4){
        alert("La mascota enemiga es Langostelvis")
        spanMascotaEnemiga.innerHTML = "Langostelvis"
    }else if (mascotaAleatoria == 5){
        alert("La mascota enemiga es Tucapalma")
        spanMascotaEnemiga.innerHTML = "Tucapalma"
    }else if (mascotaAleatoria == 6){
        alert("La mascota enemiga es Pydos")
        spanMascotaEnemiga.innerHTML = "Pydos"
    }
}

//Funcion para tirar una mascota random. Se va a usar en otra funcion de la mascota del enemigo
function numeroRandom(min, max){
    return Math.floor(Math.random()*(max - min + 1)+min)
}

//Funciones de ataques 


/*ATAQUE DE LOS JUGADORES */
function ataqueFuegoJugador(){
    let nombreDelAtaque = document.getElementById("nombreAtaque")
    nombreDelAtaque.innerHTML ="Fuego"
    
    alert("Has elegido el ataque de Fuego. ")
    ataqueJugador = "Fuego"
    

    ataqueAleatorioPC() 
}

function ataqueAguaJugador(){
    let nombreDelAtaque = document.getElementById("nombreAtaque")
    nombreDelAtaque.innerHTML ="Agua"
    
    alert("Has elegido el ataque de Agua. ")
    ataqueJugador = "Agua"
    
    ataqueAleatorioPC()
}
function ataqueTierraJugador(){
    let nombreDelAtaque = document.getElementById("nombreAtaque")
    nombreDelAtaque.innerHTML ="Tierra"
    
    alert("Has elegido el ataque de Tierra. ")
    ataqueJugador = "Tierra"

    ataqueAleatorioPC()
}

/*ATAQUE DE LA PC */

function ataqueAleatorioPC (){
    let ataqueRandom = numeroRandom(1,3)
    let spanAtaqueRandom = document.getElementById("ataquePC")

    if(ataqueRandom == 1){
        alert("El enemigo escogio el ataque de Agua")
        spanAtaqueRandom.innerHTML = "Agua"
        ataqueDeLaPC = "Agua"
    } else if (ataqueRandom == 2){
        alert("El enemigo escogio el ataque de Fuego")
        spanAtaqueRandom.innerHTML = "Fuego"
        ataqueDeLaPC = "Fuego"
    }else if (ataqueRandom == 3){
        alert("El enemigo escogio el ataque de Tierra")
        spanAtaqueRandom.innerHTML = "Tierra"
        ataqueDeLaPC = "Tierra"
    }
}

window.addEventListener("load", cargaHTML )