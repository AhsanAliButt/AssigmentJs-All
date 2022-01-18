// Chapter 1-5 Start
document.getElementById('add').onclick=function(){
    let a = Number(prompt("Plz Enter First number"));
    let b = Number(prompt("Plz Enter second number"));
    const c=a+b;
    console.log(c)
    alert(`${a} + ${b} = ${c}`);
};
document.getElementById('sub').onclick=function(){
    let a = Number(prompt("Plz Enter First number"));
    let b = Number(prompt("Plz Enter second number"));
    const c=a-b;
    console.log(c)
    alert(`${a} - ${b} = ${c}`);
};
document.getElementById('mul').onclick=function(){
    let a = Number(prompt("Plz Enter First number"));
    let b = Number(prompt("Plz Enter second number"));
    const c=a*b;
    console.log(c)
    alert(`${a} * ${b} = ${c}`);
};
document.getElementById('div').onclick=function(){
    let a = Number(prompt("Plz Enter First number"));
    let b = Number(prompt("Plz Enter second number"));
    const c=a/b;
    console.log(c)
    alert(`${a} / ${b} = ${c}`);
};
document.getElementById('name').onclick=function(){
    let a = prompt("Plz Enter First name");
    let b = prompt("Enter Middle name ");
    let c = prompt("Enter your last name");
    alert(`My name is ${a} ${b} ${c}`);
};
document.getElementById('bio').onclick=function(){
    let a = prompt("Plz Enter Full name");
    let b = Number(prompt("Plz Enter Your rollnumber"));
    let c=a+b;
    alert(`My name is ${a} and my roll number is ${b}`);
};
// Chapter 1-5 End
// Chapter 6-10 Starts here
document.getElementById('alert1').onclick=function(){
    let a = Number(prompt("Plz Enter First number"));
    let b = Number(prompt("Plz Enter second number"));
    document.getElementById('result').innerHTML=`${a} + ${b} = ${a+b}`
};
document.getElementById('alert2').onclick=function(){
    let a = Number(prompt("Plz Enter First number"));
    let b = Number(prompt("Plz Enter second number"));
    document.getElementById('result').innerHTML=`${a} - ${b} = ${a-b}`
};
document.getElementById('alert3').onclick=function(){
    let a = Number(prompt("Plz Enter First number"));
    let b = Number(prompt("Plz Enter second number"));
    document.getElementById('result').innerHTML=`${a} X ${b} = ${a*b}`
};
document.getElementById('alert4').onclick=function(){
    let a = Number(prompt("Plz Enter First number"));
    let b = Number(prompt("Plz Enter second number"));
    document.getElementById('result').innerHTML=`${a} / ${b} = ${a/b}`
};
document.getElementById('alert5').onclick=function(){
    let a = prompt("Plz Enter FirstName");
    let b = prompt("Plz Enter MiddlName");
    let c = prompt("Plz Enter LastName");
    document.getElementById('result').innerHTML=` My name is ${a} ${b} ${c}`
};
document.getElementById('alert20').onclick=function(){
    debugger
    let user;
    user=document.getElementById("user").value
    let password;
    password=document.getElementById("pass").value
    if(user=='Ahsan' && password=="Ali"){
    console.log(`${user} ${password}`)
    document.getElementById('conarg').innerHTML=`Congrats Yor are succesfully logged in`
}else{

alert("Plz enter Valid id and password")
}};
document.getElementById('alert21').onclick=function(){
    debugger
    let email;
    email=document.getElementById("mail").value
    let num;
    num=document.getElementById("num").value
    if(email=='Ahsan@icloud.com' || num=="345"){
    console.log(`${email} ${num}`)
    document.getElementById('conarg').innerHTML=`Recover email or code has been sent`
}else{

alert("Plz enter Valid Email or Mobilenumber")
}};
let orignaltext="I Love my country Pakistan.<br> I Like my city Faisalabad.<br> I Love my Homeland"
let cities=['Karachi','Multan','Faisalabad','Lahore','Rawalpindi','Islamabad','Queta','Sanjavi','Mardan','Peshawar'];
document.getElementById('otext').innerHTML=orignaltext;

