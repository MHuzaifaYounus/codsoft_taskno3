
for (let index = 0; index <= 9; index++) {
    document.querySelector(`#_${index}`).addEventListener("click", () => {
        document.querySelector("#mainnum").value += index
    })
}
document.querySelector(`#add`).addEventListener("click", () => {
    document.querySelector("#mainnum").value += '+'
})
document.querySelector(`#sub`).addEventListener("click", () => {
    document.querySelector("#mainnum").value += '-'
})
document.querySelector(`#divide`).addEventListener("click", () => {
    document.querySelector("#mainnum").value += '/'
})
document.querySelector(`#multi`).addEventListener("click", () => {
    document.querySelector("#mainnum").value += '*'
})
document.querySelector(`#mode`).addEventListener("click", () => {
    document.querySelector("#mainnum").value += '%'
})
document.querySelector(`.equalbtn`).addEventListener("click", () => {
    let result = document.querySelector("#mainnum").value

    try {
        document.querySelector("#mainnum").value = Math.floor(eval(result) * 100) / 100
    } catch (error) {

        document.querySelector("#mainnum").value = "Math Error =("

    }

})
document.querySelector(`.acbtn`).addEventListener("click", () => {
    document.querySelector("#mainnum").value = ''

})
document.querySelector(`.delbtn`).addEventListener("click", () => {
    document.querySelector("#mainnum").value = document.querySelector("#mainnum").value.toString().slice(0, -1)

})
document.querySelector(`#point`).addEventListener("click", () => {
    document.querySelector("#mainnum").value += '.'

})