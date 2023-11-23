import { SignalRepresentation } from './signal-representation'

export interface Signal {
  id?: string
  code: number
  name: string
  description: string
  portugueseSentence: string
  signalSentence: string
  categories: string[]
  representations: SignalRepresentation[]
}
