export declare type AtoB<A, B> = (a: A) => B;
export interface Pipe {
    <A, B>(a: A, fb: AtoB<A, B>): B;
    <A, B, C>(a: A, fb: AtoB<A, B>, fc: AtoB<B, C>): C;
    <A, B, C, D>(a: A, fb: AtoB<A, B>, fc: AtoB<B, C>, fd: AtoB<C, D>): D;
    <A, B, C, D, E>(a: A, fb: AtoB<A, B>, fc: AtoB<B, C>, fd: AtoB<C, D>, fe: AtoB<D, E>): E;
    <A, B, C, D, E, F>(a: A, fb: AtoB<A, B>, fc: AtoB<B, C>, fd: AtoB<C, D>, fe: AtoB<D, E>, ff: AtoB<E, F>): F;
    <A, B, C, D, E, F, G>(a: A, fb: AtoB<A, B>, fc: AtoB<B, C>, fd: AtoB<C, D>, fe: AtoB<D, E>, ff: AtoB<E, F>, fg: AtoB<F, G>): G;
    <A, B, C, D, E, F, G, H>(a: A, fb: AtoB<A, B>, fc: AtoB<B, C>, fd: AtoB<C, D>, fe: AtoB<D, E>, ff: AtoB<E, F>, fg: AtoB<F, G>, fh: AtoB<G, H>): H;
    <A, B, C, D, E, F, G, H, I>(a: A, fb: AtoB<A, B>, fc: AtoB<B, C>, fd: AtoB<C, D>, fe: AtoB<D, E>, ff: AtoB<E, F>, fg: AtoB<F, G>, fh: AtoB<G, H>, fi: AtoB<H, I>): I;
    <A, B, C, D, E, F, G, H, I, J>(a: A, fb: AtoB<A, B>, fc: AtoB<B, C>, fd: AtoB<C, D>, fe: AtoB<D, E>, ff: AtoB<E, F>, fg: AtoB<F, G>, fh: AtoB<G, H>, fi: AtoB<H, I>, fj: AtoB<I, J>): J;
}
export declare const pipe: Pipe;
