import fetch from 'node-fetch'

export default async function fetcher<T>(url: string, options?: T) {
  try {
    const response = await fetch(url, options)
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
