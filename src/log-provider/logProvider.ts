export abstract class LogProvider {
  public abstract writeMessage(message: string): void
  public abstract writeError(message: string): void
}
