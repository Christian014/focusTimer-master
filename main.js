let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay = document.querySelector(".seconds")

let buttonPlay = document.getElementById("play")
let buttonIncrease = document.querySelector(".increase")
let buttonToDecrease = document.querySelector(".toDecrease")
let buttonStop = document.querySelector(".stop")

let backgroundTree = document.querySelector(".tree")
let backgroundRain = document.querySelector(".rain")
let backgroundHouse = document.querySelector(".house")
let backgroundFire = document.querySelector(".fire")

let musicForest = new Audio('./music/Floresta.wav')
let musicRain = new Audio('./music/Chuva.wav')
let musicHouse = new Audio('./music/Cafeteria.wav')
let musicFire = new Audio('./music/Lareira.wav')

inputForest = document.querySelector(".inputTree")
inputRain = document.querySelector(".inputRain")
inputHouse = document.querySelector(".inputHouse")
inputFire = document.querySelector(".inputFire")

inputForest.addEventListener('input', ()=>{
    volumeMusics(musicForest, inputForest)
})
inputRain.addEventListener('input', ()=>{
    volumeMusics(musicRain, inputRain)
})
inputHouse.addEventListener('input', ()=>{
    volumeMusics(musicHouse, inputHouse)
})
inputFire.addEventListener('input', ()=>{
    volumeMusics(musicFire, inputFire)
})

let minutes = minutesDisplay.textContent
let newMinutes
let interval
let bgBody = document.querySelector("body")

let sol = document.querySelector(".sol")
sol.addEventListener('click', () => {
    sol.classList.add("close")
    lua.classList.remove("close")
    bgBody.style.background = "black"
    changeColorFonts(100)
   document.querySelector("h1").style.color = "white"
    
})

let lua = document.querySelector(".lua")
lua.addEventListener('click', () => {
    sol.classList.remove("close")
    lua.classList.add("close")
    bgBody.style.background = "white"
    changeColorFonts(0)
    document.querySelector("h1").style.color = "black"
})

let icons = document.querySelectorAll(".ph")

backgroundTree.addEventListener("click", iconsTree)

backgroundRain.addEventListener("click", iconsRain)

backgroundFire.addEventListener("click", iconsFire)

backgroundHouse.addEventListener("click", reset)


buttonPlay.addEventListener('click', function(){
    play()
    validTime()
})

buttonStop.addEventListener('click', function(){
    minutesDisplay.textContent = "25"
    secondsDisplay.textContent = "00"
    clearInterval(interval)
    
})
buttonIncrease.addEventListener('click', function(){
    incrementMinutes()
})

buttonToDecrease.addEventListener('click', function(){
    decrementMinutes()
    
    
})

function incrementMinutes(){
    minutes = Number(minutes) + 5

    newMinutes = Number(minutes)


    console.log(newMinutes)
    minutesDisplay.textContent = String(minutes).padStart(2, "0")

}

function decrementMinutes(){
    minutes = Number(minutes) - 5

    newMinutes = Number(minutes)


    console.log(newMinutes)
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
}

function play() {
    let minutesDisplay = document.getElementById('minutes'); // substitua 'minutes' pelo ID correto
    let secondsDisplay = document.getElementById('seconds'); // substitua 'seconds' pelo ID correto

    let interval = setInterval(() => {
        let minutes = Number(minutesDisplay.textContent);
        let seconds = Number(secondsDisplay.textContent);

        if (minutes === 0 && seconds === 0) {
            alert("Tempo esgotado!");
            clearInterval(interval);
        } else {
            if (seconds === 0) {
                minutes -= 1;
                seconds = 59;
            } else {
                seconds -= 1;
            }

            minutesDisplay.textContent = String(minutes).padStart(2, "0");
            secondsDisplay.textContent = String(seconds).padStart(2, "0");
        }
    }, 1000);
}


function validTime(){

    if (Number(secondsDisplay.textContent) == '00' && Number(minutesDisplay.textContent) == '00'){
        alert("Please enter a valid")
        clearInterval(interval)
    }
}

let currentMusic = null

function iconsTree(){
    document.querySelector(".spans-timer").style.color = "white"
    changeColorFonts(100)
    changeBackground("https://i.gifer.com/Ort.gif")

    musicOn(musicForest)
    let inputTree = document.querySelector(".inputTree")
}

function iconsFire(){
    document.querySelector(".spans-timer").style.color = "white"
    changeColorFonts(100)
    changeBackground("https://i.gifer.com/5yE.gif")

    musicOn(musicFire)
}

function iconsRain(){
    document.querySelector(".spans-timer").style.color = "white"
    changeColorFonts(100)
    changeBackground("https://i.gifer.com/KRPm.gif")

    musicOn(musicRain)
}

function reset(){
    document.querySelector("body").style.background = "white"
    changeColorFonts(0)
    document.querySelector("h1").style.color = "black"

    musicOn(musicHouse)
}

function changeColorFonts(value){
    icons[0].style.filter = `invert(${value})`
    icons[1].style.filter = `invert(${value})`
    icons[2].style.filter = `invert(${value})`
    icons[3].style.filter = `invert(${value})`
}

function changeBackground(url){
    document.querySelector("body").style.background = ` url(${url}) no-repeat center `   
    document.querySelector("body").style.backgroundSize = "cover"
}

function musicDisplay(music){
    music.play()
    music.loop = true
}

function musicOn(music){
    if(currentMusic){
        currentMusic.pause()
    }
    currentMusic = music
    musicDisplay(currentMusic)
}

function volumeMusics(music, input){
    music.volume = input.value / 100;
}









