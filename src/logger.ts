import chalk from 'chalk';

export const loggerLevel = {
  info: chalk.cyan,
  success: chalk.green,
  warning: chalk.yellow,
  error: chalk.red,
};

export type LoggerLevel = {
  level: typeof loggerLevel;
};
export type LoggerProps = LoggerLevel & {
  [K in keyof typeof loggerLevel]: (...args: any) => void;
};

type Logger = (...args: any[]) => void;

export function createLogger(
  logger: Logger = console.log,
): Logger & LoggerProps {
  const result = logger as Logger & LoggerProps;

  result.level = loggerLevel;
  result.info = (...args) => logger(loggerLevel.info(...args));
  result.success = (...args) => logger(loggerLevel.success(...args));
  result.warning = (...args) => logger(loggerLevel.warning(...args));
  result.error = (...args) => logger(loggerLevel.error(...args));

  return result;
}
