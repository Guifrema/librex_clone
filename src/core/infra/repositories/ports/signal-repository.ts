import { Signal } from "@/core/domain/entities/signal"

export interface SignalRepository {
  save(signal: Signal): Promise<void>
  findByCode(code: number): Promise<Signal | undefined>
  findByCategory(category: string): Promise<Signal[] | undefined>
  findAll(): Promise<Signal[]>
  findByBeginning(category: string): Promise<Signal[] | undefined>
}
