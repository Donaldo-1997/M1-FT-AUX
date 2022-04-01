function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 
    // Tomo las posiciones que tengan el valor 'am' o 'pm'
    // 1 2 : 0 0 : 0 0 A M
    // 0 1 2 3 4 5 6 7 8 9
    // las posiciones 8 y 9 me diran si es de mañana o de tarde
    // 01:00:00PM (13:00:00)
    // 02:00:00PM (14:00:00)
    // 03:00:00PM (15:00:00) ==> 12 + 3 = 15:00:00
    // Ej:
    //      time = '03:00:00PM'
    //                 
    //      timeMilitar = ['03','00','00']
    //      am_pm = 'PM'
    //      timeMilitar = [15, '00', '00']
    //      timeMilitar = '15:00:00'

    // let timeMilitar = time.slice(0,8).split(':') // Me qudo solo con la hora sin el "am" o "pm", y lo convierto en un array
    let hours = time.slice(0,2)
    let minutes = time.slice(3,5)
    let seconds = time.slice(6,8)
    let am_pm = time[8] + time[9] // Tomo el "AM" o el "PM"
    
    // Manejando errores
    if(time === '' || time.length < 10) return false
    if(parseInt(hours) > 12 ) return false
    if(parseInt(minutes) > 60 ) return false
    if(parseInt(seconds) > 60 ) return false
    // Fin manejo errores
    // 03:00:00AM
    if(am_pm === 'PM' && hours !== '12') hours = parseInt(hours) + 12

    if(hours === '12' && am_pm === 'AM') hours = '00'

    return `${hours}:${minutes}:${seconds}`;
}

module.exports = {
    timeConversion
}