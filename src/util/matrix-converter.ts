export function convertToMatrix(input: string): string[][] {
  input = input.slice(1, -1)
  const values = input.split('];[')
  const matrix = values.map((value: string) => {
    value = value.replace(/\[|\]/g, '')
    const subValues = value.split(';').map((item) => item.trim())
    return subValues
  })
  return matrix
}
