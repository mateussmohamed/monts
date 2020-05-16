import unfetch from 'isomorphic-unfetch'

export default (url: string, options: object): Promise<void> =>
  unfetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  }).then((r) => r.json())
