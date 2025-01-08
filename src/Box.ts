export const Box = <T>(x: T[]) => ({
  map: (f: Function) => Box(f(x)),
  fold: (f: Function) => f(x),

});