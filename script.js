const startNumber = 9
const flipCard = document.querySelector(".flip-card")
const topHalf = flipCard.querySelector(".top")
const bottomHalf = flipCard.querySelector('.bottom');
const bottomFlip = document.createElement("div")
const topFlip = document.createElement("div")
topFlip.classList.add("top-flip")
bottomFlip.classList.add("bottom-flip")

top.textContent = startNumber
bottomHalf.textContent = startNumber
topFlip.textContent = startNumber
bottomFlip.textContent = startNumber + 1

topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = startNumber - 1
})
topFlip.addEventListener("animationend", e => {
    topFlip.remove()
})
bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = startNumber - 1
    bottomFlip.remove()
})
flipCard.append(topFlip, bottomFlip)


const countToDate = new Date("2022-04-02")
let previousTimeBetweenDates
setInterval(() => {
    const currentDate =  new Date ().setHours(new Date().getHours() + 24)
    const timeBetweenDates = Math.ceil((currentDate - countToDate) / 
    flipAllCards(timeBetweenDates)

    previousTimeBetweenDates = timeBetweenDates
}, 250) 

function flipAllCards(time) {
    const seconds = time % 60
    const minutes = Math.floor (time / 60) % 60
    const hours = Math.floor(time / 3600)

    flip(document.querySelector("[data-hours-tens]")), Math.floor(hours / 10)
    flip(document.querySelector("[data-hours-ones]")), hours % 10)
    flip(document.querySelector("[data-hours-tens]")), Math.floor(minutes / 10)
    flip(document.querySelector("[data-hours-ones]")), minutes % 10)
    flip(document.querySelector("[data-hours-tens]"), Math.floor(seconds / 10)
    flip(document.querySelector("[data-hours-ones]"), seconds % 10)

}

function flip(flipCard, newNumber) {
    const topHalf = flipCard.querySelector(".top")
    const startNumber = parseInt(topHalf.textContent)

    if (newNumber == startNumber) return

    const bottomHalf = flipCard.querySelector('.bottom');
    const bottomFlip = document.createElement("div")
    const topFlip = document.createElement("div")
    topFlip.classList.add("top-flip")
    bottomFlip.classList.add("bottom-flip")
    
    top.textContent = startNumber
    bottomHalf.textContent = startNumber
    topFlip.textContent = startNumber
    bottomFlip.textContent = startNumber + 1
    
    topFlip.addEventListener("animationstart", e => {
        topHalf.textContent = startNumber - 1
    })
    topFlip.addEventListener("animationend", e => {
        topFlip.remove()
    })
    bottomFlip.addEventListener("animationend", e => {
        bottomHalf.textContent = startNumber - 1
        bottomFlip.remove()
    })
    flipCard.append(topFlip, bottomFlip)