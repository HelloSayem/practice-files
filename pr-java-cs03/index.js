// Markk=01--------------------------------
// triming;

let sentence = "         Dhaka is a capital of Bangladehs  ";
console.log(sentence.trim());

// Markk=02--------------------------------
// Alart

let notifaction = alert("Now we are learning javaScript ");

// Markk=03--------------------------------

// Prompet

let user = prompt("Enter your full name");

// Markk=04--------------------------------
// Templet Literals

let plenguse = "java script";
let year = 3;
let old = 19;
let outPut = `I wass been learning ${plenguse} last ${year} and naw i'm ${old} Years Old`;
console.log(outPut);

// Markk=05--------------------------------
// User_Data_Calllection

let userame = prompt("Pleac enter your Name");
let userAdde = prompt("Pleac enter your Adde");
console.log(`-Clint Data-
 Name :${userName.trim()}
 Adde :${userAdde.trim()} `);

// Markk=05--------------------------------
// length
let setence = "My name is Sayem";
outPut_sentence = `${setence.trim()}`;
console.log(outPut_sentence.length);
console.log(setence.length);

// // indexOf

console.log(setence.indexOf("S"));

// // charAt
console.log(setence.charAt(5));

// // includ
console.log(setence.includes("m"));

// // search
console.log(setence.search("m"));

// // toUperCase
console.log(setence.toUpperCase());

// // toLowerCase
console.log(setence.toLowerCase());

// // substring
let lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa repellat atque eius. Veritatis maxime vel inventore harum suscipit culpa provident aliquam. Quaerat omnis autem necessitatibus cum veniam in fugit quisquam, recusandae, laudantium tempora magnam dignissimos sit maxime quam asperiores dicta?`;
console.log(lorem.substring(0, 38), "Read More....");

// Markk=06--------------------------------

let userNameCr = prompt("Create A User Name");
let userPasswordCr = prompt("Create A User Password");
let creation = alert("Your Account Creation Successfully");

let userName = prompt("Enter Your User Name");
let userPass = prompt("Enter Your User Password");

if (userName == userNameCr) {
  console.log("Your User Name is Correct");
} else {
  console.log("Your User Name is Incorrect");
}

if (userPass == userPasswordCr) {
  console.log("Your User Password is Correct");
} else {
  console.log("Your User Password is Incorrect");
}

// Markk=07--------------------------------
// finding some one ------------------------------------
let nature = "A B C D E F H I J K L M";
let search = prompt("Fnding Cracter A - M");
let searchValue = nature.toLowerCase().search(search.toLowerCase());
if (searchValue === -1) {
  console.log(`" ${search.toUpperCase()} " Not Found`);
} else {
  console.log(`" ${search.toUpperCase()} " Has Been Found`);
}
