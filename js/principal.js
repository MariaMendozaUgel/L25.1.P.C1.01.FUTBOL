import Cl_equipo from "./Cl_equipo.js";
import Cl_Juego from "./Cl_juego.js";
/*/ Conociendo los resultados de varios juegos de tu equipo de fútbol, donde 1 es ganar y 0 es 
perder, hacer un programa que indique el porcentaje de juegos que ganaste. 
Ej. Resultados de 6 juegos: 1, 1, 0, 1, 0, 1,  /*/
let juego1 = new Cl_Juego (1),
    juego2 = new Cl_Juego (1),
    juego3 = new Cl_Juego (0),
    juego4 = new Cl_Juego (1),
    juego5 = new Cl_Juego (0),
    juego6 = new Cl_Juego (1),
    equipo = new Cl_equipo()

equipo.procesarJuegos(juego1)
equipo.procesarJuegos(juego2)
equipo.procesarJuegos(juego3)
equipo.procesarJuegos(juego4)
equipo.procesarJuegos(juego5)
equipo.procesarJuegos(juego6)


alert (`El porcentaje de juegos ganados es: ${equipo.PorcentajeGanados()}`)
