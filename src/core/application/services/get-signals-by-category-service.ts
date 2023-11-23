import { SignalRepository } from "@/core/infra/repositories/ports/signal-repository"

export class GetSignalsByCategoryService {
  constructor(private signalRepository: SignalRepository) {}

  async execute(category: string) {
    const signals = await this.signalRepository.findByCategory(category)
    return signals
  }
}
