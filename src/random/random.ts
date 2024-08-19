/**
 * Generate a random integer between `min` and `max` inclusive.
 * @param min - Min integer
 * @param max - Max integer
 * @returns - An random integer between `min` and `max` inclusive.
 */
export const getRandInt = (min: number, max: number) => {
  if (!(Number.isFinite(min) && Number.isInteger(min))) {
    throw new TypeError("min must be an integer");
  }
  if (!(Number.isFinite(max) && Number.isInteger(max))) {
    throw new TypeError("max must be an integer");
  }
  if (min >= max) {
    throw new TypeError("min must be less than max");
  }
  return Math.floor(Math.random() * (max - min) + min);
};
