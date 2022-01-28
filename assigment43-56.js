document.querySelector(".alert1").addEventListener("click", () => {
    let a = Number(prompt("Enter the Number"));
    let b = Number(prompt("Enter the Second Number"));
    if (a > b) {
        console.log(`${a} is bigger then b`)
    } else {
        console.log(`${b} is bigger then a`)
    }
})
document.querySelector(".alert2").addEventListener("click", () => {
    let a = Number(prompt("Enter the Number"));
    let b = Number(prompt("Enter the Second Number"));
    let c = Number(prompt("Enter the Second Number"));
    if (a > 0 && b > 0 && c > 0) {
        alert(`This is + Value`)
    } else if (a < 0 && b < 0 && c < 0) {
        alert(`This is + sign`)
    } else if (a > 0 && b < 0 && c < 0) {
        alert(`This is + sign`)
    } else if (a < 0 && b > 0 && c < 0) {
        alert(`This is + sign`)
    } else {
        alert(`This is - sign`)
    }
})
document.querySelector(".alert3").addEventListener("click", () => {
    let a = Number(prompt("Enter the Number"));
    let b = Number(prompt("Enter the Second Number"));
    let c = Number(prompt("Enter the Second Number"));
    if (a > b && b > c && c < a) {
        alert(`This is Enter Sorted vale ${c},${b},${a}`)
    } else if (a >= b && b <= c && c >= a) {
        alert(`This is Enter Sorted vale ${b},${a},${c}`)
    } else if (a <= b && b <= c && c >= a) {
        alert(`This is Enter Sorted vale ${a},${b},${c}`)
    } else if (a >= c && b >= a && c < a) {
        alert(`This is Enter Sorted vale ${c},${a},${b}`)
    } else if (a >= b && b <= c && c <= a) {
        alert(`This is Enter Sorted vale ${b},${c},${a}`)
    } else {
        alert(`You haven't code this yet`)
    }
})
document.querySelector(".alert4").addEventListener("click", () => {
    for (let i = 0; i <= 15; i++) {
        if (i % 2) {
            console.log(`${i} is even`)
        } else {
            console.log(`${i} is odd`)
        }
    }
})
var students = [['Ahsan', 80], ['Bilal', 77], ['Ahmed', 88], ['Ibraheem', 95], ['Faisal', 68]];
var avgmarks = 0;
var mark = 0;
var grade="";
document.querySelector(".alert5").addEventListener("click", () => {
    for (var i = 0; i < students.length; i++) {
        avgmarks += students[i][1];
        mark = students[i][1];
        var studentName = students[i][0];
        var avg = (avgmarks / students.length)
        if (mark<60) {
            grade="F"
        } else if(mark<70) {
            grade="D"
        }else if(mark<80){
            grade="C"
        }else if(mark<90){
grade="B"
        }else{
            grade="A"
        }

        console.log(`Student Name is "${studentName}" and obtained Marks are: ${mark} and grade is ${grade}  `);
    }
    console.log(`Total ${students.length} Students Attend test`)
    console.log(`Total Marks obtained:${avgmarks} out of 500`)
    console.log(`Average Marks: ${(avgmarks) / students.length}`)
    if (avg < 60) {
        console.log("Grade : F");
    }
    else if (avg < 70) {
        console.log("Grade : D");
    }
    else if (avg < 80) {
        console.log("Grade : C");
    } else if (avg < 90) {
        console.log("Grade : B");
    } else{
        console.log("Grade : A");
    }
})
document.querySelector(".alert6").addEventListener("click", () => {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + "FizzBizz");
        }
        else if (i % 3 === 0) {
            console.log(i + "Fizz");
        }
        else if (i % 5 === 0) {
            console.log(i + "Bizz");
        } else {
            console.log(i);
        }
    }
})
document.querySelector(".alert7").addEventListener("click", () => {
    for (var i = 1; i <= 1000; i++) {
        for (var j = 1; j < 100; ++j) {
            for (var k = 1; k < 1000; ++k) {
                var pow = (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3))
                var plus = (i * 1000 + j * 10 + k);
                if (pow == plus) {
                    console.log(pow);
                }
            }

        }
    }
}
)
var x,y,chr;
document.querySelector(".alert8").addEventListener("click", () => {
for (i=0;i<6;i++){
    for(k=0;k<i;k++){
        var chr=chr+("*");

    }
    console.log(chr)
    chr='';
}
});
var sum=0;
document.querySelector(".alert9").addEventListener("click", () => {
for (let i=0;i<100;i++){
        if(i%3===0 || i%5===0){
            sum+=i
            console.log(i)
        }
    }
    console.log(sum)
});