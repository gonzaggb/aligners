const { Treatment } = require('../../src/database/models');
function addDetails(...value) {
    Treatment.addDetail(value)
}

module.exports = { addDetails }