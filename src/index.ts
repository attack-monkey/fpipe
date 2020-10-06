export type AtoB<A, B> = (a: A) => B

export interface Fpipe {
  <A, B>(a: A, fb: AtoB<A, B>): B
  <A, B, C>(a: A, fb: AtoB<A, B>, fc: AtoB<B, C>): C
  <A, B, C, D>(a: A, fb: AtoB<A, B>, fc: AtoB<B, C>, fd: AtoB<C, D>): D
  <A, B, C, D, E>(a: A, fb: AtoB<A, B>, fc: AtoB<B, C>, fd: AtoB<C, D>, fe: AtoB<D, E>): E
  <A, B, C, D, E, F>(a: A, fb: AtoB<A, B>, fc: AtoB<B, C>, fd: AtoB<C, D>, fe: AtoB<D, E>, ff: AtoB<E, F>): F
  <A, B, C, D, E, F, G>(a: A, fb: AtoB<A, B>, fc: AtoB<B, C>, fd: AtoB<C, D>, fe: AtoB<D, E>, ff: AtoB<E, F>, fg: AtoB<F, G>): G
  <A, B, C, D, E, F, G, H>(a: A, fb: AtoB<A, B>, fc: AtoB<B, C>, fd: AtoB<C, D>, fe: AtoB<D, E>, ff: AtoB<E, F>, fg: AtoB<F, G>, fh: AtoB<G, H>): H
  <A, B, C, D, E, F, G, H, I>(a: A, fb: AtoB<A, B>, fc: AtoB<B, C>, fd: AtoB<C, D>, fe: AtoB<D, E>, ff: AtoB<E, F>, fg: AtoB<F, G>, fh: AtoB<G, H>, fi: AtoB<H, I>): I
  <A, B, C, D, E, F, G, H, I, J>(a: A, fb: AtoB<A, B>, fc: AtoB<B, C>, fd: AtoB<C, D>, fe: AtoB<D, E>, ff: AtoB<E, F>, fg: AtoB<F, G>, fh: AtoB<G, H>, fi: AtoB<H, I>, fj: AtoB<I, J>): J
}

export const fpipe: Fpipe = (a: any, b: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any) => {
  const ba = b ? b(a) : a
  const cba = c ? c(ba) : ba
  const dcba = d ? d(cba) : cba
  const edcba = e ? e(dcba) : dcba
  const fedcba = f ? f(edcba) : edcba
  const gfedcba = g ? g(fedcba) : fedcba
  const hgfedcba = h ? h(gfedcba) : gfedcba
  const ihgfedcba = i ? i(hgfedcba) : hgfedcba
  const jihgfedcba = j ? j(ihgfedcba) : ihgfedcba
  return jihgfedcba
}