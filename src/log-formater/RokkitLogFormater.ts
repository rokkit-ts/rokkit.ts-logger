import chalk from 'chalk'
import { LogFormater, FormatOptions } from './LogFormater'
import { LoggingLevel } from '../Logger'

export class RokkitLogFormater extends LogFormater {
  public format(data: unknown, options: FormatOptions): string {
    const message = {
      level: LoggingLevel[options.loggingLevel],
      date: new Date().toISOString(),
      component: options.componentName,
      message: data
    }
    return this.changeColor(
      `${JSON.stringify(message)}\n`,
      options?.loggingLevel
    )
  }

  private changeColor(message: string, loggingLevel?: LoggingLevel): string {
    switch (loggingLevel) {
      case LoggingLevel.ERROR:
        return chalk.red(message)
      case LoggingLevel.DEBUG:
        return chalk.green(message)
      case LoggingLevel.INFO:
        return chalk.blue(message)
      case LoggingLevel.WARN:
        return chalk.yellow(message)
      default:
        return message
    }
  }
}
