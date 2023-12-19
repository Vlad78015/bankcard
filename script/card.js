let cardName = document.querySelector(".card__name")
let inputName = document.querySelector(".form__name")
inputName.addEventListener("input", function(){
    let inputNameValue = inputName.value
    cardName.innerHTML = inputNameValue
})

let cardSurname = document.querySelector(".card__surname")
let inputSurname = document.querySelector(".form__surname")
inputSurname.addEventListener("input", function(){
    let inputSurnameValue = inputSurname.value
    cardSurname.innerHTML = inputSurnameValue
})

let cardCvv = document.querySelector(".card__cvv")
let formCvv = document.querySelector(".form__receive-2")
formCvv.addEventListener("click", function(event){
    event.preventDefault()
    let randomCvv = Math.floor(Math.random()*900)+100
    cardCvv.innerHTML = `CVV - ${randomCvv}`
})