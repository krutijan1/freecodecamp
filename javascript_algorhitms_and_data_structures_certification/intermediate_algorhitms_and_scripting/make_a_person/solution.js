const Person = function(firstAndLast) {

  let firstLast = firstAndLast.split(' ');

  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return `${firstLast[0]} ${firstLast[1]}`;
  };

  this.getFirstName = function() {
    return firstLast[0];
  };

  this.getLastName = function() {
    return firstLast[1];
  };

  this.setFirstName = function(firstName) {
    firstLast[0] = firstName;
  };
  
  this.setLastName = function(lastName) {
    firstLast[1] = lastName;
  };

  this.setFullName = function(fullName) {
    firstLast = fullName.split(' ');
  };

  return firstAndLast;
};

const bob = new Person('Bob Ross');

bob.getFullName();
