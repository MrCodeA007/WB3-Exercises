function displayMailingLabel(name, address, city, state, zip) {
console.log(name);
console.log(address);
console.log(`${city}, ${state}, ${zip}`);

}
//-----------------------------------------------
function addNumbers() {
    const num1 = 64;
    const num2 = 32;
    const result = (num1 + num2);
    console.log(`${num1} + ${num2} = ${result}`);
}
/*
Another Method- 

function addNumbers(num1, num2) {
const sum = num1 + num2;
console.log(`${num1} + ${num2} = ${result};
} 

addNumbers(64, 32);

(------------------------------------------------*/

function displayReceipt(totalDue, amountPaid) {
const changeDue = totalDue - amountPaid;
console.log(`total due; ${totalDue}`);
console.log(`Amount paid; ${amountPaid.toFixed(2)}`);

if (changeDue <= 0) {
    console.log(`Change due; ${Math.abs(changeDue).toFixed(2)}`);
} else {
    console.log(`Owed Amount;${Math.abs(changeDue).toFixed(2)}`);
}
}

const totalDue = 64;

const tooMuch = 128;
const toolittle =10;
const justRight = 64;


//------------------------------------------------
displayMailingLabel(`Alejandro`, "123 Hobbit Hole", "The Shire", "Middle-Earth", "00012");
addNumbers();
displayReceipt(totalDue, tooMuch);
displayReceipt(totalDue, toolittle);
displayReceipt(totalDue, justRight);
