document.querySelector('#orignal').innerHTML = new Date();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
function showOutput(output) {
    document.querySelector('#outPut').innerHTML = output
}
const clearOutput = () => {
    document.querySelector('#outPut').innerHTML = "";
}
const inputValue = () => {
    var d = document.querySelector('.inp').value;
    return d
}
const clickedTime = () => {
    let date = new Date();
    let year = date.getFullYear();
    let mont = date.getMonth();
    let month = months[mont]
    let days = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.getElementById("outPut").innerHTML += `<br><br><br>You Have clicked this button on ${days} ${month} ${year} and the time was ${hours}:${minutes}:${seconds}`
}
// const checkinput=()=>{
//     let dob=inputValue(); 
//     if(!dob){
//         alert("Plz Select date from input area");
//         return;
//     }
// }


document.querySelector("#clear1").addEventListener("click", () => {
    clearOutput()
})
const date = new Date();
// Get Name of the day
document.querySelector(".alert1").addEventListener("click", () => {
    clearOutput()
    let day = date.getDay();
    let dayName = dayNames[day];
    // document.querySelector('#outPut').innerHTML=`${dayName}`;
    showOutput(dayName)
    clickedTime()
})
// Calculate Days Passed since i born
document.querySelector(".alert2").addEventListener("click", () => {
    clearOutput()
    let dob = inputValue();
    if (!dob) {
        alert("Plz Select date from input area");
        return;
    }
    let today = new Date();
    let bornDate = new Date(dob);
    let todayTime = today.getTime();
    let bornDateTime = bornDate.getTime();
    let dod = todayTime - bornDateTime
    let daydiff = dod / (1000 * 60 * 60 * 34);
    let fdiff = Math.floor(daydiff);
    let output = `${fdiff} days have been passed since you born`
    showOutput(output)
    clickedTime()
})
// When is your next Birthday?
document.querySelector(".alert3").addEventListener("click", () => {
    clearOutput()
    let dob = inputValue();
    if (!dob) {
        alert("Plz Select date from input area");
        return;
    }
    let today = new Date();
    let bornDate = new Date(dob);
    let year = today.getFullYear();
    if (bornDate < today) {
        let output = ` Your Birhtday for ${year} has been Already Left `
        showOutput(output)
    } else {
        let todayTime = today.getTime();
        let bornDateTime = bornDate.getTime();
        let dod = bornDateTime - todayTime
        let daydiff = dod / (1000 * 60 * 60 * 34);
        let fdiff = Math.floor(daydiff);
        let output = `${fdiff} days have been left in your birthday`
        showOutput(output)
        clickedTime()
    }
})
//Greet User
const greeting = (user) => {
    showOutput(`Hellow ${user} Welcome to our website `)

};
document.querySelector('.alert4').addEventListener("click", () => {
    let name = prompt("What is your name");
    let user = name;
    greeting(user)
    setTimeout(() => {
        clickedTime()
    }, 1500);
})
//Tell Time 1
document.querySelector('.alert5').addEventListener("click", () => {
    clearOutput()
    setTimeout(() => {
        clickedTime()
    }, 1500);
})
//Tell Time 2
document.querySelector('.alert6').addEventListener("click", () => {
    clearOutput()
    setTimeout(() => {
        clickedTime()
    }, 1500);
})
//Tell Time 3
document.querySelector('.alert7').addEventListener("click", () => {
    clearOutput()

    setTimeout(() => {
        clickedTime()
    }, 1500);
})
// Calculate Tax
document.querySelector('.alert8').addEventListener("click", () => {
    var price=Number(prompt("Enter Price"))
    var taxRate=16;
    var tax=calculateTax(price,taxRate);
    let output=`Tax:${tax}`
    showOutput(output)

})
function calculateTax(price, taxRate) {
    var tax = price * taxRate / 100;
    return tax;
}
// Calculate Total Tax
function calculateTotal(price){
if (price>1000) {
    var taxRate=16;
}else{
    var taxRate=8;
}
var tax=calculateTax(price,taxRate)
var total=price+tax;
console.log(total)
return total;
}
document.querySelector('.alert9').addEventListener("click", () => {
    var price=+prompt("Enter Price")
    var total=calculateTotal(price);
    let output=`"Total:"${total}`
    showOutput(output)

})
//if Else Statement
document.querySelector('.alert10').addEventListener("click", () => {
    let total="<code> <h1> <h2> </code>"
    let output=`"Total:"${total}`
    showOutput(output)

})
