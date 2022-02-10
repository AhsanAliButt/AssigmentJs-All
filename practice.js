// let plan1={
//     name:"Plan1",
//     price:4,
//     space:100,
//     data:1000,
//     pages:10,
//     discountMonths:[1,2]
// };
// var size=Object.keys(plan1).length;
// // console.log(`${typeof plan1}`)
// // console.log(`${plan1.name}`);
// // console.log(`${plan1.price}`);
// // console.log(`${plan1.discountMonths[1]}`);
// // console.log(plan1);
// // console.log(size);
// plan1.company="Honda"
// // console.log(plan1);
// delete plan1.company
// // console.log(plan1);
// plan1.name="BestPlan"
// // console.log(plan1);
// plan1.calculateTotal=()=>{
//   return plan1.price * 12
// }
// console.log(plan1.calculateTotal())
// plan1.bestplan=()=>{
//   debugger
//   var bestprice=plan1.price
//   var date=new Date();
//   var currmonth=date.getMonth();
//   for(var i=0;i<plan1.discountMonths.length;i++){
//     if(plan1.discountMonths[i]===currmonth){
//       bestprice=plan1.price * .8;
//       break;
//     }
//   }
//   return bestprice * 12
// }
// // console.log(plan1)
// // var myArray = [];
// console.log(plan1.bestplan());
// debugger
// let i = 5;
// while (i > 0) {
//     myArray.push(i);
//     i--;
// }
// console.log(myArray)
// console.log(myArray)
// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
// };
// console.log(recordCollection[2548]);
function Plan(name,price,pages){
  this.name=name;
  this.price=price;
  this.pages=pages;
}
let plan1=new Plan("Basic",400,100);
console.log(plan1)
for (i = 0; i < 5; i++) {
	if(i + 1 === 2)
		continue

	console.log(i+1)
	
	if(i === 3)
		break
}