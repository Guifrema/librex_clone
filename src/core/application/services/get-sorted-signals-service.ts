import { SignalRepository } from "@/core/infra/repositories/ports/signal-repository"

export class GetSortedSignalsService {
  constructor(private signalRepository: SignalRepository) {}

  async execute() {
    const signals = (await this.signalRepository.findAll()).sort((a, b) => {
      return a.name[0].charCodeAt(0) - b.name[0].charCodeAt(0)
    })
    return signals
  }
}
