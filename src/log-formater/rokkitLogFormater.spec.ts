import { RokkitLogFormater } from './rokkitLogFormater'
import { LoggingLevel } from '../logger'

describe('RokkitLogFormater', () => {
  it('should return correct formatted string', () => {
    // given
    const formater = new RokkitLogFormater()

    // when
    const actualString = formater.format('some test string', {
      componentName: 'TestComponent',
      loggingLevel: LoggingLevel.INFO
    })
    // then
    expect(actualString).toBeDefined()
    expect(actualString).toContain('some test string')
    expect(actualString).toContain('TestComponent')
  })
  it('should return correct formatted string without options', () => {
    // given
    const formater = new RokkitLogFormater()

    // when
    const actualString = formater.format('some test string')
    // then
    expect(actualString).toBeDefined()
    expect(actualString).toContain('some test string')
    expect(actualString).toContain('Rokkit.ts')
  })
})
