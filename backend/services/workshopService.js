// ./backend/workshopService.js

const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// GET existing workshops
async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT 
          workshops.id, 
          workshops.group_id,
          workshops.name,
          workshops.format,
          workshops.date_id,
          dates.date AS date,
          workshops.start_time,
          workshops.end_time,
          workshops.capacity,
          workshops.current,
          workshops.teached_by,
          workshops.description,
          workshops.ages,
          workshops.requisites,
          workshops.objective,
          workshops.gender,
          workshops.location,
          workshops.available
        FROM workshops
        LEFT JOIN dates ON workshops.date_id = dates.id
        LIMIT ${offset}, ${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta
    };
}

// POST new workshop
async function create(workshop) {
  const result = await db.query(
    `INSERT INTO workshops 
      (group_id, name, format, date_id, start_time, end_time, capacity, current, teached_by, description, ages, requisites, objective, gender, location, available)
    VALUES 
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      workshop.group_id,
      workshop.name,
      workshop.format,
      workshop.date_id,
      workshop.start_time,
      workshop.end_time,
      workshop.capacity,
      workshop.current,
      workshop.teached_by,
      workshop.description,
      workshop.ages,
      workshop.requisites,
      workshop.objective,
      workshop.gender,
      workshop.location,
      workshop.available
    ]
  );

  let message = 'Error in creating workshop';

  if (result.affectedRows) {
    message = 'Workshop created successfully';
  }

  return { message };
}

module.exports = {
    getMultiple,
    create
};
