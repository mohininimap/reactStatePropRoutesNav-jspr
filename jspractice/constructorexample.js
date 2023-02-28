// function Mobile(){

// this.model="3310",

// this.price=function(){
//     document.write(this.model+" this.price Rs. 15000" )
// }
// }

// var samsung=new Mobile();
// var lg=new Mobile();
// samsung.price();
// lg.price();

// -----------------------

// Constructor withparameter 

// function Mobile(model){
// this.model=model;
// document.write("The model is" +model+"<br/>")
// }

// var samsung=new Mobile(" Samsung -Galaxy ");
// var lg=new Mobile("Lg -3306")

// -----------------------------------------

// let a=["abc",4,20,30,50,1,3,10,2,3,1]

// let numbers=a.find(numBig)

// console.log(numbers)

// function numBig(num){
//     return num>20
// }

// ---------------------------
// Object literal

// var obj = {
//     name : "abc",
//     email : "abc@gmail.com",
//     contact : 1234
// }

// document.write(obj.name+" "+obj.email+" "+obj.contact)

// ------------------
// let name = "tom";
// let email = "tom@gmail.com";
// let contact = 12345;

// const obj={
//     name,
//     email,
//     contact
// }

// // OR


// const obj2={
//     emp_name:name,
//     emp_email:email,
//     emp_contact:contact
// }

// document.write(`Name is ${name}  Email is ${email} and contact is ${contact}`)

// ----------------------------------

// arrow function expression

// const add=(a,b)=>{
//     return a+b;
// }

//Very simple and consise syntax
// const add=(a,b)=>a+b;

//Eliminates (),if it has single parameter
// const square=a=>a*a
// ---------------------------
// function findMaxNumber(){
//     console.log(arguments); //arguments[key] =>Its give value
//     return Math.max(...arguments)
// }

// console.log(findMaxNumber(10,30,50,90,20,5))
// ----------------------------------------

// function arrowFun(){
//     console.log(arguments)
// }
// console.log(arrowFun(10,20,40,70,90,20,30))

// ==========================

//nogt defined error

// function text() {
//     var str = "Hello World";
//     return str;
// }
// text()
// console.log(str);

// ---------------------------

// function text() {
//     str = "Hello World"; //It take global scope
//     return str;
// }
// text()
// console.log(str);

// ----------------------------------
//Solution of not defined reference error
// var str;
// function text(){
//     str="Hello javascript ..."
//     return str;
// }

// text();

// console.log(str)
// -------------------------------
// const UserDetails=(name)=>{
//     this.name=name
// }

// const user1=new UserDetails("Jaya"); 
//TypeError: UserDetails is not a constructor.Arrow function we cannot used new keyword


// ----
// function UserDetails(name){
//     this.name=name
//     this.namef=function(){
//         console.log(this.name)
//     }
// }

// const user1=new UserDetails("Jaya"); 
// user1.namef();

// ---------------------------
// let num = ["abc",1,2,3,4,5,6,7,9,10,11,12]
// let data = num.find((b)=>{
// return  b<6 //It return one value that satisfy first from starting
// })

// console.log(data)
// ------------------------
// let num1 = ["abc",1,2,22,4,5,6,7,9,10,11,12]
// let data1 = num1.findIndex((b)=>{
//     // console.log(a,b)
//     return b >9
// })

// console.log(data1)
// ------------------------------
//join()

let a=["virar","vasai","borivali"];
console.log(a.join())
console.log(a.join(" "))
console.log(a.join("_"))
console.log(a.join(" : "))
console.log(a.join(" => "))

// ----------------------------------
// ===============================================================
var newReleases = [
    {
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg&quot;",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470&quot;",
    "rating": [4.0],
    "bookmark": []
    },
    {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg&quot;",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470&quot;",
    "rating": [5.0],
    "bookmark": [{ id: 1432534, time: 65876586 }]
    },
    {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg&quot;",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470&quot;",
    "rating": [4.0],
    "bookmark": []
    },
    {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg&quot;",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470&quot;",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
    }
    ]

    // Q . 1.1- read only id and title and push into blank array
    // let arr=[];
    //  newReleases.map((item)=>{
    //     arr.push(`Id is ${item.id} , Title is  ${item.title}`)
    //  })

    //  document.getElementById("showing_id_title").innerHTML=arr.join("<br/>")

    // ---------------------------

   //Q . 1.2- print bookmark which has a data 
   


   
// let ans2 = newReleases.filter((element)=>{
	
// 	if(element.bookmark.length > 0) {

// 		var first = element.bookmark.map((element)=>{
// 			// console.log(element.id)
// 			document.getElementById('ans2').innerHTML+= `id:- ${element.id}  time:-  ${element.time}  <br>`

// 		})
//   }

// })


let k=newReleases.filter((item)=>item.bookmark.length>0).map((k)=>k.bookmark.map((data)=>
document.getElementById("ans2").innerHTML=`Id is ${data.id} title is ${data.time}`
))

// document.getElementById("ans3").innerHTML=k

// ----------------------------
//1.3- print data if rating is greater than 4
// newReleases.filter((item)=>item.rating>4).map((data)=>{
//     console.log(data.bookmark)
//     document.getElementById("ans4").innerHTML=`Id is ${data.id} title is ${data.title} boxart is ${data.boxart} uri is ${data.uri} rating is ${data.rating} 
    
//     ${data.bookmark[0].id} ${data.bookmark[0].time}`
// })

// --------------------------------

// return statement
function addNum(a,b){
return a+b
}

let ans=addNum(10,30)
document.write(ans)