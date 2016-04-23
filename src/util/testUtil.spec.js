import { smap, nat } from 'jsverify'

export function when(guard, test) {
  return !guard || test
}

export const positiveInt = nat.smap(n => n + 1, n => n - 1)
