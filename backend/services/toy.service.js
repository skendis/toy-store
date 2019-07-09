const fs = require('fs');
const dbService = require('./mongo.service.js');
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    add
}

const LIMIT = 6;

async function query(filterBy = {}) {
    const criteria = {};
    // if (filterBy.txt) {
    //     criteria.name = filterBy.txt
    // }
    // if (filterBy.minBalance) {
    //     criteria.balance = { $gte: filterBy.minBalance }
    // }

    const offset = (filterBy.page - 1) * LIMIT;
    const collection = await dbService.getCollection('toy')
    try {
        const toys = await collection.find(criteria).toArray();

        return {
            querySize: Math.round(toys.length / LIMIT),
            items: toys.slice(offset, offset + LIMIT)
        }
    } catch (err) {
        console.log('ERROR: cannot find toys')
        throw err;
    }
}
async function getById(toyId) {
    const collection = await dbService.getCollection('toy')
    try {
        const toy = await collection.findOne({ "_id": ObjectId(toyId) })
        return toy
    } catch (err) {
        console.log(`ERROR: cannot find toy ${toyId}`)
        throw err;
    }
}
async function add(toy) {
    const collection = await dbService.getCollection('toy')
    try {
        await collection.insertOne(toy);
        return toy;
    } catch (err) {
        console.log(`ERROR: cannot insert toy`)
        throw err;
    }
}
async function update(toy) {
    const collection = await dbService.getCollection('toy')
    try {
        const toyId = toy._id;
        toy._id = new ObjectId(toyId)
        await collection.updateOne({ "_id": ObjectId(toyId) }, { $set: toy })
        return toy
    } catch (err) {
        console.log(`ERROR: cannot update customer ${toy._id}`)
        throw err;
    }
}
async function remove(toyId) {
    const collection = await dbService.getCollection('toy')
    try {
        await collection.remove({ "_id": ObjectId(toyId) })
    } catch (err) {
        console.log(`ERROR: cannot remove toy ${toyId}`)
        throw err;
    }
}

