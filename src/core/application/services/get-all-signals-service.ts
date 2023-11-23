import { SignalRepository } from '@/core/infra/repositories/ports/signal-repository'

export class GetAllSignalsService {
  constructor(private signalRepository: SignalRepository) {}

  async execute() {
    const signals = await this.signalRepository.findAll()
    return signals
  }
}
