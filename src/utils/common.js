import { constants } from "./constants.js";

export function freq(period) {
  return (1 / Number(period)).toFixed(4);
}

export function movimentSpace(radius) {
  return 2 * constants.pi * radius;
}

export function angularVelocity(period) {
  return (2 * constants.pi) / Number(freq(period));
}

export function getRadius(x1, y1, x2, y2) {
  const pointX = x2 - x1;
  const pointY = y2 - y1;
  return Number(
    Math.sqrt(Math.pow(pointX, 2) + Math.pow(pointY, 2)).toFixed(4)
  );
}
