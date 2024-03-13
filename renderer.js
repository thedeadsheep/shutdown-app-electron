let dateDisplay = document.getElementById('time-display')
timeCheck()
document.getElementById('hibernate-btn')

    .addEventListener('click', () => {

        console.log(getTime())
    })

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

