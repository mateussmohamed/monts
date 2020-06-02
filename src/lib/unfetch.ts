import unfectch from 'isomorphic-unfetch'

export default async function fetcher(...args: unfectch.IsomorphicRequest): Promise<unknown> {
  try {
    const response = await unfectch(...args)

    // if the server replies, there's always some data in json
    // if there's a network error, it will throw at the previous line
    const { data, error } = await response.json()

    if (response.ok) {
      return data
    }

    const errorInstance = new Error(response.statusText)
    errorInstance.response = response
    errorInstance.data = error

    throw errorInstance
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message }
    }
    throw error
  }
}
