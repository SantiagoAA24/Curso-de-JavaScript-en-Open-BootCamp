const winston = require('winston');

const logger = winston.createLogger({
    level: 'info', // nivel de error minimo a tomar
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console(), // Para mostrar los errores por consola
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

module.exports = logger;
