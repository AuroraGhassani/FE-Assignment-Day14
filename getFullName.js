function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = { firstName: "Aurora", lastName: "Ghassani" };
console.log(getFullName(person)); // Output: "Aurora Ghassani"
