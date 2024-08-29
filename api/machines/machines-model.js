const db = require('../../data/dbConfig.js');



const getAll = () => {
    return db('machines')
}

const getById = id => {
    return db('machines')
        .where({ id: id })
        .first()
}

function create(machine) {
    return db('machines')
        .insert(machine)
        .then(ids => ({ id: ids[0] }));

}

const deleteById = id => {
    return db('machines')
        .where({ id })
        .delete();
}

module.exports = {
    getAll,
    getById,
    create,
    deleteById,
}