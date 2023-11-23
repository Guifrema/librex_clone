import { SignalRepository } from "@/core/infra/repositories/ports/signal-repository"

export class GetSignalsByBeginningService {
  constructor(private signalRepository: SignalRepository) {}

  async execute(beginning: string) {
    const signals = await this.signalRepository.findByBeginning(beginning)
    return signals
  }
}
