
export function to <R, E>(
  promise: Promise<R>
): Promise<[E | undefined, R | undefined]> {
  return promise
    .then<[undefined, R]>((result: R) => [undefined, result])
    .catch<[E, undefined]>((error: E) => [error, undefined])
}

export default to
