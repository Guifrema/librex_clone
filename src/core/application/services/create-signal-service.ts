import { SignalRepository } from '@/core/infra/repositories/ports/signal-repository'
import { Signal } from '@/core/domain/entities/signal'

export class CreateSignalService {
  constructor(private signalRepository: SignalRepository) {}

  async execute(signal: Signal) {
    const isSignalAlreadyStored = await this.signalRepository.findByCode(
      signal.code,
    )
    if (isSignalAlreadyStored) {
      console.log(`A signal with code ${signal.code} already exists`)
      return
    }
    await this.signalRepository.save(signal)
    console.log(`Signal code:${signal.code} was created`)
  }
}
