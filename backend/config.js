// ./backend/config.js
const socketPath = `${process.env.PWD}/mysql-data/mysql.sock`;

const config = {
    socketPath: socketPath,
    db: {
    	socketPath: socketPath,
    	user: 'root',
    	database: 'ciberistas',
	connectTimeout: 60000
    },
    listPerPage: 10,
};

module.exports = config;
