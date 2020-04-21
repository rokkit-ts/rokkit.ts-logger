import { LoggerFactory } from './LoggerFactory'
import { StdLogProvider } from '../log-provider'
import { LoggingLevel } from '../logger'
import { RokkitLogFormater } from '../log-formater'

describe('LoggerFactory', () => {
  it('should create logger without options', () => {
    // given
    const componentName = 'sample'
    // when
    const logger = LoggerFactory.create(componentName)
    // then
    expect(logger).toBeDefined()
    expect(logger.LogFormater).toBeDefined()
    expect(logger.LoggingLevel).toBeDefined()
    expect(logger.LogProvider).toBeDefined()
  })

  it('should create logger with options', () => {
    // given
    const componentName = 'sample'
    const provider = new StdLogProvider()
    const loggingLvl = LoggingLevel.ERROR
    const formater = new RokkitLogFormater()
    // when
    const logger = LoggerFactory.create(componentName, false, {
      logFormater: formater,
      logProvider: provider,
      loggingLevel: loggingLvl
    })
    // then
    expect(logger.LogFormater).toBe(formater)
    expect(logger.LoggingLevel).toBe(loggingLvl)
    expect(logger.LogProvider).toBe(provider)
  })

  it('should create globalLogger and change the logging level', () => {
    // given
    const componentName = 'sample'
    // when
    const logger = LoggerFactory.create(componentName, true, {
      loggingLevel: LoggingLevel.INFO
    })
    expect(logger.LoggingLevel).toBe(LoggingLevel.INFO)
    LoggerFactory.globalLoggingLevel(LoggingLevel.ERROR)
    // then
    expect(logger.LoggingLevel).toBe(LoggingLevel.ERROR)
  })

  it('should create globalLogger and change the logging provider', () => {
    // given
    const componentName = 'sample'
    const provider = new StdLogProvider()
    // when
    const logger = LoggerFactory.create(componentName, true)
    LoggerFactory.globalLogProvider(provider)
    // then
    expect(logger.LogProvider).toBe(provider)
  })

  it('should create globalLogger and change the logging formater', () => {
    // given
    const componentName = 'sample'
    const formater = new RokkitLogFormater()
    // when
    const logger = LoggerFactory.create(componentName, true)
    LoggerFactory.globalLogFormater(formater)
    // then
    expect(logger.LogFormater).toBe(formater)
  })
})
