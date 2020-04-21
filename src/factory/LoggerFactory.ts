import {
  LoggingLevel,
  LogProvider,
  StdLogProvider,
  Logger,
  RokkitLogFormater,
  LogFormater
} from '..'

export interface LoggerOptions {
  loggingLevel?: LoggingLevel
  logProvider?: LogProvider
  logFormater?: LogFormater
}

export class LoggerFactory {
  private static readonly globalLoggers: Logger[] = []
  private static logProvider: LogProvider = new StdLogProvider()
  private static logFormater: LogFormater = new RokkitLogFormater()
  private static loggingLevel = LoggingLevel.INFO

  private constructor() {}

  public static globalLogProvider(logProvider: LogProvider): void {
    this.logProvider = logProvider
    this.updateGlobalLogger(logger => (logger.LogProvider = logProvider))
  }

  public static globalLogFormater(logFormater: LogFormater): void {
    this.logFormater = logFormater
    this.updateGlobalLogger(logger => (logger.LogFormater = logFormater))
  }

  public static globalLoggingLevel(loggingLevel: LoggingLevel): void {
    this.loggingLevel = loggingLevel
    this.updateGlobalLogger(logger => (logger.LoggingLevel = loggingLevel))
  }

  public static create(
    componentName: string,
    global = false,
    options?: LoggerOptions
  ): Logger {
    const logger = new Logger(
      componentName,
      options?.loggingLevel ?? this.loggingLevel,
      options?.logProvider ?? this.logProvider,
      options?.logFormater ?? this.logFormater
    )
    if (global) {
      this.globalLoggers.push(logger)
    }
    return logger
  }

  private static updateGlobalLogger(updateFn: (Logger: Logger) => void): void {
    this.globalLoggers.forEach(updateFn)
  }
}
