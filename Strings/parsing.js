function parseAndDisplayName(fullName) {
   
console.log(`Name: ${fullName}`)
console.log(`First Name: ${fullName.substring(0,9)} `)
console.log(`Last Name: ${fullName.substring(10,15)} `)

}


 parseAndDisplayName("Alejandro Regus");


/*Proper way to do it if wanting to apply other names 
function parseAndDisplayName(fullName){

let spacePos = fullName.indexOf(` `);
let firstName = fullName.substring(0, spacePos);
let lastName = fullName.substring(spacePos + 1); 
}*/

