import { GetAllSignalsService } from './core/application/services/get-all-signals-service'
import { readCSVData } from './core/infra/streams/csv-reader'
import { convertToMatrix } from './util/matrix-converter'
import { PrismaSignalRepository } from './core/infra/repositories/prisma/prisma-signal-repository'
import { Signal } from './core/domain/entities/signal'
import { CreateSignalService } from './core/application/services/create-signal-service'

async function main() {
  try {
    const data = await readCSVData()
    const signals: Signal[] = data.map((signal) => {
      return {
        code: Number(signal[0]),
        name: String(signal[1]),
        description: String(signal[2]),
        portugueseSentence: String(signal[3]),
        signalSentence: String(signal[4]),
        categories: String(signal[5]).slice(1, -1).split(';'),
        representations: [
          {
            videos: String(signal[6]).slice(1, -1).split(';'),
            hands: convertToMatrix(String(signal[7])),
          },
        ],
      }
    })

    const signalRepository = new PrismaSignalRepository()
    const createSignalService = new CreateSignalService(signalRepository)
    const getAllSignalsService = new GetAllSignalsService(signalRepository)
    for (const signal of signals) {
      await createSignalService.execute(signal)
    }
    const storedSignals = await getAllSignalsService.execute()
    console.log(JSON.stringify(storedSignals))
  } catch (err) {
    console.error(err)
  }
}

main()
