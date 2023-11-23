import { SignalRepository } from "@/core/infra/repositories/ports/signal-repository"

export class GetSignalService {
  constructor(private signalRepository: SignalRepository) {}

  async execute(code: number) {
    const signal = await this.signalRepository.findByCode(code)
    return signal
  }
}
