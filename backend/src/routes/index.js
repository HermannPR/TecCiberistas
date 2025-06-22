const express = require('express');
const router = express Router();

// GET all workshops
app.get('/workshops', (req, res) => {
    const sql = `
        SELECT
            w.id,
            w.group_id,
            w.name,
            w.format,
            d.date,
            w.start_time,
            w.end_time,
            w.capacity,
            w.current,
            w.teached_by,
            w.description,
            w.ages,
            w.requisites,
            w.objective,
            w.gender,
            w.location,
            w.available
        FROM workshops w
        LEFT JOIN dates d ON w.date_id = d.id
    `;

    db.query(sql, (err, results) => {
        if (err) {
            console.error('ERROR while getting the workshops:', err);
            res.status(500).json({ error: 'ERROR - Could not get workshops' });
        } else {
            res.json(results);
        }
    });
});