const showOutput=(output)=>{
    document.getElementById('opt').innerHTML=output;
}
const clearOutput=()=>{
    document.getElementById('opt').innerHTML="";
}
const clearInput=()=>{
    document.getElementById('inpt')="";
}
const inputValue=()=>{
   return document.getElementById('inpt').value;
}
// LowerCase Function
document.getElementById('alert41').onclick=function(){
    let lowerCaseText=orignaltext.toLowerCase();
    showOutput(lowerCaseText)
    console.log(lowerCaseText)
}
// UpparCase function
document.getElementById('alert32').onclick=function(){
    let UpparCaseText=orignaltext.toUpperCase();
    showOutput(UpparCaseText)
    console.log(UpparCaseText)
}
// CapitalizeText
document.getElementById('alert33').onclick=function(){
    let capitalizeText='<span style="text-transform:capitalize;">'+orignaltext+'</span>'
    showOutput(capitalizeText)
}
// better formating
document.getElementById('alert34').onclick=function(){
    let text=inputValue();
    text=text.toLowerCase()
    if(!text){
        alert("Please type your text.");
        return;
    }
    showOutput(text);
}
// Print All Cities 
document.getElementById('alert35').onclick=function(){
    clearOutput()
    for(let i=0;i<cities.length;i++){
    let num=i+1;
    document.getElementById('opt').innerHTML+=num+" - "+cities[i]+"<br>";
    }

}
// Add city into the list
document.getElementById('alert36').onclick=function(){
    let city=inputValue();
    console.log(city.length);
    if(!city){
        alert("please Enter Your City");
        return;
    }
    cityFirstLetter=city.charAt(0).toUpperCase();
    cityAllLetters=city.slice(1).toLowerCase();
    cityWordInCapitalize= cityFirstLetter+cityAllLetters;
    let cityFound=false;
    for(let i=0;i<cities.length;i++){
        if(cities[i] === cityWordInCapitalize){
            cityFound=true;
            let html='<span style="color:green; font-size:20px;">"'+cityWordInCapitalize+'"</span> is Already in the List.';
            showOutput(html)
        }
    }
    if(cityFound==false){
        cities.push(cityWordInCapitalize);
        let html='<span style="color:green; font-size:20px;">"'+cityWordInCapitalize+'"</span> Has been Added Successfully. ';
        showOutput(html)
    

}};
document.getElementById('alert37').onclick=function(){
    let city=inputValue();
    console.log(city.length);
    if(!city){
        alert("please Enter Your City");
        return;
    }
    cityFirstLetter=city.charAt(0).toUpperCase();
    cityAllLetters=city.slice(1).toLowerCase();
    cityWordInCapitalize= cityFirstLetter+cityAllLetters;
    let cityFound=false;
    for(let i=0;i<cities.length;i++){
        if(cities[i] === cityWordInCapitalize){
            cityFound=true;
            let html='<span style="color:green; font-size:20px;">Congrats We Found "'+cityWordInCapitalize+'"</span> in the List';
            showOutput(html)
        }
    }
    if(cityFound==false){
        let html='<span style="color:green; font-size:20px;"> We didnt Found "'+cityWordInCapitalize+'"</span> in the List  ';
        showOutput(html)
    

}};
document.getElementById('alert38').onclick=function(){
    let newOrignalText=orignaltext.toLowerCase();
    let word=inputValue();
    if(!word){
        alert("Please Enter the word you want to search")
        return;
    }
    word=word.toLowerCase();
    let findWord=newOrignalText.indexOf(word);
    if(findWord!== -1){
        let html='Your Word <span style="color:blue; font-size:18px;">"'+word+'" Found at index of "'+ findWord +'"</span>';
        showOutput(html)
    }
}
document.getElementById('alert39').onclick=function(){
    let newOrignalText=orignaltext.toLowerCase();
    let word=inputValue();
    if(!word){
        alert("Please Enter the word you want to search")
        return;
    }
    let replaceWith=prompt("Plz Enter A word That u want to replace")
    if (!replaceWith){
        alert("Please type a word replace with" +word +".");
        return;
    }
    word=word.toLowerCase();
    word= new RegExp(word,'g');
    replaceWith=replaceWith.toLowerCase();
    let replaceWord=newOrignalText.replace(word,replaceWith);
    showOutput(replaceWord)
}
// Chapter 26-30
//Round a Number
let newNumbers="25.66098"
document.getElementById('stext').innerHTML='<span style="color:blue; font-size:30px;">'+newNumbers+'</span>';

