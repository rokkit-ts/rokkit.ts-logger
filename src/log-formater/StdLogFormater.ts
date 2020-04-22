import chalk from 'chalk'
import { LogFormater, FormatOptions } from './logFormater'
import { LoggingLevel } from '..'

export class StdLogFormater extends LogFormater {
  public format(data: unknown, options: FormatOptions): string {
    return this.changeColor(
      `${new Date().toISOString()}: ${LoggingLevel[options.loggingLevel]}: ${
        options.componentName
      } > ${typeof data === 'object' ? JSON.stringify(data) : data}`
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
