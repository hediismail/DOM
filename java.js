// bouton +
let btnplus = document.getElementsByClassName("qt-plus")
let btnmoin = document.getElementsByClassName("qt-minus")
let qt = document.getElementsByClassName("qt")
let price = document.getElementById("full-price")
let prix = document.getElementsByClassName("prix")



for (let i = 0; i < btnplus.length; i++) {



    btnplus[i].addEventListener("click", function () {
        qt[i].innerHTML = Number(qt[i].innerHTML) + 1
        price.innerHTML = Number(prix[i].innerHTML) + Number(price.innerHTML)

    })

    btnmoin[i].addEventListener("click", function () {

        if (qt[i].innerHTML > 0) {
            qt[i].innerHTML = Number(qt[i].innerHTML) - 1
            price.innerHTML = Number(price.innerHTML) - Number(prix[i].innerHTML)
        }
        else {
            qt[i].innerHTML = 0
        }
    })
}

let heart = document.getElementsByClassName("heart")
for (let i = 0; i < heart.length; i++) {

    heart[i].addEventListener("click", function () {

        if (heart[i].style.color == "white") {
            heart[i].style.color = "red"
        }
        else {
            heart[i].style.color = "white"
        }

    })
}



