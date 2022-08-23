
try {
    const winston = require('winston');
    const logger = winston.createLogger({
        level: 'error',
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: 'error.log', level: 'error' })
        ],
    });
    const e = new Error('Error: Este es un mensaje que se muestra si surge elgún error al intentar mostrar otro error.');
    logger.error('Este es un error con un mensaje personalizado.');
} catch (e) {
    console.log(e)
} finally {
    console.log('Este mensaje se mostrará siempre al final del proceso.');
}