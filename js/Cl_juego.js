export default class Cl_equipo {
   constructor (resultado) {
      this._resultado = +resultado
   }
   set resultado (resultado) {
      this._resultado = +resultado }
   get resultado () {
      return this._resultado  
    }
}