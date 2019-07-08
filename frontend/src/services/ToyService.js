const axios = require('axios');


export default {
    query,
    remove,
    getById,
    save
}

function query(filterBy) {
    return axios.get(`${_getUrl()}?page=${filterBy.page}`)
        .then(res => res.data)
}
function remove(toyId) {
    console.log(toyId)
    return axios.delete(`${_getUrl()}/${toyId}`)
        .then(res => res.data)
}
function getById(toyId) {
    return axios.get(`${_getUrl()}/${toyId}`)
        .then(res => res.data)
}

function save(toy) {
    toy = JSON.parse(JSON.stringify(toy))
    if (toy._id) {
        return axios.put(_getUrl(), toy)
            .then(res => res.data)
    } else {
        toy.createdAt = Date.now();
        toy.inStock = toy.inStock;
        return axios.post(_getUrl(), toy)
            .then(res => res.data)
    }
}

function _getUrl() {
    return BASE_URL;
}


const BASE_URL = (process.env.NODE_ENV !== 'development') ? 'api/toy' : '//localhost:3000/api/toy';