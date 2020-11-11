const winston = require('winston')
const path = require('path')

module.exports = winston.createLogger({
    format: winston.format.combine(
        winston.format.splat(),
        winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        winston.format.colorize(),
        winston.format.printf(log => {
            if (log.stack) {
                return `[${log.timestamp}] [${log.level}] ${log.stack}`
            }
            console.log(__dirname)
            return  `[${log.timestamp}] [${log.level}] ${log.message}`
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            level: 'info',
            filename: path.join(__dirname, '\\logs\\app.log'),
            maxsize: 5242880
        })
    ]
})