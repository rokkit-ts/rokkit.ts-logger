import { LoggingLevel } from '../Logger'

export interface FormatOptions {
  componentName: string
  loggingLevel: LoggingLevel
}

export abstract class LogFormater {
  public abstract format(data: unknown, options: FormatOptions): string
}
