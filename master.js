let temp = 0
let sec = document.querySelector("body>main>section")
document.querySelector(".next").addEventListener("click", () => {
    temp -= 60
    sec.style.transform = `rotateY(${temp}deg)`

})
document.querySelector(".previous").addEventListener("click", () => {
    temp += 60
    sec.style.transform = `rotateY(${temp}deg)`
})