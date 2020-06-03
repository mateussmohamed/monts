import fetch from 'node-fetch'

export default async function fetcher(
  url: string,
  options?: Record<string, unknown>
): Promise<Record<string, Record<string, unknown>>> {
  try {
    const response = await fetch(url, options)
    const { data, error } = await response.json()

    if (response.ok) {
      return data
    }

    const errorInstance = new Error(response.statusText)
    errorInstance.message = error

    throw errorInstance
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message }
    }
    throw error
  }
}
