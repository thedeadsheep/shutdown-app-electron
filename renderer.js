let dateDisplay = document.getElementById('time-display')
let hourNum = document.getElementById('hour-input')
let minNum = document.getElementById('min-input')
let secNum = document.getElementById('sec-input')
let testText = document.getElementById('test-text')

timeCheck()
document.getElementById('cancel-btn')
    .addEventListener('click', () => {
        window.API.childProcess()
    })
document.getElementById('check-btn')
    .addEventListener('click', () => {
        let value = parseInt(hourNum.value) * 3600 + parseInt(minNum.value) * 60 + parseInt(secNum.value) * 1000

        let curDate = new Date()
        let addDate = `${hourNum.value}:${minNum.value}:${secNum.value}`
        const result = ((Date.parse(new Date()) / 1000) + value) * 1000
        const resultDate = new Date(result)
        let text = `${getTime()} + ${addDate} = ${resultDate}`
        testText.innerHTML = text
    })
document.getElementById('hibernate-btn')
    .addEventListener('click', () => {

        console.log(getTime())
    })

secNum.addEventListener('wheel', (event) => {

    if (wheelCheck(event, secNum, "wheel-up", '59')) {
        event.preventDefault()
        secNum.value = secNum.min
    }
    if (wheelCheck(event, secNum, "wheel-down", '0')) {
        event.preventDefault()
        sec.value = secNum.max
    }
})
minNum.addEventListener('wheel', (event) => {

    if (wheelCheck(event, minNum, "wheel-up", '59')) {
        event.preventDefault()
        minNum.value = minNum.min
    }
    if (wheelCheck(event, minNum, "wheel-down", '0')) {
        event.preventDefault()
        minNum.value = minNum.max
    }
})
hourNum.addEventListener('wheel', (event) => {
    console.log(event.deltaY === -100 && hourNum.value === 23)
    if (wheelCheck(event, hourNum, "wheel-up", '23')) {
        event.preventDefault()
        hourNum.value = hourNum.min
    }
    if (wheelCheck(event, hourNum, "wheel-down", '0')) {
        event.preventDefault()
        hourNum.value = hourNum.max
    }
})
function wheelCheck(event, element, wheelEvent, overNum) {
    let value = wheelEvent === "wheel-down" ? 100
        : wheelEvent === "wheel-up" ? -100 : 0
    if (event.deltaY === value && element.value === overNum) {
        return true
    }
    return false
}
function timeCheck() {
    setInterval(() => {
        dateDisplay.innerHTML = getTime()
    }, 1000);
}
function getTime() {
    const time = new Date()
    const currentTime = window.API.dateConvert(time)
    return currentTime
}

