const { dbquery } = require('./async_db');

function saveHolders (holders_data) {
    const sql = `INSERT INTO mdx_holders (tid, address, balance, balanceToString, percent, createAt ) VALUES ?`
    return dbquery(sql, [holders_data])
}

module.exports = {
    saveHolders
}