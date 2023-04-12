//Funciones

function aleatorio(min, max){
    return Math.floor( Math.random()*(max-min+1)+min)
} 

function eleccion(jugada){
    let resultado = " "
    if(jugada == 1){
        resultado = "Piedra"
    } else if (jugada == 2){
        resultado = "Papel"
    } else if (jugada == 3 ){
        resultado = "Tijera"
    } else resultado = "Que elegiste?"
    return resultado
}

function combate () {
    if(jugador == pc){
        resultadoCombate = "Empate"
    } else if (jugador == 2 && pc == 1 || jugador == 1 && pc == 3||jugador == 3 && pc == 2){
        resultadoCombate = "Ganaste"
    } else {
        resultadoCombate = "Perdiste"
    }
alert(resultadoCombate)
}

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0
while(triunfos < 3 && perdidas < 3 ){
    let pc = aleatorio(1,3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel y 3 para tijera")
    alert("Tu elegiste " + eleccion(jugador))
    alert("PC eligió " + eleccion(pc))
    combate()
    if (resultadoCombate == "Ganaste"){
        triunfos = triunfos + 1
    } else if (resultadoCombate == "Perdiste") {
        perdidas = perdidas + 1
    }
}
alert("Tus victorias son: " + triunfos + " veces." + " Tus perdidas son: "+perdidas+" veces.")

