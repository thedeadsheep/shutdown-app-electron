document.getElementById("help").addEventListener('click', ()=>{
    window.API.message("setTimeInterval", "Test")
})
document.getElementById("Cancel").addEventListener('click',()=>{
    window.API.closeApp()
})
document.getElementById("OK").addEventListener('click',()=>{

})
let timeCheckbox = document.getElementById("after-time")
let timeInputStyle =  document.getElementById("time-input").classList 
timeCheckbox.addEventListener('change', (event)=>{
    if (event.target.checked){
        //show
        timeInputStyle.remove ('hide-time')
    }else{
        timeInputStyle.add('hide-time')
    }
})
