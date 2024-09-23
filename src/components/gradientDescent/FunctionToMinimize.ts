export const SurfaceFunction = (
  x: number,
  z: number,
  alpha: number = 0.1,
  theta: number = 0.5
) => {
  return 8 * Math.exp(-(x ** 2) - z ** 2) * (alpha + x * (z - theta));
};

export const DerivativeFunction = (
  x: number,
  z: number,
  alpha: number = 0.1,
  theta: number = 0.5
) => {
  const dx =
    -8 *
    Math.exp(-(x ** 2) - z ** 2) *
    (2 * alpha * x - 2 * theta * x * x + theta + (2 * x * x - 1) * z);

  const dz =
    -8 *
    Math.exp(-(x ** 2) - z ** 2) *
    (2 * alpha * z + x * (-2 * theta * z + 2 * z * z - 1));

  return [dx, dz];
};