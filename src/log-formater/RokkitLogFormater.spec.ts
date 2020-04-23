import { RokkitLogFormater } from './RokkitLogFormater'
import { LoggingLevel } from '../Logger'

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
    expect(actualString).toContain('INFO')
  })
})
