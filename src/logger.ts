import { LogProvider } from './log-provider'
import { LogFormater } from './log-formater'

export enum LoggingLevel {
  ERROR = 1,
  WARN = 2,
  INFO = 3,
  DEBUG = 4
}

export class Logger {
  private readonly componentName: string
  private readonly logProvider: LogProvider
  private readonly logFormater: LogFormater
  private loggingLevel: LoggingLevel = LoggingLevel.INFO

  constructor(
    componentName: string,
    loggingLevel: LoggingLevel,
    logProvider: LogProvider,
    logFormater: LogFormater
  ) {
    this.componentName = componentName
    this.loggingLevel = loggingLevel
    this.logProvider = logProvider
    this.logFormater = logFormater
  }

  public set LoggingLevel(loggingLevel: LoggingLevel) {
    this.loggingLevel = loggingLevel
  }
  public get LoggingLevel() {
    return this.loggingLevel
  }
  public info(message: unknown) {
    this.writeMessageForLevel(
      message,
      LoggingLevel.INFO,
      this.logProvider.writeMessage
    )
  }
  public debug(message: unknown) {
    this.writeMessageForLevel(
      message,
      LoggingLevel.DEBUG,
      this.logProvider.writeMessage
    )
  }
  public warn(message: unknown) {
    this.writeMessageForLevel(
      message,
      LoggingLevel.WARN,
      this.logProvider.writeError
    )
  }
  public error(message: unknown) {
    this.writeMessageForLevel(
      message,
      LoggingLevel.ERROR,
      this.logProvider.writeError
    )
  }

  private writeMessageForLevel(
    message: unknown,
    loggingLevel: LoggingLevel,
    writeMessage: (message: string) => void
  ): void {
    if (this.loggingLevel >= loggingLevel) {
      writeMessage(
        this.logFormater.format(message, {
          componentName: this.componentName,
          loggingLevel
        })
      )
    }
  }
}
