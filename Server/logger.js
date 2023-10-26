// const { createLogger, format, transports } = require("winston");

// const logger = createLogger({
//     transports: [
//         new transports.Console()
//         // new transports.File({
//         //     level: 'warn',
//         //     filename: 'logsWarnings.log'
//         // }),
//         // new transports.File({
//         //     level: 'error',
//         //     filename: 'logsErrors.log'
//         // })
//     ],
//     format:  format.combine(
//         format.timestamp(),
//         format.json()
        
//         // format.metadata()
//         // format.prettyPrint()
//     )
// })

// module.exports = logger



const { format } = require('winston');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.File({ filename: 'info.log', level: 'info', }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}



