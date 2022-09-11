import fetch from 'node-fetch'

export default async function fetcher(url: string, opts?: Record<string, unknown>) {
  try {
    const response = await fetch(url, opts)
    const data = await response.json()

    if (response.ok) {
      return data
    }

    const errorInstance = new Error(response.statusText)
    errorInstance.message = data?.error

    throw errorInstance
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
  }
}
