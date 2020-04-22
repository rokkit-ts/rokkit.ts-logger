import { FormatOptions } from './LogFormater'
import { StdLogFormater } from './StdLogFormater'
import { LoggingLevel } from '../Logger'

describe('StdLogFormater', () => {
  it('should print string message as formated string', () => {
    // given
    const message = 'Test message'
    const options: FormatOptions = {
      componentName: 'test',
      loggingLevel: LoggingLevel.INFO
    }
    const expectedMessage = 'INFO: test > Test message'
    // when
    const formatedMessage = new StdLogFormater().format(message, options)
    // then
    expect(formatedMessage).toContain(expectedMessage)
  })

  it('should print boolean message as formated string', () => {
    // given
    const message = true
    const options: FormatOptions = {
      componentName: 'test',
      loggingLevel: LoggingLevel.INFO
    }
    const expectedMessage = 'INFO: test > true'
    // when
    const formatedMessage = new StdLogFormater().format(message, options)
    // then
    expect(formatedMessage).toContain(expectedMessage)
  })

  it('should print number message as formated string', () => {
    // given
    const message = 100.0123
    const options: FormatOptions = {
      componentName: 'test',
      loggingLevel: LoggingLevel.INFO
    }
    const expectedMessage = 'INFO: test > 100.0123'
    // when
    const formatedMessage = new StdLogFormater().format(message, options)
    // then
    expect(formatedMessage).toContain(expectedMessage)
  })

  it('should print object message as formated string', () => {
    // given
    const message = { test: 'test' }
    const options: FormatOptions = {
      componentName: 'test',
      loggingLevel: LoggingLevel.INFO
    }
    const expectedMessage = 'INFO: test > {"test":"test"}'
    // when
    const formatedMessage = new StdLogFormater().format(message, options)
    // then
    expect(formatedMessage).toContain(expectedMessage)
  })
})
