const fs = require('fs');

module.exports = {
    query,
    getById,
    remove,
    update,
    add
}
const toys = require('../data/toy.json');
const LIMIT = 3;

function query(filterBy) {
    if (filterBy.inStock) {
        if (filterBy.inStock.toLowerCase() === 'true') filterBy.inStock = true;
        else if (filterBy.inStock.toLowerCase() === 'false') filterBy.inStock = false;
    }
    console.log("stock", !filterBy.inStock)
    let filteredToys = toys.filter(toy =>
        (!filterBy.inStock || toy.inStock === filterBy.inStock) &&
        (!filterBy.name || toy.name.toLowerCase().includes(filterBy.name.toLowerCase())) &&
        (!filterBy.type || toy.type.toLowerCase().includes(filterBy.type.toLowerCase())));

    const offset = (filterBy.page - 1) * LIMIT;
    filteredToys = filteredToys.slice(offset, offset + LIMIT);
    if (filteredToys) return Promise.resolve(filteredToys);
    else return Promise.reject("[wrong params] or [no toys]");
}
function getById(toyId) {
    const toy = toys.find(toy => toy._id === toyId);
    if (toy) return Promise.resolve(toy);
    else return Promise.reject(`TOY with id-${toyId} not found!`);
}
function add(toy) {
    toy._id = _makeId()
    toys.push(toy)
    return _saveToysToFile().then(() => toy)
}
function update(toy) {
    const toyIdx = toys.findIndex(currToy => currToy._id === toy._id);
    console.log(toyIdx)
    if (toyIdx === -1) return Promise.reject('no such toy');
    toys.splice(toyIdx, 1, toy);
    return _saveToysToFile().then(() => toy);
}
function remove(toyId) {
    var toyIdx = toys.findIndex(toy => toy._id === toyId);
    if (toyIdx < 0) return Promise.reject(`cannot remove id-${toyId} not found!`);
    toys.splice(toyIdx, 1)
    return _saveToysToFile().then();
}


//private

function _makeId(length = 9) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
function _saveToysToFile() {
    return new Promise((resolve, reject) => {
        fs.writeFile("data/toy.json", JSON.stringify(toys, null, 2), (err) => {
            if (err) {
                return reject(err)
            }
            resolve()
        });

    })
}