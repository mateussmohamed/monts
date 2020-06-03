function omit(obj: Record<string, unknown>, keys: string[]): Record<string, unknown> {
  return Object.keys(obj)
    .filter((k) => !keys.includes(k))
    .reduce((res, k) => Object.assign(res, { [k]: obj[k] }), {})
}

export default omit
