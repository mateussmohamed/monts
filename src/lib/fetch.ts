import fetch from 'node-fetch'


export default async function fetcher(
  url: string,
  options?: Record<string, unknown>
): Promise<Record<string, Record<string, unknown>>> {



export default async function fetcher<T>(url: string, options?: T): Promise<Record<string, Record<string, T>>> {
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
    if (!error.data) {
      error.data = { message: error.message }
    }
    throw error
  }
}
