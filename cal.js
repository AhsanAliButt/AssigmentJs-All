 document.querySelector("#output").value="0.00";
// Clear Function
 document.querySelector("#clear").addEventListener("click",()=>{
    document.querySelector("#output").value=" ";
    document.querySelector("#working").value=" ";
});
// // Backspace function
// document.querySelector(".back").addEventListener("click",()=>{
//     document.querySelector("working").value.splash(0,2)
// })
//calculator  
document.querySelectorAll('.calc').forEach(calc => {
    calc.addEventListener('click', function() {
    const entry = this.value;
    document.querySelector('#working').value += entry;
    });
    });
document.querySelector("#equal").addEventListener("click",()=>{
    debugger
    let equal= document.querySelector("#working").value
    let output =document.querySelector("#output").value=eval(equal)
    output=eval(output)
});
setInterval(setClock,1000)
let hourHand=document.querySelector('[data-hour-hand]')
let minuteHand=document.querySelector('[data-minute-hand]')
let secondHand=document.querySelector('[data-second-hand]')
function setClock(){
    const date=new Date()
    const secondsRatio=date.getSeconds()/60
    const minutesRatio=(secondsRatio+date.getMinutes())/60
    const hoursRatio=(minutesRatio+date.getHours())/12
    setRotation(secondHand,secondsRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hourHand,hoursRatio)
}
function setRotation(element, rotationRation){
    element.style.setProperty('--rotation', rotationRation * 360)
}
setClock()
console.log(setClock())