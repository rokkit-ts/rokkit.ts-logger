import { Logger, LoggingLevel } from './logger'
import { RokkitLogFormater } from './log-formater'
import { StdLogProvider } from './log-provider'

describe('Logger', () => {
  const logger = new Logger(
    'Component',
    LoggingLevel.INFO,
    new StdLogProvider(),
    new RokkitLogFormater()
  )

  beforeEach(() => {
    jest.resetAllMocks()
    jest.spyOn(process.stdout, 'write').mockImplementation(jest.fn())
    jest.spyOn(process.stderr, 'write').mockImplementation(jest.fn())
  })

  it('should print error for lowest log level (debug)', () => {
    // given
    logger.LoggingLevel = LoggingLevel.DEBUG

    // when
    logger.error('test')

    // then
    expect(process.stderr.write).toBeCalledTimes(1)
    expect(process.stderr.write).toBeCalledWith(expect.any(String))
  })

  it('should not print debug when level is set to info', () => {
    // given
    logger.LoggingLevel = LoggingLevel.INFO

    // when
    logger.debug('test')

    // then
    expect(process.stdout.write).toBeCalledTimes(0)
  })

  it('should not print warn when level is set to error', () => {
    // given
    logger.LoggingLevel = LoggingLevel.ERROR

    // when
    logger.warn('test')

    // then
    expect(process.stderr.write).toBeCalledTimes(0)
  })

  it('should not print info when level is set to warn', () => {
    // given
    logger.LoggingLevel = LoggingLevel.WARN

    // when
    logger.info('test')

    // then
    expect(process.stdout.write).toBeCalledTimes(0)
  })
})
