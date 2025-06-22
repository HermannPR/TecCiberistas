// ./backend/dateService.js

const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// GET existing dates
async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, date FROM dates LIMIT ${offset}, ${config.listPerPage}`,
    [offset, config.listPerPage]
  );

  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta
  };
}

// POST new date
async function create(date) {
  // Insert new date
  const result = await db.query(`INSERT INTO dates (date) VALUES (?)`, [date]);

  let message = 'Error creating date';
  if (result.affectedRows) {
    message = 'Date created successfully';
  }

  return {
    message,
    id: result.insertId
  };
}

module.exports = {
    getMultiple,
    create
};
