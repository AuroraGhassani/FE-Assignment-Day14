type Person = {
    firstName: string;
    lastName: string;
  };
  
  function getFullName(person: Person): string {
    return `${person.firstName} ${person.lastName}`;
  }
  
  const person: Person = { firstName: "Aurora", lastName: "Ghassani" };
  console.log(getFullName(person)); // Output: "Aurora Ghassani"