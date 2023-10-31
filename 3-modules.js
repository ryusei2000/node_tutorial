// Modules
// In CommonJS, every file is a module by default
// Modules -> Encapsulated code (only share minimum if you can)

// Will be using files 4 and 5

const names = require('./4-names');
// Could also destructure above to const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);