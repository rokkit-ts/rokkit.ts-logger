import { StdLogProvider } from './stdLogProvider'

describe('StdLogProvider', () => {
  it('should write a message to stdOut', () => {
    // given
    jest.spyOn(process.stdout, 'write').mockImplementation(jest.fn())
    const message = 'some message'
    const stdLogProvider = new StdLogProvider()
    // when
    stdLogProvider.writeMessage(message)
    // then
    expect(process.stdout.write).toHaveBeenCalledTimes(1)
    expect(process.stdout.write).toHaveBeenCalledWith(message)
  })

  it('should write a message to stdError', () => {
    // given
    jest.spyOn(process.stderr, 'write').mockImplementation(jest.fn())
    const message = 'some message'
    const stdLogProvider = new StdLogProvider()
    // when
    stdLogProvider.writeError(message)
    // then
    expect(process.stdout.write).toHaveBeenCalledTimes(1)
    expect(process.stdout.write).toHaveBeenCalledWith(message)
  })
})
