// Alternative syntax to exporting things as modules
// module.exports is essentially an object so just think of it that way

module.exports.items = ['item1', 'item2'];
const person = {
    name: 'Bob',
};


module.exports.singlePerson = person;