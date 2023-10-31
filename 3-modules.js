// Modules
// In CommonJS, every file is a module by default
// Modules -> Encapsulated code (only share minimum if you can)

// Will be using files 4 and 5

const names = require('./4-names');
// Could also destructure above to const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');

const data = require('./6-alternative-flavor');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

sayHi(data.singlePerson.name);

// Interestingly enough this will invoke the function inside the module 7
// So that code will run if we import that module
// So we aren't exporting the function addValues() but just invoking it due to the module itself
require('./7-mind-grenade');