const showoutput=(Output)=>{
    document.getElementById('sopt').innerHTML=Output;
}
const clearoutput=()=>{
    document.getElementById('sopt').innerHTML="";
}
const clearinput=()=>{
    document.getElementById('sinpt')="";
}
const inputvalue=()=>{
   return document.getElementById('sinpt').value;
}
document.getElementById('alert51').onclick=function(){
    let number=inputvalue();
    if(!number){
        alert("plz enter a floating point number")
    }
    let roundTheNumber=Math.round(number);
    let html="<h1 class='text-primarytheme mb-0'>"+roundTheNumber+"</h1>"
    showoutput(html)
}
document.getElementById('alert52').onclick=function(){
    let number=inputvalue();
    if(!number){
        alert("plz enter a floating point number")
    }
    let ceilTheNumber =Math.ceil(number);
    let html="<h1 class='text-primarytheme mb-0'>"+ceilTheNumber+"</h1>"
    showoutput(html)
}

document.getElementById('alert53').onclick=function(){
    let number=inputvalue();
    if(!number){
        alert("plz enter a floating point number")
    }
    let floorTheNumber=Math.floor(number);
    let html="<h1 class='text-primarytheme mb-0 text-130px;'>"+floorTheNumber+"</h1>"
    showoutput(html)
}
document.getElementById('alert54').onclick=function(){
    let randomNumber=Math.random()*10;
    let newrandomnumber=Math.round(randomNumber)
    let html="<h1 class='text-primarytheme mb-0 text-130px;'>"+newrandomnumber+"</h1>"
    showoutput(html)
}
document.getElementById('alert55').onclick=function(){
    let randomNumber=Math.random();
    randomNumber=(randomNumber*6)+1;
    let dice=Math.floor(randomNumber);
    let html="<h1 class='text-primarytheme mb-0 text-130px;'>"+dice+"</h1>"+"<br>"+"Generate Random Number from 1-6"
    showoutput(html)
}
document.getElementById('alert56').onclick=function(){
    let length=inputvalue();
    if(!length){
        alert("Please Enter length")
        return;
    }
    let randomPassword="";
    let upparCaseAlphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseAlphabets="abcdefghijklmnopqrstuvwxyz";
    let numbers="0123456789";
    let possiblePassword=lowerCaseAlphabets+upparCaseAlphabets+numbers
    for(let i=0;i<length;i++){
        let randomNumber=Math.random();
        randomPassword+=possiblePassword.charAt(Math.floor(randomNumber * possiblePassword.length));
    }
    let html="<h1 class='text-primarytheme mb-0 text-130px;'>"+randomPassword+"</h1>"+"<br>"+"Generate Random Powerfull Password"
    showoutput(html)
}
document.getElementById('alert57').onclick=function(){
    let num=inputvalue();
    if(!num){
        alert("Please Enter length")
        return;
    }
    console.log(typeof num)
    num=parseInt(num)
    num=parseFloat(num)
    console.log(typeof num)
    let html="<h1 class='text-primarytheme mb-0 text-130px;'>"+num+"</h1>"+"<br>"+"Generate Random Powerfull Password"
    showoutput(html)
}
document.getElementById('alert58').onclick=function(){
    let num=inputvalue();
    if(!num){
        alert("Please Enter length")
        return;
    }
    console.log(typeof num)
    num=parseInt(num)
    console.log(typeof num)
    num=num.toFixed(2);
    console.log(typeof num)
    console.log(num)
    let html="<h1 class='text-primarytheme mb-0 text-130px;'>"+num+"</h1>"+"<br>"+"Generate Random Powerfull Password"
    showoutput(html)
}
document.getElementById('alert59').onclick=function(){
    let num=inputvalue();
    if(!num){
        alert("Please Enter length")
        return;
    }
    num=Number(num);
    let gst=(num/100)*17;
    let totalBill=gst+num;
    let html=`<h1 class='text-primarytheme mb-0 text-130px;'>Your bill is --${num}<br>Your GST is-- ${gst}<br> Your Total-- ${totalBill}`
    showoutput(html)
}
// document.querySelector(".number").addEventListener("click",()=>{
//     let number= document.querySelector(".number").value;
//     console.log(number)
//     var working = document.querySelector("#working").value+=number;
// })
