import unfectch from 'isomorphic-unfetch'

type Params = {
  url: string
  options?: Record<string, unknown> | undefined
}
export default async function fetcher({ url, options }: Params): Promise<Record<string, Record<string, unknown>>> {
  try {
    const response = await unfectch(url, options)

    // if the server replies, there's always some data in json
    // if there's a network error, it will throw at the previous line
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
