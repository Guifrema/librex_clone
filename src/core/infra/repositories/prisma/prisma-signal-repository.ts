import { Signal } from "@/core/domain/entities/signal"
import { client } from "@/core/infra/db/client"
import { SignalRepository } from "../ports/signal-repository"

export class PrismaSignalRepository implements SignalRepository {
  async save(signal: Signal) {
    const newSignal = await client.signal.create({
      data: {
        code: signal.code,
        name: signal.name,
        description: signal.description,
        portugueseSentence: signal.portugueseSentence,
        signalSentence: signal.signalSentence,
        categories: signal.categories,
      },
    })

    for (const signalRepresentation of signal.representations) {
      await client.signalRepresentation.create({
        data: {
          videos: signalRepresentation.videos,
          hands: signalRepresentation.hands,
          signal: {
            connect: {
              id: newSignal.id,
            },
          },
        },
      })
    }
  }

  async findByCode(code: number): Promise<Signal | undefined> {
    const signal = await client.signal.findUnique({
      where: {
        code,
      },
      include: {
        representations: {
          select: {
            videos: true,
            hands: true,
          },
        },
      },
    })

    if (!signal) return
    return signal as Signal
  }

  async findByCategory(category: string): Promise<Signal[] | undefined> {
    const signals = await client.signal.findMany({
      where: {
        categories: {
          has: category,
        },
      },
      include: {
        representations: {
          select: {
            videos: true,
            hands: true,
          },
        },
      },
    })

    if (!signals) return
    return signals as Signal[]
  }

  async findByBeginning(beginning: string): Promise<Signal[] | undefined> {
    const signals = await client.signal.findMany({
      where: {
        name: {
          startsWith: beginning,
        },
      },
      include: {
        representations: {
          select: {
            videos: true,
            hands: true,
          },
        },
      },
    })

    if (!signals) return
    return signals as Signal[]
  }

  async findAll(): Promise<Signal[]> {
    const signals = await client.signal.findMany({
      include: {
        representations: {
          select: {
            videos: true,
            hands: true,
          },
        },
      },
    })
    return signals as Signal[]
  }
}
