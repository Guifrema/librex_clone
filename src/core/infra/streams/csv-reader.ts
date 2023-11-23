import { parse } from 'csv-parse'
import path from 'node:path'
import fs from 'node:fs'

const cvsParser = parse({
  fromLine: 2,
})

export async function readCSVData() {
  const csvPath = path.join(__dirname, 'data.csv')
  const stream = fs.createReadStream(csvPath)
  const data: unknown[][] = []
  const csvFile = stream.pipe(cvsParser)
  for await (const row of csvFile) {
    data.push(row)
  }
  return data
}
