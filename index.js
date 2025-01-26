/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")

const lengthTextEl = document.getElementById("length-text-el")
const volumeTextEl = document.getElementById("volume-text-el")
const massTextEl = document.getElementById("mass-text-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

btnEl.addEventListener("click", function () {
    let baseValue = inputEl.value

    lengthTextEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} gallons = ${(baseValue / meterToFeet).toFixed(3)}`

    volumeTextEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)}`

    massTextEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds  = ${(baseValue / kiloToPound).toFixed(3)}`

})