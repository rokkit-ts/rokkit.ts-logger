import { LogProvider } from '.'

export class StdLogProvider extends LogProvider {
  public writeMessage(message: string): void {
    process.stdout.write(message)
  }
  public writeError(message: string): void {
    process.stderr.write(message)
  }
}
