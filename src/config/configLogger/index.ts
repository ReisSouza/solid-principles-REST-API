import pino from 'pino';

import pretty from 'pino-pretty';

const pinoStyles = pretty({
  colorize: true,
  levelFirst: true,
  translateTime: 'dd-mm-yyyy HH:MM:ss',
});

const logger = pino(
  { level: 'info' },
  pinoStyles,
);

export default logger;
