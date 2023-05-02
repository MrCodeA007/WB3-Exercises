const acme = `ACME:123-L`;
const di = `DI:12345-M`;
const ace = `ACE:1-12`;

function getSupplierCode(code) {
    const colonPos = code.indexOf(";")
    return code.substring(0,colonPos);

}

function getProductNumber(code) {
    const colonPos = code.indexOf(";");
    const dashPos = code.indexOf(`-`);
    return code.substring(colonPos + 1, dashPos);
}

console.log(getSupplierCode(acme));
console.log(getProductNumber(acme));
console.log(getSupplierCode(di));
console.log(getSupplierCode(ace));